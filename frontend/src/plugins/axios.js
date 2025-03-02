import axios from "axios"
import store from "@/store"


const instance = axios.create({
    baseURL: "https://fofone9.pythonanywhere.com/api/"
})

instance.interceptors.request.use((config) => {
    const token = store.state.login.token

    if (token) {
        config.headers.Authorization = `Token ${token}`
    }
    return config
})

export default {
    install(Vue) {
        Vue.prototype.$ajax = instance
    }
}