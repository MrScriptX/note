<template>
    <StackLayout @shownModally="show" class="modal">
        <ListPicker :items="groupList" v-model="selectedGroup" />
        <Button text="Add" @tap="save" />
    </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Button, EventData, StackLayout } from '@nativescript/core';

export default class Activity extends Vue {
    groupList = ["Group 1", "Group 2", "Group 3"];
    selectedGroup = "Group 1";

    public closeCallback: any;

    public show(args : any) {
        this.closeCallback = args.closeCallback;
    }

    public save(args: EventData) : void {
        this.closeCallback();
    }
}
</script>

<style lang="scss">
</style>
