<template>
    <section class="page-desc">
        <v-container class="h-100">
            <v-row justify="center" :align="'center'">
                <v-col cols="12">
                    <p class="text-h6 text-md-h5 text-lg-h4 text-xl-h3 text-center center-horizontal py-8 mt-8">
                        Składanie Zamówienia</p>
                </v-col>
                <v-col cols="12" md="10">
                    <div class="d-flex align-center">
                        <v-icon :size="size" color="white" icon="mdi-text-box-plus"></v-icon>
                        <p class="text-caption text-sm-h6 text-justify pa-4">Lorem ipsum dolor sit
                            amet consectetur
                            adipisicing
                            elit. Natus maiores aut veritatis nulla consequuntur error architecto. Temporibus
                            consequuntur
                            voluptas,
                            voluptate ut in numquam tempore sit ipsa pariatur exercitationem culpa suscipit. Lorem
                            ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fuga dolore earum corrupti
                            porro quae esse rem blanditiis sequi, assumenda maxime! A animi pariatur veritatis.
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    computed: {
        size() {
            if (this.$vuetify.display.smAndDown) return 60;
            else return 120;
        }
    }
}
</script>