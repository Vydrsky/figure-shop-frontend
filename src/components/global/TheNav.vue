<template>
    <v-avatar class="corner" size="50" color="white">
        <v-icon size="40" color="info">mdi-account</v-icon>
    </v-avatar>
    <v-navigation-drawer temporary v-model="showState" class="bg-secondary">
        
    </v-navigation-drawer>
</template>

<script>
export default{
    data(){
        return{
            showState: false,
        }
    },
}
</script>

<style scoped>
.corner{
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 5;
}
</style>