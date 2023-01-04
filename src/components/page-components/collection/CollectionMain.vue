<template>
    <v-container class=" pa-6 pa-md-12">
        <v-pagination :length="6" :total-visible="6" active-color="accent" v-model="page" class="my-8"></v-pagination>
        <v-row justify="center">
            <collection-figure-card-vue v-for="figure in figures" :key="figure.id"
                :figure="figure"></collection-figure-card-vue>
        </v-row>
        <v-pagination :length="6" :total-visible="6" active-color="accent" v-model="page" class="my-8"></v-pagination>
        <router-view></router-view>
    </v-container>
</template>

<script>
import CollectionFigureCardVue from '../../dedicated/collection/CollectionFigureCard.vue';

import { mapGetters } from 'vuex';

export default {
    components: {
        CollectionFigureCardVue
    },
    data() {
        return {
            page: 1,
        }
    },
    computed: {
        ...mapGetters('figure', ['figures']),
    },
    created() {
        this.$store.dispatch('figure/getAllFigures');
    }
}
</script>