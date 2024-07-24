<template>
    <div>
        <v-container fluid class="pa-0">
            <v-app-bar
                color="#008080"
                dark
                class="d-flex align-center justify-space-around"
                height="66px"
                >
                    <v-btn
                        class="mr-3 py-1"
                        tile
                        color="#ffd900"
                        
                        outlined
                        @click="$router.push('/dishes')"
                        >
                            Блюда
                    </v-btn>
                    <v-btn
                        class="mr-3 py-1"
                        tile
                        outlined
                        color="#ffd900"
                        
                        over
                        @click="$router.push('/ingredients')"
                        >
                            Ингредиенты
                    </v-btn>
                    <v-btn
                        class="mr-3 py-1"
                        tile
                        outlined
                        color="#ffd900"
                       
                        over
                        @click="$router.push('/cooks')"
                        >   
                            Повара
                    </v-btn>    
            </v-app-bar>
        </v-container>
        
        <v-card
            width="60%"
            class="mx-auto mt-4 pa-4"
            elevation="0">
            <v-card
                class="mx-auto my-4 pa-4 d-flex"
                elevation="2"
                >
                    <strong>Павлов Александр</strong>
                    <v-btn
                        tile
                        outlined
                        color="#008080"
                        
                        over
                        class="ml-auto py-1"
                        @click="logOut">
                            Выход
                    </v-btn>
            </v-card>
            <v-text-field
                v-model="searchQuery"
                color="#008080"
                label="Поиск по названию"
                outlined
                tile
                hide-details="auto"
                class="form-field"
            ></v-text-field>
            <v-btn
                outlined
                tile
                color="#008080"
                over
                class="ml-auto mt-4 py-1"
                @click="fetchDishes">
                Обновить
            </v-btn>
            <v-card
                class="mx-auto d-flex justify-space-between align-center"
                elevation="0"
                >
                    <v-select
                        width="40%"
                        class="mt-10 mr-10"
                        v-model="selectedSort"
                        :items="sortOptions"
                        label="Сортировать"
                        solo
                    ></v-select>
                    <v-btn
                        outlined
                        tile
                        color="blue"
                        over
                        class="ml-auto mt-4 py-1"
                        @click="showDialog">
                            Добавить блюдо
                    </v-btn>
            </v-card>
            <v-dialog
                transition="dialog-bottom-transition"
                max-width="600"
                v-model="dialogVisible"
            >
                <v-card
                    class="pa-4">
                    <v-text-field
                        label="Название"
                        v-model="dish.name"
                        hide-details="auto"
                    ></v-text-field>
                    <v-select
                        width="40%"
                        class="mt-4 "
                        v-model="dish.dish_type"
                        :items="types"
                        label="Тип блюда"
                        solo
                    ></v-select>
                    <v-select
                        width="40%"
                        class="mt-4 "
                        v-model="dish.cook"
                        :items="cooks"
                        label="Повар"
                        solo
                    ></v-select>
                    <v-btn
                        outlined
                        tile
                        color="blue"
                        over
                        class="ml-auto mt-4 py-1"
                        @click="createDish">
                            Добавить
                    </v-btn>
                </v-card>
            </v-dialog>
            <dish-list :dishes="sortedAndSearchedDishes" @remove="removeDish" v-if="!isLoading" :isActive="dialogVisible"></dish-list>
            <div v-else>Идет загрузка</div>
        </v-card>
        
    </div>
</template>

<script>
import DishForm from '@/components/DishForm.vue';
import DishList from '@/components/DishList.vue';
    export default {
        name: "DishPage",
        components:{
            DishForm, DishList
        },
        data(){
            return{
                isLoading: false,
                dishes:[],
                dialogVisible: false,
                selectedSort: '',
                searchQuery: '',
                dish: {
                    name:'',
                    dish_type:'',
                    cook:'',
                },
                cooks:[],
                types:[
                {value:'Bakery', text: 'Выпечка'},
                {value:'Breakfast', text: 'Завтрак'},
                {value:'Dessert', text: 'Десерт'},
                {value:'On coals', text: 'На углях'},
                {value:'Beverages', text: 'Напитки'},
                {value:'Soups', text: 'Супы'},
                {value:'Cold snacks',text: 'Холодные закуски'},
                {value:'Hot dishes', text: 'Горячие блюда'},
                {value:'Side dishes', text: 'Гарниры'},
                ],
                sortOptions: [
                    {value: 'name', text: "По названию блюда"},
                    {value: 'dish_type', text: "По типу"}
                ]
            }
        },
        methods:{
            logOut(){
                this.$store.commit('login/removeToken')
                this.$router.push('/login')
            },
            createDish(){
                let dish = {...this.dish}
                if (dish.name == '' || dish.dish_type == '' || dish.cook == '')
                    {
                    alert("Введите все данные")
                    return
                    }
                const content ={
                    name: dish.name,
                    dish_type: dish.dish_type,
                    author: dish.cook,
                    ingredients: []
                }
                this.$ajax.post('dishes/', content)
                .then(response => this.dishes.push({...dish, id:response.data.id}))
                this.dish.name = ''
                this.dish.cook = ''
                this.dish.dish_type = ''
            },
            removeDish(dish){
                this.$ajax.delete(`dishes/${dish.id}/`)
                this.dishes = this.dishes.filter(d => d.id !== dish.id)
            },
            showDialog(){
                this.dialogVisible = true
            },
            async fetchDishes(){
                try{
                    this.isLoading = true
                    const response = await this.$ajax.get('dishes/')
                    this.dishes = response.data
                }catch(e){
                    alert('Ошибка')
                }finally{
                    this.isLoading = false
                }
            },
            async fetchCooks(){
                
                const response = await this.$ajax.get('cooks/')
                let array = response.data
                array.forEach(element => {
                    this.cooks.push({value:element.id, text: `${element.surname} ${element.name}`})
                });
            }
        },
        watch: {
            selectedSort(newValue){
                this.dishes.sort((dish1, dish2)=>{
                return dish1[newValue].localeCompare(dish2[newValue])
                })
            }
        },
        computed:{
            sortedAndSearchedDishes(){
                return this.dishes.filter(dish => dish.name.includes(this.searchQuery))
            }
        },
        mounted(){
            this.fetchDishes();
            this.fetchCooks();
        }
                
    }
</script>

<style >
*{
    padding: 0;
    margin: 0;
}
</style>