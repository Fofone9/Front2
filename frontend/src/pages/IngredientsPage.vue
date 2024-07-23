<template>
  <div>
    <Navbar></Navbar>
    <div class="main-block">
      <app-header></app-header>
      <pavlov-btn @click="fetchIngredients">Обновить</pavlov-btn>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn">Добавить ингредиент</pavlov-btn>
      </div>
      
      <pavlov-dialog v-model="dialogVisible">
        <ingredient-form @create="createingredient"></ingredient-form>
      </pavlov-dialog>
      
      <ingredient-list :ingredients="ingredients" @remove="removeingredient" v-if="!isLoading"></ingredient-list>
      <div v-else>Идет загрузка</div>
    </div>
  </div>
      
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import IngredientForm from "@/components/IngredientForm.vue";
  import IngredientList from "@/components/IngredientList.vue";
  import Navbar from "@/components/Navbar.vue"
  import axios from "axios";
  import store from "@/store"
  export default{
    components:{
      AppHeader, IngredientForm, IngredientList,Navbar
    },
    name: "IngredientsPage",
    data(){
      return{
        isLoading: false,
        ingredients:[],
        dialogVisible: false,
        selectedSort: '',
        sortOptions: [
          {value: 'name', name: "По названию"},
          {value: 'cost', name: "По цене"},
          {value: 'calorie_content', name: "По калорийности"},
        ]
      }
    },
    methods:{
      createingredient(ingredient){
        const token = store.state.login.token
          if (isNaN(+ingredient.cost))
            {
              alert("Введите коррекную цену")
              return
            }
            if (isNaN(+ingredient.calorie_content))
            {
              alert("Введите коррекную калорийность")
              return
            }
          if (ingredient.name == '' || ingredient.calorie_content == '' || ingredient.cost == '')
            {
              alert("Введите все данные")
              return
            }
          const content ={
            name: ingredient.name,
            calorie_content: +ingredient.calorie_content,
            cost: +ingredient.cost
          }
          console.log(content)
          this.$ajax.post('ingredients/', content)
          .then(response => this.ingredients.push({...ingredient, id: response.data.id}))
        
      },
      removeingredient(ingredient){
        this.$ajax.delete(`ingredients/${ingredient.id}/`)     
        this.ingredients = this.ingredients.filter(d => d.id !== ingredient.id)
      },
      showDialog(){
        this.dialogVisible = true
      },
      async fetchIngredients(){
        try{
          this.isLoading = true
          const response = await this.$ajax.get('ingredients/')
          this.ingredients = response.data
        }catch(e){
          alert('Ошибка')
        }finally{
          this.isLoading = false
        }
      }
    },
    watch: {
      selectedSort(newValue){
        if(newValue == 'name'){
          this.ingredients.sort((ingredient1, ingredient2)=>{
          return ingredient1[newValue].localeCompare(ingredient2[newValue])
        })
        }
        else{          
          this.ingredients.sort((ingredient1, ingredient2)=>{
          return (ingredient1[newValue] > ingredient2[newValue])*3 -2
        })
        }
        
      }
    },
    mounted(){
      this.fetchIngredients();
    }
  }
  </script>
  
  <style >


  </style>
  