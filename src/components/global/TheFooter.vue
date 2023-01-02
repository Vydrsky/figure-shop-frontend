<template>
    <footer class="bg-secondary">
        <v-container class="pa-4">
            <v-row class="text-white   high-text text-body-1">
                <v-col cols="12" sm="6" md="2">
                    <span class="font-weight-bold">Nazwa Firmy, Miasto</span><br>
                    ul. XYZ 10/2<br>
                    44-200 Rybnik
                </v-col>
                <v-col cols="12" sm="6" md="2">
                    <v-icon>mdi-phone</v-icon>&emsp;+48 567 234 123<br>
                    <v-icon>mdi-phone</v-icon>&emsp;+32 125 43 13<br>
                    <v-icon>mdi-email</v-icon>&emsp; email@gmail.com<br>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" md="2" class="mt-2">
                    <v-row justify="space-around">
                        <v-icon size="30">mdi-facebook</v-icon>
                        <v-icon size="30">mdi-instagram</v-icon>
                        <v-icon size="30">mdi-twitter</v-icon>
                        <v-icon size="30">mdi-whatsapp</v-icon>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="mt-4 text-white bg-secondary" justify="start">
                <v-col cols="12" md="6">
                    <span class="text-decoration-underline">link-firmy-wspólnika1</span>&emsp;
                    <span class="text-decoration-underline">link-firmy-wspólnika2</span>&emsp;
                    <span class="text-decoration-underline">link-firmy-wspólnika3</span>
                </v-col>
                <v-col class="text-end">
                    Copyright &#169; Nazwa Firmy 2022-2023
                </v-col>
            </v-row>
        </v-container>
    </footer>
</template>

<style scoped>
.high-text {
    line-height: 200%;
}
.v-container{
    max-width: 100%;
}
</style>