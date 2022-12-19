<template>
    <div class="bg-secondary">
        <v-container :class="width">
            <v-row justify="center">
                <home-gallery-item filePath="/img/bird.jpg" :size="3"></home-gallery-item>
                <home-gallery-item filePath="/img/pantera.jpg" :size="5"></home-gallery-item>
                <home-gallery-item filePath="/img/kropla.jpg" :size="4"></home-gallery-item>
                <home-gallery-item filePath="/img/logo.jpg" :size="5"></home-gallery-item>
                <home-gallery-item filePath="/img/logo.jpg" :size="3"></home-gallery-item>
                <home-gallery-item filePath="/img/logo.jpg" :size="4"></home-gallery-item>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import HomeGalleryItem from './HomeGalleryItem.vue'

export default {
    components: {
        HomeGalleryItem
    },
    computed: {
        width() {
            if (this.$vuetify.display.mdAndDown) {
                return 'w-100';
            }
            else {
                return 'w-75';
            }
        }
    }
}
</script>

<style scoped>
div {
    margin: 0 auto;
}
</style>
