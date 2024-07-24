<template>
  <v-app>
    <router-view/>
  </v-app>

</template>

<script>
export default {

}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
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
