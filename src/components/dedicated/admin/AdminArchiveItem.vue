<template>
    <v-list-item class="border my-2 bg-secondary">
        <v-row justify="start" align="center">
            <v-col cols="12" class="text-start font-weight-bold text-h6">[Id Zamówienia]</v-col>
            <v-col cols="12" md="3" xl="2">[Imię] [Nazwisko]</v-col>
            <v-divider vertical></v-divider>
            <v-col cols="12" md="3" xl="2">[Adres E-Mail]</v-col>
            <v-divider vertical></v-divider>
            <v-col cols="12" md="3" xl="2">[Co zostało zamówione]</v-col>
            <v-divider vertical></v-divider>
            <v-col cols="12" md="3" xl="2">[Data złożenia zamówienia]</v-col>
            <v-divider vertical></v-divider>
            <v-col>
                <v-row justify="start">
                    <v-col>
                        <base-button title="Przywróć" color="info"></base-button>
                    </v-col>
                    <v-col>
                        <base-button title="Usuń" color="red"></base-button>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>
    </v-list-item>
</template>

<script>
import BaseButton from '../../global/BaseButton.vue'

export default {
    components: {
        BaseButton
    }
}
</script>