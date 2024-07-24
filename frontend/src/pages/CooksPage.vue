<template>
  <div>
    <Navbar :isActive="dialogVisible"></Navbar>
    <div class="main-block">
      <app-header :isActive="dialogVisible"></app-header>
      <pavlov-input v-model="searchQuery" placeholder="Поиск по фамилии" :class="{active: dialogVisible}"></pavlov-input>
      <pavlov-btn @click="fetchCooks" :class="{active: dialogVisible}">Обновить</pavlov-btn>
      <div class="app-btns">
        <pavlov-select v-model="selectedSort" :options="sortOptions" :class="{active: dialogVisible}"></pavlov-select>
        <pavlov-btn @click="showDialog" class="add-btn" :class="{active: dialogVisible}">Добавить повара</pavlov-btn>
      </div>      
      <pavlov-dialog v-model="dialogVisible">
        <cook-form @create="createcook"></cook-form>
      </pavlov-dialog>
      
      <cook-list :cooks="sortedAndSearchedCooks" @remove="removecook" v-if="!isLoading" :isActive="dialogVisible"></cook-list>
      <div v-else>Идет загрузка</div>
    </div>
  </div>
      
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import CookForm from "@/components/CookForm.vue";
  import CookList from "@/components/CookList.vue";
  import Navbar from "@/components/Navbar.vue"

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
        searchQuery: '',
        selectedSort: '',
        sortOptions: [
          {value: 'surname', name: "По фамилии"},
          {value: 'name', name: "По имени"}
        ]
      }
    },
    methods:{
      createcook(cook){
          if (isNaN(+cook.salary))
            {
              alert("Введите коррекную зарплату")
              return
            }
          if (cook.name == '' || cook.surname == '' || cook.birth_year == '')
            {
              alert("Введите все данные")
              return
            }
          const content ={
            name: cook.name,
            surname: cook.surname,
            birth_year: cook.birth_year,
            salary: +cook.salary
          }
          this.$ajax.post('cooks/', content)
          .then(response => this.cooks.push({...cook, id: response.data.id}))
          
        
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
    computed:{
      sortedAndSearchedCooks(){
        return this.cooks.filter(cook => cook.surname.includes(this.searchQuery))
      }
    },
    mounted(){
      this.fetchCooks();
    }
  }
  </script>
  
  <style >

  </style>
  