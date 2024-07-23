<template>
    <form @submit.prevent>
        <h3>Добавить игредиент</h3>
        <pavlov-input
            v-focus
            v-model="ingredient.name"
            type="text"
            placeholder="Название"
        ></pavlov-input>
        <pavlov-input
            v-model="ingredient.cost" 
            type="text" 
            placeholder="Цена"
        ></pavlov-input>
        <pavlov-input
            v-model="ingredient.calorie_content" 
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
                    name:'',
                    cost:'',
                    calorie_content: ''
                }
            }
        },
        methods:{
            createingredient(){
                this.$emit('create', this.ingredient)
                this.ingredient = {
                    name:'',
                    cost:'',
                    calorie_content: ''
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