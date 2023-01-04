<template>
    <v-dialog activator="parent" v-model="active">
        <v-container class="bg-secondary">
        </v-container>
    </v-dialog>
</template>

<script>

export default{
    data(){
        return{
            active: false,
        }
    },
    watch:{
        active(newValue){
            if(newValue == false){
                this.$router.push({
                    path: '/collection'
                })
            }
        }
    }
}
</script>