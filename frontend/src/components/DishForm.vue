<template>
    <form @submit.prevent>
      <h3>Добавить блюдо</h3>
      <input
       v-model="dish.dishName"
       class="input"
       type="text"
       placeholder="Название"
      >
      <input
       v-model="dish.price"
       class="input" 
       type="text" 
       placeholder="Цена"
      >
      <input
       v-model="dish.time"
       class="input" 
       type="text" 
       placeholder="Время подачи"
      >
      <input
       v-model="dish.type"
       class="input" 
       type="text" 
       placeholder="Тип блюда"
      >
      <input
       v-model="dish.cookName" 
       class="input" 
       type="text" 
       placeholder="Повар"
      >
      <button class="btn" @click="createDish">Добавить</button>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                dish: {
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
                this.$emit('create', this.dish)
                this.dish = {
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
.input{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn{
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

form{
  margin-top: 15px;
  display: flex;
  flex-direction: column;

}
</style>