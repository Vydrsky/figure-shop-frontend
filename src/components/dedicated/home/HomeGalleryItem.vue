<template>
    <v-col cols="12" sm="6" :md="size">
        <v-card>
            <v-card-actions>
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
    }
}
</script>

<style scoped>
.v-img {
    min-height: 100%;
    transition: all 0.2s ease-out;
}

.v-card-actions {
    height: 20rem;
    padding: 0;
}

.v-img:hover {
    transform: scale(1.2);
}
</style>