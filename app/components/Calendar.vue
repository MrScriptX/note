<template>
    <StackLayout>
        <SplitMenu></SplitMenu>
        <StackLayout class="calendar-page">
            <label>Title</label>
            <Day v-for="item in data"></Day>
        </StackLayout>
    </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { FlexboxLayout, ScrollView, StackLayout } from '@nativescript/core';
import Day from './Calendar/Day.vue';
import SplitMenu from './UI/SplitMenu.vue';

@Component({
    components: {
        Day,
        SplitMenu
    }
})
export default class Calendar extends Vue {
    public data = [
        { dish: "spaghetti bolo", date: "2023-03-15" },
        { dish: "risotto", date: "2023-03-16" },
        { dish: "soupe au saumon", date: "2023-03-17" },
        { dish: "steak frite", date: "2023-03-18" },
        { dish: "pizza", date: "2023-03-19" },
        { dish: "salade cesar", date: "2023-03-20" },
        { dish: "swandwich", date: "2023-03-21" },
        { dish: "restaurant", date: "2023-03-22" }
    ]
}
</script>

<style lang="scss" scoped>
.calendar-page {
    margin-top: 25px;
    margin: 10px 25px;

    border-radius: 100px 100px 0 0;

    background-color: rgba($color: #000000, $alpha: 0.1);
}
</style>
