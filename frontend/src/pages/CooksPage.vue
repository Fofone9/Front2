<template>
    <div class="main-block">
      <app-header></app-header>
      <pavlov-btn @click="fetchCooks">получить поваров</pavlov-btn>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn">Добавить повара</pavlov-btn>
      </div>
      
      <pavlov-dialog v-model="dialogVisible">
        <cook-form @create="createcook"></cook-form>
      </pavlov-dialog>
      
      <cook-list :cooks="cooks" @remove="removecook"></cook-list>
    </div>
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import CookForm from "@/components/CookForm.vue";
  import CookList from "@/components/CookList.vue";
  import axios from "axios";
  import store from "@/store"

  export default{
    components:{
      AppHeader, CookForm, CookList,
    },
    name: "CooksPage",
    data(){
      return{
        cooks:[],
        dialogVisible: false,
        selectedSort: '',
        sortOptions: [
          {value: 'surname', name: "По фамилии"},
          {value: 'name', name: "По имени"}
        ]
      }
    },
    methods:{
      createcook(cook){
          const token = store.state.login.token
          if (isNaN(+cook.salary))
            {
              alert("Введите коррекную зарплату")
              return
            }
          if (cook.name == '' || cook.surname == '' || cook.birthYear == '')
            {
              alert("Введите все данные")
              return
            }
          const content ={
            name: cook.name,
            surname: cook.surname,
            birth_year: cook.birthYear,
            salary: +cook.salary
          }
          const headers ={'Authorization': `Token ${token}`}
          console.log(content)
          axios.post('http://fofone9.pythonanywhere.com/api/cooks/', content, {headers})
          .then(response => cook.id = response.data.id)
          this.cooks.push(cook)
          console.log(content)
        
      },
      removecook(cook){
        const token = store.state.login.token
        axios.delete(
        `http://fofone9.pythonanywhere.com/api/cooks/${cook.id}/`,
        {
          headers: {
            "Authorization": `Token ${token}`,
          },
        }
        )     
        this.cooks = this.cooks.filter(d => d.id !== cook.id)
      },
      showDialog(){
        this.dialogVisible = true
      },
      async fetchCooks(){
        try{
          const response = await axios.get('http://fofone9.pythonanywhere.com/api/cooks/', {
            headers: {
              'Authorization': 'Token ae455d78319cf6819dbaa62c5bbbddd2b180fa37'
            }
          })
          this.cooks = response.data
        }catch(e){
          alert('Ошибка')
        }
      }
    },
    watch: {
      selectedSort(newValue){
        this.cooks.sort((cook1, cook2)=>{
          return cook1[newValue].localeCompare(cook2[newValue])
        })
      }
    }
  }
  </script>
  
  <style >

  </style>
  