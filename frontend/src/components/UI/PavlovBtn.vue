<template>
    <button class="btn" @click="$emit('click')" style="">
        <slot ></slot>
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
  padding: 2px 15px;
  background: none;
  color: #008080;
  border: 1px solid #008080;
  margin-right: 15px;
  font-weight: 500; 
  letter-spacing: 0.0892857143em; 
  text-transform: uppercase;
}
.add-btn{
    color: #2196F3;
    border: 1px solid #2196F3;
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