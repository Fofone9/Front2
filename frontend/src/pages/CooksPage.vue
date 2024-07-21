<template>
    <div class="main-block">
      <app-header></app-header>
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
  
  export default{
    components:{
      AppHeader, CookForm, CookList,
    },
    name: "CooksPage",
    data(){
      return{
        cooks:[
          {
            id:1,
            name: "Харитон",
            surname: "Захаров",
            salary: '20000',
          }
        ],
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
        this.cooks.push(cook)
      },
      removecook(cook){
        this.cooks = this.cooks.filter(d => d.id !== cook.id)
      },
      showDialog(){
        this.dialogVisible = true
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
  