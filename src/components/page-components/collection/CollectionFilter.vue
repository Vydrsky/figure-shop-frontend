<template>
    <v-container class="pa-4 pa-md-12 mt-12">
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-text-field prepend-icon="mdi-magnify"></v-text-field>
                <div class="d-sm-flex flex-wrap ml-10 align-center">
                    <p class="text-grey pa-2">posortuj:</p>
                    <v-chip class="m-auto ma-2" prepend-icon="mdi-form-textbox">po nazwie</v-chip>
                    <v-chip class="m-auto ma-2" prepend-icon="mdi-archive-outline">po materiale</v-chip>
                    <v-chip class="m-auto ma-2" prepend-icon="mdi-alert-decagram">od najnowszego</v-chip>
                    <v-chip class="m-auto ma-2" prepend-icon="mdi-alert">etc</v-chip>
                    <v-chip class="m-auto ma-2" prepend-icon="mdi-alert">etc</v-chip>
                    <v-chip class="m-auto ma-2" prepend-icon="mdi-alert">etc</v-chip>
                </div>
            </v-col>
        </v-row>
        <v-row justify="center">
        </v-row>
    </v-container>
</template>

<script>

</script>