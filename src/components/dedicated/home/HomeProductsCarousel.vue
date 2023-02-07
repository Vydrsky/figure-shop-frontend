<template>
    <v-col cols="12" md="6" class="pa-0 pa-lg-8 ma-0 d-none d-lg-block">
        <v-sheet elevation="24" class="pa-8 border bg-secondary">
            <v-carousel show-arrows="hover" cycle interval="4000" height="900" color="accent">
                <carousel-item v-for="source in 5" :key="source" :src="'/img/pantera.jpg'">
                </carousel-item>
            </v-carousel>
        </v-sheet>
    </v-col>
</template>

<script>

import CarouselItem from '../../global/CarouselItem.vue'

export default {
    components: {
        CarouselItem
    },
    methods: {
        placeholder() {
            return 'https://picsum.photos/1000/1000?' + Date.now() + Math.random();
        }

    },
}
</script>