<template>
  <div>
    <Navbar :isActive="dialogVisible"></Navbar>
    <div class="main-block">
      <app-header :isActive="dialogVisible"></app-header>
      <pavlov-input v-model="searchQuery" placeholder="Поиск по названию" :class="{active: dialogVisible}"></pavlov-input>
      <pavlov-btn @click="fetchDishes" :class="{active: dialogVisible}">Обновить</pavlov-btn>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions" :class="{active: dialogVisible}"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn" :class="{active: dialogVisible}">Добавить блюдо</pavlov-btn>
      </div>
      
      <pavlov-dialog v-model="dialogVisible">
        <dish-form @create="createDish"></dish-form>
      </pavlov-dialog>
      
      <dish-list :dishes="sortedAndSearchedDishes" @remove="removeDish" v-if="!isLoading" :isActive="dialogVisible"></dish-list>
      <div v-else>Идет загрузка</div>
    </div>
  </div>
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import DishForm from "@/components/DishForm.vue";
  import DishList from "@/components/DishList.vue";
  import Navbar from "@/components/Navbar.vue"


  export default{
    components:{
      AppHeader, DishForm, DishList,Navbar
    },
    name: "DishesPage",
    data(){
      return{
        isLoading: false,
        dishes:[],
        dialogVisible: false,
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
          {value: 'name', name: "По названию блюда"},
          {value: 'dish_type', name: "По типу"}
        ]
      }
    },
    methods:{
      createDish(dish){
          
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
    }
  }
  </script>
  
  <style >
  
  </style>
  