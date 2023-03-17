<template>
    <StackLayout>
        <SplitMenu margin="5 0"></SplitMenu>
        <StackLayout class="calendar-page" height="100%">
            <FlexboxLayout class="header" flexDirection="row">
                <GridLayout columns="5*, 3*" rows="25, 80, 75">
                    <label class="year" row="0" col="0">{{ date.year }}</label>
                    <Label class="date" row="1" col="0">{{ date.day }}.{{ pad(date.month, 2) }}</Label>
                    <Label class="date" row="2" col="0">{{ months[date.month] }}</Label>
                    <StackLayout row="1" col="1" class="clock">
                        <label class="time">{{ time }}</label>
                        <label class="day">{{ days[date.week_day] }}</label>
                    </StackLayout>
                    <Button class="action-button" row="2" col="1" text="+" @tap="onTapAdd"></Button>
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
import { EventData, FlexboxLayout, ScrollView, StackLayout, Label, GridLayout, Button } from '@nativescript/core';

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

    public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    public days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satursday"];

    public date = {
        day: 0,
        month: 0,
        year: 0,
        week_day: 0
    };

    public time = '';

    beforeMount() {
        const today = new Date();

        this.date.day = today.getDate();
        this.date.month = today.getMonth();
        this.date.year = today.getFullYear();
        this.date.week_day = today.getDay();

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

    pad(num: number, length: number) {
        return String(num).padStart(length, '0');
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
        margin: 20 10;
        color: #000;
        line-height: 0;

        .clock {
            border-left-width: 1;
        }

        .year {
            font-family: 'DMSans-Regular';
            font-size: 20;
            margin-left: 5;
        }

        .day {
            text-align: right;
            font-size: 15;
            margin: 0;
            padding: 0;
            line-height: 0;
        }

        .time {
            font-family: 'DMSans-Regular';
            font-size: 30;

            text-align: right;
            line-height: 0;

            margin: 0;
            padding: 0;
            margin-top: 15;
        }

        .date {
            font-family: 'DMSans-Bold';
            font-size: 75;
            font-weight: bold;
            margin: 0;
            padding: 0;
            line-height: 0;
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
