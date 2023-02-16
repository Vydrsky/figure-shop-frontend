<template>
    <main>
        <div class="pa-12 text-center">
            <h1>EDYTUJ KOLEKCJĘ</h1>
        </div>
        <collection-filter></collection-filter>
        <v-img class="bg border bg-info" cover gradient="rgba(255,255,255,0.2),rgba(0,0,0,0.2)">
            <v-container :class="width">
                <v-pagination :length="length" :total-visible="6" active-color="accent" v-model="page"
                    class="my-8"></v-pagination>
                <v-row justify="center" class=" pa-md-8">
                    <collection-figure-card-vue edit v-for="figure in pagedFigures" :key="figure.id"
                        :figure="figure"></collection-figure-card-vue>
                </v-row>
                <v-pagination :length="length" :total-visible="6" active-color="accent" v-model="page"
                    class="my-8"></v-pagination>
                <teleport to="body">
                    <router-view></router-view>
                </teleport>
            </v-container>
        </v-img>
    </main>
</template>

<script>
import CollectionFigureCardVue from '../../dedicated/collection/CollectionFigureCard.vue';
import CollectionFilter from '../collection/CollectionFilter.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        CollectionFigureCardVue,
        CollectionFilter
    },
    data() {
        return {
            page: 1,
        }
    },
    computed: {
        ...mapGetters('figure', ['figures']),

        pagedFigures() {
            return this.figures.filter((figure, index) => {
                return index < (this.pageSize * (this.page - 1) + this.pageSize) && index >= this.pageSize * (this.page - 1);
            })
        },
        pageSize() {
            if (this.$vuetify.display.smAndDown) return 4;
            else return 8;
        },
        length() {
            return Math.ceil(this.figures.length / this.pageSize);
        },
        width() {
            if (this.$vuetify.display.mdAndDown) return 'w-100';
            else return 'w-75';
        }
    },
    created() {
        this.$store.dispatch('figure/getAllFigures');
    },
}
</script>

<style scoped>
.bg {
    height: 100%;
    width: 100%;
}

.main {
    position: relative;
}
</style>