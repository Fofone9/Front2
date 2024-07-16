<template>
  <div class="main-block">
    <app-header></app-header>
    <dish-form @create="createDish"></dish-form>
    <dish-list :dishes="dishes"></dish-list>
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
  name: "App",
  data(){
    return{
      dishes:[
        {
          dishName:'Суп гороховый',
          price:'45',
          time:'10',
          type:'суп',
          cookName:'Харитонов Захар'
        }
      ],
      dishName:'',
      price:'',
      time:'',
      type:'',
      cookName:'',
    }
  },
  methods:{
    createDish(dish){
      this.dishes.push(dish)
    }
  }
}
</script>

<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 20px;
}
body {
  background-color: #f6f6f6;
}

.main-block {
  padding: 20px;
  max-width: 60%;
 margin: auto;
}
</style>
