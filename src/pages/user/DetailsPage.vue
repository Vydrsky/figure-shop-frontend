<template>
    <v-dialog activator="parent" v-model="active">
        <v-container class="bg-secondary">
            <v-row>
                <v-col cols="6">

                </v-col>
                <v-col>
                    <v-img></v-img>
                </v-col>
            </v-row>
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