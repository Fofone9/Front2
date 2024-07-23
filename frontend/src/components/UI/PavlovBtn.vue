<template>
    <button class="btn" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'pavlov-btn'
    }
</script>

<style scoped>
.btn{
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: #008080;
  border: 1px solid #008080;
  margin-right: 15px;
}
.add-btn{
    color: blue;
    border: 1px solid blue;
}

.del-btn{
    color: red;
    border: 1px solid red;
}

.form-btn{
    color: #ffd900;
    border: 1px solid #ffd900;
}

.active{
    color: gray;
    border: 1px solid gray;
}
</style>