<template>
  <div>
    <Navbar></Navbar>
    <div class="main-block">
      <app-header></app-header>
      <pavlov-btn @click="fetchDishes">Обновить</pavlov-btn>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn">Добавить блюдо</pavlov-btn>
      </div>
      
      <pavlov-dialog v-model="dialogVisible">
        <dish-form @create="createDish"></dish-form>
      </pavlov-dialog>
      
      <dish-list :dishes="dishes" @remove="removeDish" v-if="!isLoading"></dish-list>
      <div v-else>Идет загрузка</div>
    </div>
  </div>
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import DishForm from "@/components/DishForm.vue";
  import DishList from "@/components/DishList.vue";
  import Navbar from "@/components/Navbar.vue"
  import axios from "axios";
  import store from "@/store"

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
        sortOptions: [
          {value: 'dishName', name: "По названию блюда"},
          {value: 'dishName', name: "По имени повара"}
        ]
      }
    },
    methods:{
      createDish(dish){
        const token = store.state.login.token
          
          if (dish.name == '' || dish.dish_type == '')
            {
              alert("Введите все данные")
              return
            }
          const content ={
            name: dish.name,
            dish_type: dish.dish_type,
            author: 1,
            ingredients: []
          }
          this.$ajax.post('dishes/', content)
          .then(response => dish.id = response.data.id)
          this.dishes.push(dish)
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
    mounted(){
      this.fetchDishes();
    }
  }
  </script>
  
  <style >
  
  </style>
  