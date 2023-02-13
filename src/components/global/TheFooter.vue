<template>
    <footer class="bg-secondary">
        <v-container class="pa-4">
            <v-row class="text-white high-text text-body-1">
                <v-col cols="12" sm="6" md="2">
                    <span class="font-weight-bold">Nazwa Firmy</span><br>
                    ul. XYZ 10/2<br>
                    44-200 Rybnik
                </v-col>
                <v-col cols="12" sm="6" md="2">
                    <v-icon>mdi-phone</v-icon>&emsp;+48 567 234 123<br>
                    <v-icon>mdi-email</v-icon>&emsp; email@gmail.com<br>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" md="2" class="mt-2 mb-4">
                    <v-row justify="space-around">
                        <v-col cols="3">
                            <v-icon size="30">mdi-facebook</v-icon>
                        </v-col>
                        <v-col cols="3">
                            <v-icon size="30">mdi-instagram</v-icon>
                        </v-col>
                        <v-col cols="3">
                            <v-icon size="30">mdi-twitter</v-icon>
                        </v-col>
                        <v-col cols="3">
                            <v-icon size="30">mdi-whatsapp</v-icon>
                        </v-col>

                    </v-row>
                    <v-row align="end" justify="end">

                    </v-row>
                </v-col>
            </v-row>
            <div v-if="!loggedIn" class="d-flex align-center login">
                <v-icon size="30" @click="switchLogin()">mdi-account</v-icon>
                <transition name="login">
                    <form-control v-if="showLogin" title="" type="password" variant="underlined" class="px-4"
                        :class="isMobile ? 'w-100' : 'w-50'"></form-control>
                </transition>
                <transition name="fade">
                    <base-button v-if="showLogin" :block="false" color="accent" rounded="0" title="Potwierdź" @click="adminLogin()"></base-button>
                </transition>
            </div>
            <v-row class="mt-4 text-white bg-secondary" justify="center">
                <v-col class="text-center">
                    Copyright &#169; Nazwa Firmy 2023
                </v-col>
            </v-row>
        </v-container>
    </footer>
</template>

<script>
import FormControl from '../global/FormControl.vue'
import BaseButton from '../global/BaseButton.vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        FormControl,
        BaseButton
    },
    data() {
        return {
            showLogin: false,
        }
    },
    methods: {
        switchLogin() {
            this.showLogin = !this.showLogin;
        },
        async adminLogin(){
            await this.$store.dispatch("auth/login");
        }
    },
    computed: {
        ...mapGetters('auth',['loggedIn']),
        isMobile() {
            return this.$vuetify.display.xs
        },
    }
}
</script>

<style scoped>
.high-text {
    line-height: 200%;
}

.login {
    height: 50px;
}

.v-container {
    max-width: 100%;
}

.login-enter-active,
.login-leave-active {
    transition: transform 0.2s ease
}

.login-enter-to,
.login-leave-from {
    transform: scaleX(1);
}

.login-enter-from,
.login-leave-to {
    transform: scaleX(0);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>