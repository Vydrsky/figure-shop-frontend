<template>
    <div class="bg-secondary pa-0 pa-md-8 w-100">
        <v-row class="mt-1">
            <v-col cols="4" class="text-h6 d-none d-md-block">
                <div class="w-75 center-horizontal text-center pa-8">
                    <v-icon :size="200">mdi-bank-outline</v-icon>
                </div>
                <div class="w-75 center-horizontal text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero provident veniam ipsa veritatis
                    suscipit
                    doloremque asperiores impedit officiis vitae repellat odit odio, voluptate deserunt sequi. Ratione,
                    eos
                    voluptas. Odio, distinctio?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, eum
                    quis
                    itaque sed quam perferendis. Enim, quaerat ipsum nam alias id, quod ea inventore omnis, eius
                    molestias
                    dignissimos non earum?
                </div>
            </v-col>
            <v-col cols="12" md="8">
                <v-row justify="end" :dense="isMobile" class="pa-4">
                    <home-gallery-item filePath="/img/bird.jpg" :size="4"></home-gallery-item>
                    <home-gallery-item filePath="/img/pantera.jpg" :size="8"></home-gallery-item>
                    <home-gallery-item filePath="/img/kropla.jpg" :size="6"></home-gallery-item>
                    <home-gallery-item filePath="/img/kropla.jpg" :size="6"></home-gallery-item>
                    <home-gallery-item filePath="/img/logo.jpg" :size="7"></home-gallery-item>
                    <home-gallery-item filePath="/img/pantera.jpg" :size="5"></home-gallery-item>
                </v-row>
            </v-col>
        </v-row>
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
                return 'w-50';
            }
        },
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