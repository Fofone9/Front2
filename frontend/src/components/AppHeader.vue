<template>
  <div class="x-header">
    <strong class="header-text" >Павлов Александр</strong>
    <pavlov-btn @click="logOut" :class="{active: isActive}" >Выход</pavlov-btn>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props:{
        isActive:{
            type: Boolean,
            required: true
        }
    },
  methods:{
    logOut(){
      this.$store.commit('login/removeToken')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

.x-header {
  width: 100%;
  border: 2px solid teal;
  padding:0 15px 10px 15px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.header-text{
  margin-top: 15px;
  
}
</style>