<template>
    <form @submit.prevent>
      <h3>Добавить блюдо</h3>
      <pavlov-input
       v-model="dish.name"
       type="text"
       placeholder="Название"
      ></pavlov-input>
      <pavlov-input
       v-model="dish.dish_type" 
       type="text" 
       placeholder="Тип блюда"
      ></pavlov-input>
      <pavlov-btn @click="createDish" style="align-self: flex-end;" class="form-btn">Добавить</pavlov-btn>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                dish: {
                    name:'',
                    dish_type:'',
                }
            }
        },
        methods:{
            createDish(){
                console.log(1)
                this.$emit('create', this.dish)
                this.dish = {
                    name:'',
                    dish_type:'',
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