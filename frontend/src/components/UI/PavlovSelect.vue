<template>
    <select :value="value" @change="changeOption">
        <option disabled value="">Выберите из списка</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        name: "pavlov-select",
        
        props: {
            value:{
                type: String
            },
            options: {
                type: Array,
                default: ()=>[]
            }
        },
        methods: {
            changeOption(event){
                this.$emit('input', event.target.value)
            }
        },

    }
</script>

<style scoped>
select{
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>