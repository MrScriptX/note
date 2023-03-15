
<template>
    <StackLayout>
        <Label>Settings</Label>
        <ListView v-for="category in categories" @itemTap="OnEditCategory">
            <v-template>
                <Label :text="category" />
            </v-template>
        </ListView>
        <Button text="New category" @tap="OnNewCategory"></Button>
    </StackLayout>
</template>

<script lang="ts">
import { EventData, PromptOptions, inputType, capitalizationType, prompt, PromptResult, ListView, ItemEventData } from '@nativescript/core';
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';

@Component
export default class Settings extends Vue {
    public categories: string[] = [];

    public OnNewCategory(args: EventData): void {
        const actionOptions: PromptOptions = {
            title: 'Ajouter une catégorie',
            message: 'Enter a new category name',
            okButtonText: "OK",
            cancelButtonText: 'Cancel',
            inputType: inputType.text,
            cancelable: true, // Android only
            capitalizationType: capitalizationType.none
        };

        prompt(actionOptions).then((result: PromptResult) => {
            console.log('new category : ', result)

            if (result.text === 'Cancel')
                return;

            this.categories.push(result.text);
        });
    }

    public OnEditCategory(args: ItemEventData): void {
        const actionOptions: PromptOptions = {
            title: 'Edit',
            defaultText: this.categories[args.index],
            okButtonText: "Modify",
            neutralButtonText: "Delete",
            cancelButtonText: 'Cancel',
            inputType: inputType.text,
            cancelable: true, // Android only
            capitalizationType: capitalizationType.none
        };

        prompt(actionOptions).then((result: PromptResult) => {
            console.log('new category : ', result)

            if (result.text === 'Cancel')
                return;
            else if (result.text === 'Delete')
                return; // delete item
            
            this.categories.push(result.text);
        });
    }
}
</script>
