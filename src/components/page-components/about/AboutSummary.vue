<template>
    <section>
        <v-container>
            <v-row justify="center" :align="'center'">
                <v-col cols="12">
                    <p class="text-h6 text-md-h5 text-lg-h4 text-xl-h3 text-center center-horizontal py-8 mt-8">Czym się Zajmujemy</p>
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