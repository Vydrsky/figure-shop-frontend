<template>
    <v-btn @click="submit()" :color="color" block>
        {{ title }}
    </v-btn>
</template>

<script>
export default{
    emits: ['submit'],
    props:{
        title:{
            type: String,
            default: 'button'
        },
        isSubmit:{
            type: Boolean,
            default: false
        },
        color:{
            type: String,
            default: 'red'
        }
    },
    methods:{
        submit(){
            if(this.isSubmit){
                this.$emit('submit');
            }
        }
    }
}
</script>