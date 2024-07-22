<template>
    <div class="main-block">
      <app-header></app-header>
      <pavlov-btn @click="fetchDishes">получить блюда</pavlov-btn>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn">Добавить блюдо</pavlov-btn>
      </div>
      
      <pavlov-dialog v-model="dialogVisible">
        <dish-form @create="createDish"></dish-form>
      </pavlov-dialog>
      
      <dish-list :dishes="dishes" @remove="removeDish"></dish-list>
    </div>
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import DishForm from "@/components/DishForm.vue";
  import DishList from "@/components/DishList.vue";
  import axios from "axios";
  import store from "@/store"

  export default{
    components:{
      AppHeader, DishForm, DishList,
    },
    name: "DishesPage",
    data(){
      return{
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
            dish_type: dish.dish_type
          }
          const headers ={'Authorization': `Token ${token}`}
          console.log(content)
          axios.post('http://fofone9.pythonanywhere.com/api/dishes/', content, {headers})
          .then(response => dish.id = response.data.id)
          this.dishes.push(dish)
      },
      removeDish(dish){
        const token = store.state.login.token
        axios.delete(
        `http://fofone9.pythonanywhere.com/api/dishes/${dish.id}/`,
        {
          headers: {
            "Authorization": `Token ${token}`,
          },
        }
        )     
        this.dishes = this.dishes.filter(d => d.id !== dish.id)
      },
      showDialog(){
        this.dialogVisible = true
      },
      async fetchDishes(){
        try{
          const response = await axios.get('http://fofone9.pythonanywhere.com/api/dishes/', {
            headers: {
              'Authorization': 'Token ae455d78319cf6819dbaa62c5bbbddd2b180fa37'
            }
          })
          this.dishes = response.data
        }catch(e){
          alert('Ошибка')
        }
      }
    },
    watch: {
      selectedSort(newValue){
        this.dishes.sort((dish1, dish2)=>{
          return dish1[newValue].localeCompare(dish2[newValue])
        })
      }
    }
  }
  </script>
  
  <style >
  
  </style>
  