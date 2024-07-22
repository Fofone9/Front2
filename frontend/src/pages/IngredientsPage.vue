<template>
    <div class="main-block">
      <app-header></app-header>
      <pavlov-btn @click="fetchIngredients">получить ингредиенты</pavlov-btn>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn">Добавить ингредиент</pavlov-btn>
      </div>
      
      <pavlov-dialog v-model="dialogVisible">
        <ingredient-form @create="createingredient"></ingredient-form>
      </pavlov-dialog>
      
      <ingredient-list :ingredients="ingredients" @remove="removeingredient"></ingredient-list>
    </div>
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import IngredientForm from "@/components/IngredientForm.vue";
  import IngredientList from "@/components/IngredientList.vue";
  import axios from "axios";
  import store from "@/store"
  export default{
    components:{
      AppHeader, IngredientForm, IngredientList,
    },
    name: "IngredientsPage",
    data(){
      return{
        ingredients:[],
        dialogVisible: false,
        selectedSort: '',
        sortOptions: [
          {value: 'name', name: "По названию"},
          {value: 'price', name: "По цене"},
          {value: 'calories', name: "По калорийности"},
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
          const headers ={'Authorization': `Token ${token}`}
          console.log(content)
          axios.post('http://fofone9.pythonanywhere.com/api/ingredients/', content, {headers})
          .then(response => ingredient.id = response.data.id)
        this.ingredients.push(ingredient)
      },
      removeingredient(ingredient){
        const token = store.state.login.token
        axios.delete(
        `http://fofone9.pythonanywhere.com/api/ingredients/${ingredient.id}/`,
        {
          headers: {
            "Authorization": `Token ${token}`,
          },
        }
        )     
        this.ingredients = this.ingredients.filter(d => d.id !== ingredient.id)
      },
      showDialog(){
        this.dialogVisible = true
      },
      async fetchIngredients(){
        try{
          const response = await axios.get('http://fofone9.pythonanywhere.com/api/ingredients/', {
            headers: {
              'Authorization': 'Token ae455d78319cf6819dbaa62c5bbbddd2b180fa37'
            }
          })
          this.ingredients = response.data
        }catch(e){
          alert('Ошибка')
        }
      }
    },
    watch: {
      selectedSort(newValue){
        this.ingredients.sort((ingredient1, ingredient2)=>{
          return ingredient1[newValue].localeCompare(ingredient2[newValue])
        })
      }
    }
  }
  </script>
  
  <style >


  </style>
  