<template>
    <StackLayout>
        <ListView v-for="activity in activities" @itemTap="">
            <v-template>
                <ActivityCard :category="activity.category" />
            </v-template>
        </ListView>
        <Button text="Update" @tap="AddActivity"></Button>
    </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { StackLayout, EventData, Dialogs } from '@nativescript/core';
import ActivityCard from './ActivityCard.vue';
import activity from '../../types/activity';

@Component({
    components: {
        ActivityCard
    }
})
export default class YourDay extends Vue {
    public activities: activity[] = [
        { category: 'Sport' }
    ];

    private categories: string[] = ['Sport', 'Lecture', 'Ecriture', 'Dessin', 'Travail', 'Culture', 'Sortie'];

    public AddActivity(args: EventData): void {
        const actionOptions = {
            title: 'Ajouter une activité',
            message: 'Choissisez la catégories',
            cancelButtonText: 'Cancel',
            actions: this.categories,
            cancelable: true // Android only
        };

        Dialogs.action(actionOptions).then(result => {
            console.log('Activity chosen: ', result)

            this.activities.push({
                category: result
            });
        });
    }
}
</script>
