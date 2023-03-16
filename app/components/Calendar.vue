<template>
    <StackLayout>
        <SplitMenu margin="5 0"></SplitMenu>
        <StackLayout class="calendar-page" height="100%">
            <FlexboxLayout class="header" flexDirection="row">
                <GridLayout columns="100, 100" rows="50, 50">
                    <Label class="date" row="0" col="0">{{ date.day }}</Label>
                    <Label class="date" row="1" col="0">{{ date.month }}</Label>
                </GridLayout>
            </FlexboxLayout>
            <ScrollView height="100%" orientation="vertical">
                <StackLayout>
                    <Day v-for="(item, index) in data" :key="index" @id=index :category="item.category" :name="item.dish" :time="item.date" :color="'color' + ((index % 4) + 1)"></Day>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { FlexboxLayout, ScrollView, StackLayout, Label, AbsoluteLayout, GridLayout } from '@nativescript/core';
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
        { category: "Food", dish: "spaghetti bolo", date: "2023-03-15" },
        { category: "Food", dish: "risotto", date: "2023-03-16" },
        { category: "Food", dish: "soupe au saumon", date: "2023-03-17" },
        { category: "Food", dish: "steak frite", date: "2023-03-18" },
        { category: "Food", dish: "pizza", date: "2023-03-19" },
        { category: "Food", dish: "salade cesar", date: "2023-03-20" },
        { category: "Food", dish: "swandwich", date: "2023-03-21" },
        { category: "Food", dish: "restaurant", date: "2023-03-22" }
    ]

    private months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    public date = {
        day: 0,
        month: ''
    };

    beforeMount() {
        const today = new Date();

        this.date.day = today.getDate();
        this.date.month = this.months[today.getMonth()];
    }
}
</script>

<style lang="scss" scoped>
.calendar-page {
    margin: 10px 10px;
    padding: 0px 10px;

    border-radius: 100px 100px 0 0;

    background-color: #fff;

    .header {
        margin: 0 10;
        margin-bottom: 20;
    }
}

.date {
    font-family: 'DMSans-Bold';
    font-size: 50rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
}
</style>
