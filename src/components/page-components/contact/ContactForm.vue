<template>
    <v-container class="mb-12">
        <form>
            <v-row class="bg-secondary mb-12">
                <v-col cols="12" md="6" class="pa-md-12">
                    <form-control title="Imię:" required></form-control>
                    <form-control title="Nazwisko:" required></form-control>
                    <form-control title="E-Mail:" email></form-control>
                </v-col>
                <v-col cols="12" md="6" class="pa-md-12">
                    <form-control title="Wiadomość:" inputType="textarea" :rows="11" required></form-control>
                    <v-row justify="center">
                        <v-col cols="12" md="6">
                        <base-button :isSubmit="true" rounded="0" title="Wyślij" color="accent"></base-button>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </form>
    </v-container>
</template>

<script>
import FormControl from '../../global/FormControl.vue'
import BaseButton from '../../global/BaseButton.vue'

export default {
    components: {
        FormControl,
        BaseButton
    }
}
</script>

<style scoped>

</style>