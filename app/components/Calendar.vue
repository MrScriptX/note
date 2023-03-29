<template>
    <StackLayout>
        <SplitMenu margin="5 0" @changeTab="onChangeFilter"></SplitMenu>
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
            <ListView v-if="_current_tab == 0" v-for="(_task, index) in _tasks" :key="index" ref="task_list" height="100%" separatorColor="transparent">
                <v-template>
                    <StackLayout class="task-wrapper">
                        <Day :id="index" :data="_task" :color="'color' + ((index % 4) + 1)"></Day>
                    </StackLayout>
                </v-template>
            </ListView>
            <!-- <ListView v-else-if="_current_tab == 1" v-for="(_day, index) in week_days" :key="index" ref="task_list" height="100%" separatorColor="transparent">
                <v-template>
                    <StackLayout class="task-wrapper">
                        <WeekCard :id="index" :date="_day" :data="data[index]" :color="'color' + ((index % 4) + 1)"></WeekCard>
                    </StackLayout>
                </v-template>
            </ListView> -->
        </StackLayout>
    </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { EventData, FlexboxLayout, StackLayout, Label, GridLayout, Button, ListView } from '@nativescript/core';
import Store from '~/store/store';

// components
import Day from './Calendar/Day.vue';
import SplitMenu from './UI/SplitMenu.vue';
import AddTask from './AddTask.vue';
import WeekCard from './Calendar/Week.vue';

// types
import task from '~/types/task'

@Component({
    components: {
        Day,
        SplitMenu,
        AddTask,
        WeekCard
    }
})
export default class Calendar extends Vue {
    public week_days: string[] = ["2023-03-19", "2023-03-20", "2023-03-21", "2023-03-22", "2023-03-23", "2023-03-24"];
    public data: Array<task>[] = [
        [],
        [ { category: "food", name: "couscous", date: "2023-03-20", time_start: "12:00" }, 
        { category: "food", name: "pates", date: "2023-03-20", time_start: "19:00" } ],
        [ { category: "food", name: "burger", date: "2023-03-21", time_start: "12:00" }, 
        { category: "food", name: "epinard", date: "2023-03-21", time_start: "20:00" } ],
        [],
        [],
        []
    ];

    public _tasks: task[] = [];

    public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    public days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satursday"];

    public date = {
        day: 0,
        month: 0,
        year: 0,
        week_day: 0
    };

    public time = this.update_time();

    public _current_tab = 0;

    async created() {
        Store.sync_task().then((data) => {
            if (data == null)
            {
                console.error("No data found");
                return;
            }

            this._tasks = data;
            this.refresh();

            setInterval(this.update_time, 2000);
        });
    }

    async beforeMount() {
        const today = new Date();

        this.date.day = today.getDate();
        this.date.month = today.getMonth();
        this.date.year = today.getFullYear();
        this.date.week_day = today.getDay();
    }

    async beforeUpdate() {
        console.log('before update');
    }

    update_time(): string {
        let date = new Date(); 
        let hh = date.getUTCHours();
        let mm = date.getMinutes();

        const hh_s = (hh < 10) ? "0" + hh : hh;
        const mm_s = (mm < 10) ? "0" + mm : mm;
    
        this.time = hh_s + ":" + mm_s;

        return hh_s + ":" + mm_s;
    }

    onChangeFilter(index: number) {
        if (index == 0)
        {
            this._tasks = Store._tasks.filter(element => {
                const d = new Date(element.date);
                if (d.getDay() == this.date.day && d.getMonth() == this.date.month && d.getFullYear() == this.date.year)
                    return true;

                return false;
            });
        }
        if (index == 1)
        {
            this._current_tab = 1;
        }
    }

    onTapAdd(args: EventData) {
        this.$showModal(AddTask, { fullscreen: true, props: { category: 'food' } })
            .then((data: task) => {
                if (data == null || !data)
                    return;
                
                Store._tasks.push(data);
                Store.save();
                this._tasks = Store._tasks;

                this.refresh();
            });
    }

    pad(num: number, length: number) {
        return String(num).padStart(length, '0');
    }

    refresh() {
        const task_list = <ListView | undefined>this.$refs.task_list;
        if (task_list)
            task_list.refresh();
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

    .task-wrapper {
        margin: 0 0;
        padding: 0 0;
    }
}
</style>
