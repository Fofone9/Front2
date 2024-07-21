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
</style>
