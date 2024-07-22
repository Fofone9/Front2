<template>
    <div class="login">
        <div class="login-form">
            <h3>LOGIN</h3>
            <pavlov-input type="text" placeholder="Имя пользователя" v-model="username"></pavlov-input>
            <pavlov-input type="passwowrd" placeholder="Пароль" v-model="password"></pavlov-input>
            <pavlov-btn @click="loginUser">Войти</pavlov-btn>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data(){
            return {
                username:'',
                password: '',
            }
        },
        methods:{
            ...mapActions(['login/login']),
            loginUser () {
                this['login/login']({username: this.username, password: this.password, router: this.$router})
            },
        }
    }
</script>

<style scoped>
.login{
    width: 60%;
    margin: auto;
}
.login-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: auto;
    margin-top: 50px;
}
</style>