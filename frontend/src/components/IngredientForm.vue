<template>
    <form @submit.prevent>
      <h3>Добавить игредиент</h3>
      <pavlov-input
       v-model="ingredient.name"
       type="text"
       placeholder="Название"
      ></pavlov-input>
      <pavlov-input
       v-model="ingredient.price" 
       type="text" 
       placeholder="Цена"
      ></pavlov-input>
      <pavlov-input
       v-model="ingredient.calories" 
       type="text" 
       placeholder="Калорийность"
      ></pavlov-input>
      <pavlov-btn @click="createingredient" style="align-self: flex-end;" class="form-btn">Добавить</pavlov-btn>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                ingredient: {
                    id: Date.now(),
                    name:'',
                    price:'',
                    calories: ''
                }
            }
        },
        methods:{
            createingredient(){
                console.log(1)
                this.$emit('create', this.ingredient)
                this.ingredient = {
                    id: Date.now(),
                    name:'',
                    price:'',
                    calories: ''
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