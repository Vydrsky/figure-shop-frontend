<template>
    <div class="d-flex" v-if="loggedIn">
        <v-navigation-drawer expand-on-hover rail class="bg-secondary" select-strategy="single-leaf">
            <v-list nav>
                <v-list-item prepend-icon="mdi-rhombus-split" title="Edytuj Kolekcje" link to="/admin/edit">
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item prepend-icon="mdi-bookmark-outline" title="Przeglądaj Zamówienia" link to="/admin/orders">
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item prepend-icon="mdi-archive" title="Przeglądaj Archiwum" link to="/admin/archive">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            showState: false,
        }
    },
    computed: {
        ...mapGetters('auth', ['loggedIn'])
    },
    methods: {
        switchState() {
            this.showState != this.showState;
            console.log('open');
        }
    }
}
</script>

<style scoped>

</style>