<template>
    <StackLayout>
        <SplitMenu margin="5 0"></SplitMenu>
        <StackLayout class="calendar-page" height="100%">
            <FlexboxLayout class="header" flexDirection="row">
                <GridLayout columns="5*, 3*" rows="75, 75">
                    <Label class="date" row="0" col="0">{{ date.day }}</Label>
                    <Label class="date" row="1" col="0">{{ date.month }}</Label>
                    <label class="time" row="0" col="1">{{ time }}</label>
                    <Button class="action-button" row="1" col="1" text="+" @tap="onTapAdd"></Button>
                </GridLayout>
            </FlexboxLayout>
            <ScrollView height="100%" orientation="vertical">
                <StackLayout>
                    <Day v-for="(item, index) in data" :key="index" @id=index :data="item" :color="'color' + ((index % 4) + 1)"></Day>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { EventData, FlexboxLayout, ScrollView, StackLayout, Label, AbsoluteLayout, GridLayout, capitalizationType, inputType, PromptOptions, PromptResult, prompt, Button, Page } from '@nativescript/core';

// components
import Day from './Calendar/Day.vue';
import SplitMenu from './UI/SplitMenu.vue';
import AddTask from './AddTask.vue';

// types
import task from '~/types/task'

@Component({
    components: {
        Day,
        SplitMenu,
        AddTask
    }
})
export default class Calendar extends Vue {
    public data: task[] = [
        { category: "Food", name: "spaghetti bolo", date: "2023-03-15", time_start: "12:00" },
        { category: "Food", name: "risotto", date: "2023-03-16", time_start: "13:00" },
        { category: "Food", name: "soupe au saumon", date: "2023-03-17" },
        { category: "Food", name: "steak frite", date: "2023-03-18" },
        { category: "Food", name: "pizza", date: "2023-03-19" },
        { category: "Food", name: "salade cesar", date: "2023-03-20" },
        { category: "Food", name: "swandwich", date: "2023-03-21" },
        { category: "Food", name: "restaurant", date: "2023-03-22" }
    ]

    private months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    public date = {
        day: 0,
        month: ''
    };

    public time = '';

    beforeMount() {
        const today = new Date();

        this.date.day = today.getDate();
        this.date.month = this.months[today.getMonth()];

        setInterval(this.update_time, 2000);
    }

    update_time(): void {
        let date = new Date(); 
        let hh = date.getUTCHours();
        let mm = date.getMinutes();

        const hh_s = (hh < 10) ? "0" + hh : hh;
        const mm_s = (mm < 10) ? "0" + mm : mm;
    
        this.time = hh_s + ":" + mm_s;
    }

    onTapAdd(args: EventData) {
        this.$showModal(AddTask, { fullscreen: true, props: { category: 'food' } })
            .then(data => {

            });
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

        .date {
            font-family: 'DMSans-Bold';
            font-size: 75;
            font-weight: bold;
            margin: 0;
            padding: 0;
        }

        .time {
            font-family: 'DMSans-Regular';
            font-size: 30;

            text-align: right;

            margin-top: 15;
            border-left-width: 1;
        }

        .action-button {
            height: 20%;
            border-radius: 25%;

            color: #fff;
            background-color: #000;
        }
    }
}
</style>
