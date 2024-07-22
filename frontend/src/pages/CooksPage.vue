<template>
  <div>
    <Navbar></Navbar>
    <div class="main-block">
      <app-header></app-header>
      <pavlov-btn @click="fetchCooks">Обновить</pavlov-btn>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn">Добавить повара</pavlov-btn>
      </div>
      
      <pavlov-dialog v-model="dialogVisible">
        <cook-form @create="createcook"></cook-form>
      </pavlov-dialog>
      
      <cook-list :cooks="cooks" @remove="removecook" v-if="!isLoading"></cook-list>
      <div v-else>Идет загрузка</div>
    </div>
  </div>
      
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import CookForm from "@/components/CookForm.vue";
  import CookList from "@/components/CookList.vue";
  import Navbar from "@/components/Navbar.vue"
  import axios from "axios";
  import store from "@/store"

  export default{
    components:{
      AppHeader, CookForm, CookList,Navbar
    },
    name: "CooksPage",
    data(){
      return{
        isLoading: false,
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
          console.log(content)
          this.$ajax.post('cooks/', content)
          .then(response => cook.id = response.data.id)
          this.cooks.push(cook)
          console.log(content)
        
      },
      removecook(cook){
        this.$ajax.delete(`cooks/${cook.id}/`)     
        this.cooks = this.cooks.filter(d => d.id !== cook.id)
      },
      showDialog(){
        this.dialogVisible = true
      },
      async fetchCooks(){
        try{
          this.isLoading = true
          const response = await this.$ajax.get('cooks/')
          this.cooks = response.data
        }catch(e){
          alert('Ошибка')
        }finally{
          this.isLoading = false
        }
      }
    },
    watch: {
      selectedSort(newValue){
        this.cooks.sort((cook1, cook2)=>{
          return cook1[newValue].localeCompare(cook2[newValue])
        })
      }
    },
    mounted(){
      this.fetchCooks();
    }
  }
  </script>
  
  <style >

  </style>
  