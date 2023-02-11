<template>
    <v-btn :color="color" :type="setType" :block="block">
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
        },
        block:{
            type: Boolean,
            default: true,
            required: false
        }
    },
    computed:{
        setType(){
            if(this.isSubmit){
                return 'submit'
            }
            else return 'button'
        }
    }
}
</script>