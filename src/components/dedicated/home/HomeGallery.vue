<template>
    <v-col cols="12" lg="6" class="py-12">
        <v-row justify="center" :dense="isMobile" class="pa-0 pa-lg-4">
            <home-gallery-item filePath="/img/bird.jpg" :size="6"></home-gallery-item>
            <home-gallery-item filePath="/img/pantera.jpg" :size="6"></home-gallery-item>
            <home-gallery-item filePath="/img/kropla.jpg" :size="7"></home-gallery-item>
            <home-gallery-item filePath="/img/kropla.jpg" :size="5"></home-gallery-item>
            <home-gallery-item filePath="/img/logo.jpg" :size="5"></home-gallery-item>
            <home-gallery-item filePath="/img/pantera.jpg" :size="7"></home-gallery-item>
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
            return this.$vuetify.display.smAndDown;
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