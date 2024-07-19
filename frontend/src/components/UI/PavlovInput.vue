<template>
    <input :value="value" @input="updateInput" class="input" type="text">
</template>

<script>
    export default {
        name: 'pavlov-input',
        props:{
            value:[String, Number]
        },
        methods:{
            updateInput(event){
                this.$emit('input', event.target.value)
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
</style>