<template>
    <v-col cols="12" sm="8" md="5" lg="3" class=" mx-10 my-10">
        <v-card rounded="lg" elevation="4" class="bg-secondary" block>
            <v-card-title class="pa-0">
                <v-img :src="figure.filePath" cover></v-img>
            </v-card-title>
            <v-card-text class="py-4">
                <span class="text-accent">{{figure.name}}</span>
                <div>
                    <p>{{figure.name}}</p>
                    <p>{{figure.material}}</p>
                    <p>{{figure.description}}</p>
                    <p>{{figure.height}}</p>
                    <p>{{figure.width}}</p>
                </div>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>

export default {
    props:{
        figure:{
            type: Object,
            required: true,
            default: null,
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.v-btn::before {
    opacity: 0 important !;
}
</style>