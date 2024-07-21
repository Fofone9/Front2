<template>
    <div class="main-block">
      <app-header></app-header>
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
  
  export default{
    components:{
      AppHeader, DishForm, DishList,
    },
    name: "DishesPage",
    data(){
      return{
        dishes:[
          {
            id:1,
            dishName:'Суп гороховый',
            price:'45',
            time:'10',
            type:'суп',
            cookName:'Харитонов Захар'
          }
        ],
        dialogVisible: false,
        selectedSort: '',
        sortOptions: [
          {value: 'dishName', name: "По названию блюда"},
          {value: 'cookName', name: "По имени повара"}
        ]
      }
    },
    methods:{
      createDish(dish){
        this.dishes.push(dish)
      },
      removeDish(dish){
        this.dishes = this.dishes.filter(d => d.id !== dish.id)
      },
      showDialog(){
        this.dialogVisible = true
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

  
  .main-block {
    padding: 20px;
    max-width: 60%;
   margin: auto;
  }
  
  .app-btns{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  