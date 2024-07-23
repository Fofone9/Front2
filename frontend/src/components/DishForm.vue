<template>
    <form @submit.prevent>
        <h3>Добавить блюдо</h3>
        <pavlov-input
            v-focus
            v-model="dish.name"
            type="text"
            placeholder="Название"
        >
        </pavlov-input>
        <pavlov-select v-model="dish.dish_type" :options="types"></pavlov-select>
        <pavlov-select v-model="dish.cook" :options="cooks"></pavlov-select>
        <pavlov-btn @click="createDish" style="align-self: flex-end;" class="form-btn">Добавить</pavlov-btn>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                dish: {
                    name:'',
                    dish_type:'',
                    cook:'',
                },
                types:[
                {value:'Bakery', name: 'Выпечка'},
                {value:'Breakfast', name: 'Завтрак'},
                {value:'Dessert', name: 'Десерт'},
                {value:'On coals', name: 'На углях'},
                {value:'Beverages', name: 'Напитки'},
                {value:'Soups', name: 'Супы'},
                {value:'Cold snacks',name: 'Холодные закуски'},
                {value:'Hot dishes', name: 'Горячие блюда'},
                {value:'Side dishes', name: 'Гарниры'},
                ],
                cooks:[],
            }
        },
        methods:{
            createDish(){
                console.log(1)
                this.$emit('create', this.dish)
                this.dish = {
                    name:'',
                    dish_type:'',
                    cook: '',
                }
            },
            async fetchCooks(){
                const response = await this.$ajax.get('cooks/')
                let array = response.data
                array.forEach(element => {
                this.cooks.push({value:element.id, name: `${element.surname} ${element.name}`})
                });
            }
        },
        created(){
           this.fetchCooks()
        }
    }
</script>

<style scoped>
form{
  margin-top: 15px;
  display: flex;
  flex-direction: column;

}
</style>