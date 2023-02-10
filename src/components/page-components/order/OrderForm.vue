<template>
    <v-form @submit.prevent="createOrder()" class="py-8 my-12" ref="form">
        <v-row justify="center">
            <v-col cols="12" md="8" class="bg-secondary pa-8">
                <h2 class="mb-8">FORMULARZ ZAMÓWIENIOWY</h2>
                <form-control title="Proszę opisać jaki przedmiot/kształt powinna przedstawiać rzeźba:" class="pa-2"
                    required></form-control>
                <form-control title="Proszę wybrać rodzaj instalacji:" input-type="radio"
                    :data-array="installationRadioButtons" class="pa-2" required></form-control>
                <form-control title="Rzeźba zostanie umieszczona:" input-type="radio" :data-array="locationRadioButtons"
                    class="pa-2" required></form-control>
                <p class="text-subtitle-1 font-weight-bold">
                    Proszę podać pożądaną szerokość oraz wysokość rzeźby:
                </p>
                <v-row justify="start" align="start">
                    <v-col cols="6" md="4" lg="3" xl="2">
                        <form-control title="Szerokość: [cm]" suffix="cm"  required></form-control>
                    </v-col>
                    <v-col cols="6" md="4" lg="3" xl="2">
                        <form-control title="Wysokość: [cm]" suffix="cm"  required></form-control>
                    </v-col>
                </v-row>
                <form-control title="Proszę podać pożądany typ wykończenia:" input-type="select"
                    :data-array="finishSelectOptions"  required></form-control>
                <form-control title="Informacje dodatkowe:" input-type="textarea"></form-control>
            </v-col>
            <v-col cols="12" md="8"  class="bg-secondary pa-8 mt-12">
                <h2 class="mb-8">DANE KONTAKTOWE</h2>
                <v-row>
                    <v-col cols="6">
                        <form-control title="Imię:" required></form-control>
                    </v-col>
                    <v-col cols="6">
                        <form-control title="Nazwisko:" required></form-control>
                    </v-col>
                </v-row>
                <form-control title="Adres E-Mail:" email required></form-control>
                <form-control title="Numer Telefonu:" phone required></form-control>
                <v-row class="mt-12" align="center">
                    <v-col cols="12" md="6" lg="3">
                        <base-button isSubmit title="Wyślij" color="accent"></base-button>
                    </v-col>
                    <v-col>
                        <p>Skontaktujemy się z tobą tak szybko jak to możliwe, w celu ustalenia dalszych szczegółów.</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import FormControl from '../../global/FormControl.vue'
import BaseButton from '../../global/BaseButton.vue'
export default {
    components: {
        FormControl,
        BaseButton
    },
    data() {
        return {
            installationRadioButtons: ['Wolnostojąca', 'Naścienna'],
            locationRadioButtons: ['Wewnątrz', 'Zewnątrz'],
            finishSelectOptions: ['Polerowane', 'Malowane', 'etc.', 'etc.']
        }
    },
    methods: {
        async createOrder() {
            const { valid } = await this.$refs.form.validate()

            if(!valid) return;
            
            //create order
        }
    }
}
</script>