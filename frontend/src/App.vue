<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  components:{
    Navbar
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 20px;
}
body {
  background-color: #f6f6f6;
}
  
.main-block {
    padding: 20px;
    max-width: 60%;
   margin: auto;
  }
  
  .app-btns{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
