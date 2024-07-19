<template>
    <form @submit.prevent>
      <h3>Добавить блюдо</h3>
      <pavlov-input
       v-model="dish.dishName"
       type="text"
       placeholder="Название"
      ></pavlov-input>
      <pavlov-input
       v-model="dish.price" 
       type="text" 
       placeholder="Цена"
      ></pavlov-input>
      <pavlov-input
       v-model="dish.time" 
       type="text" 
       placeholder="Время подачи"
      ></pavlov-input>
      <pavlov-input
       v-model="dish.type" 
       type="text" 
       placeholder="Тип блюда"
      ></pavlov-input>
      <pavlov-input
       v-model="dish.cookName"  
       type="text" 
       placeholder="Повар"
      ></pavlov-input>
      <pavlov-btn @click="createDish" style="align-self: flex-end;" class="form-btn">Добавить</pavlov-btn>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                dish: {
                    id: Date.now(),
                    dishName:'',
                    price:'',
                    time:'',
                    type:'',
                    cookName:'',
                }
            }
        },
        methods:{
            createDish(){
                console.log(1)
                this.$emit('create', this.dish)
                this.dish = {
                    id: Date.now(),
                    dishName:'',
                    price:'',
                    time:'',
                    type:'',
                    cookName:'',
                }
            }
        }
    }
</script>

<style scoped>
form{
  margin-top: 15px;
  display: flex;
  flex-direction: column;

}
</style>