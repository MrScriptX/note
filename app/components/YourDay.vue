<template>
    <StackLayout>
        <Button text="Update" @tap="AddActivity"></Button>
    </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Button, StackLayout, EventData, Dialogs, ListView } from '@nativescript/core';
import Component from 'vue-class-component';

@Component({
    components: {
    }
})
export default class YourDay extends Vue {
    public AddActivity(args: EventData): void {
        const actionOptions = {
            title: 'Ajouter une activité',
            message: 'Choissisez la catégories',
            cancelButtonText: 'Cancel',
            actions: ['Sport', 'Lecture', 'Ecriture', 'Dessin', 'Travail', 'Culture', 'Sortie'],
            cancelable: true // Android only
        };

        Dialogs.action(actionOptions).then(result => {
            console.log('Dialog result: ', result)
            if (result === 'Options1') {
                // Do action 1
            } else if (result === 'Option2') {
                // Do action 2
            }
        });
    }
}
</script>
