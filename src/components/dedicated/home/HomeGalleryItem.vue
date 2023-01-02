<template>
    <v-col :cols="size">
        <v-card rounded="0" :elevation="12">
            <v-card-actions :class="setHeight">
                <v-img :src="filePath" cover></v-img>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: {
        size:{
            type: Number,
            required: false,
            defualt: 3
        },
        filePath:{
            type:String,
            required: true
        }
    },
    computed:{
        setHeight(){
            if(this.$vuetify.display.mdAndDown){
                return 'low';
            }else{
                return 'high';
            }
        }
    }
}
</script>

<style scoped>
.v-img {
    min-height: 100%;
    transition: all 0.2s ease-out;
}

.v-card-actions {
    padding: 0;
}

.high{
    height:30vh;
}

.low{
    height: 20vh;
}

.v-img:hover {
    transform: scale(1.1);
}
</style>