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
        <pavlov-btn @click="createCook" style="align-self: flex-end;" class="form-btn">Добавить</pavlov-btn>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                cook: {
                    id: Date.now(),
                    name:'',
                    surname:'',
                    salary:''
                }
            }
        },
        methods:{
            createCook(){
                console.log(1)
                this.$emit('create', this.cook)
                this.cook = {
                    id: Date.now(),
                    name:'',
                    surname:'',
                    salary:''
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