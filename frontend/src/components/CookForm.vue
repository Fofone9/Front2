<template>
    <form @submit.prevent>
      <h3>Добавить Повара</h3>
      
        <pavlov-input
            v-model="cook.name"
            type="text"
            placeholder="Имя">
        </pavlov-input>
            <pavlov-input
            v-model="cook.surname"
            type="text"
            placeholder="Фамилия">
        </pavlov-input>
        <pavlov-input
            v-model="cook.salary"
            type="text"
            placeholder="Зарплата">
        </pavlov-input>
        <pavlov-input
            v-model="cook.birth_year"
            type="date"
            placeholder="Зарплата">
        </pavlov-input>
        <pavlov-btn @click="createCook" style="align-self: flex-end;" class="form-btn">Добавить</pavlov-btn>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                cook: {
                    name:'',
                    surname:'',
                    salary:'',
                    birth_year:''
                }
            }
        },
        methods:{
            createCook(){
                this.$emit('create', this.cook)
                this.cook = {
                    name:'',
                    surname:'',
                    salary:'',
                    birth_year:''
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