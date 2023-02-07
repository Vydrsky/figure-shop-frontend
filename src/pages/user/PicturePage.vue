<template>
    <v-dialog activator="parent" v-model="active" transition="dialog-bottom-transition" no-click-animation persistent>
        <v-container :class="width">
            <v-row justify=center>
                <v-col class="pa-4 bg-secondary">
                    <div class="d-flex big-picture">
                        <v-img :src="image" aspect-ratio="1" cover></v-img>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-dialog>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            active: false,
        }
    },
    computed: {
        ...mapGetters('figure', ['figures']),
        width(){
            if (this.$vuetify.display.smAndDown) return 'w-100'
            else return 'w-50';
        },
        image(){
            return this.$route.query.image;
        }
    },
    watch: {
        active(newValue) {
            if (newValue == false) {
                 this.$router.push({
                    path: '/collection'
                 })
            }
        }
    },
}
</script>

<style scoped>
.big-picture {
    max-height: 100vh;
}
</style>