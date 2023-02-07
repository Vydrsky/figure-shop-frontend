<template>
    <v-col cols="12" lg="6" class="py-12">
        <v-row justify="center" :dense="isMobile" class="pa-0 pa-lg-4">
            <home-gallery-item :filePath="placeholder()" :size="isMobile ? 12 :6"></home-gallery-item>
            <home-gallery-item :filePath="placeholder()" :size="isMobile ? 12 :6"></home-gallery-item>
            <home-gallery-item :filePath="placeholder()" :size="isMobile ? 12 :7"></home-gallery-item>
            <home-gallery-item :filePath="placeholder()" :size="isMobile ? 12 :5"></home-gallery-item>
            <home-gallery-item :filePath="placeholder()" :size="isMobile ? 12 :5"></home-gallery-item>
            <home-gallery-item :filePath="placeholder()" :size="isMobile ? 12 :7"></home-gallery-item>
        </v-row>
    </v-col>
</template>

<script>
import HomeGalleryItem from './HomeGalleryItem.vue'

export default {
    components: {
        HomeGalleryItem
    },
    computed: {
        isMobile() {
            return this.$vuetify.display.xs;
        },

    },
    methods: {
        placeholder() {
            return 'https://picsum.photos/1000/1000?' + Date.now() + Math.random();
        }
    }
}
</script>

<style scoped>
.right {
    margin-left: auto;
    margin-right: 0;
}
</style>