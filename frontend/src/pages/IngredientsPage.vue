<template>
    <div class="main-block">
      <app-header></app-header>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn">Добавить блюдо</pavlov-btn>
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
  
  export default{
    components:{
      AppHeader, IngredientForm, IngredientList,
    },
    name: "IngredientsPage",
    data(){
      return{
        ingredients:[
          {
            id:1,
            name: 'горох',
            price: '100',
            calories: '80'
          }
        ],
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
        this.ingredients.push(ingredient)
      },
      removeingredient(ingredient){
        this.ingredients = this.ingredients.filter(d => d.id !== ingredient.id)
      },
      showDialog(){
        this.dialogVisible = true
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
  