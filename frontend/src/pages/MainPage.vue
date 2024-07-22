<template>
    <div>
        <Navbar></Navbar>
        <div class="main-block">
        <app-header></app-header>
        <div class="content">
            <iframe src="http://rzhunemogu.ru/Widzh/Anekdot2.aspx" frameborder="0"></iframe>
        </div>
    </div>
    </div>
    

</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Navbar from "@/components/Navbar.vue"
import axios from 'axios';
    export default {
        components:{
            AppHeader,Navbar
        },
        
        
    }
</script>

<style  scoped>
a{
    text-decoration: none;
}

.content{
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

</style>
