export default {
    props: {
        value: {
            type:Boolean,
            default: false
        }
    },
    methods:{
        hideDialog(){
            this.$emit('input', false)
        }
    },
    mounted(){

    }
}