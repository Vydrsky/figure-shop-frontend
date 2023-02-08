<template>
    <v-col cols="12" lg="6" class="pa-0 pa-lg-8 ma-0 d-none d-lg-block">
        <v-sheet elevation="24" class="pa-8 border bg-secondary">
            <v-carousel cycle interval="4000" height="800" color="accent" :show-arrows="false" hide-delimiters>
                <carousel-item v-for="source,index in gallery" :key="source" :src="gallery[index]">
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
    data(){
        return{
            gallery: []
        }
    },
    methods: {
        placeholder() {
            return 'https://picsum.photos/1000/1000?' + Date.now() + Math.random();
        }

    },
    created(){
        for(let i=0;i<5;i++){
            this.gallery[i] = this.placeholder();
        }
    }
}
</script>