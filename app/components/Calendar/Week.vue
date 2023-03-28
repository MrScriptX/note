<template>
    <FlexboxLayout flexDirection="column" class="week-card" :class="[color, theme]">
        <AbsoluteLayout>
            <label class="title" top="0">{{ days[week_day] }}</label>
            <StackLayout class="task-wrapper" height="100%">
                <StackLayout v-for="(_task, key) in data" :key="key" orientation="horizontal" class="task">
                    <label class="name">{{ _task.name }}</label>
                    <label class="time">{{ _task.time_start }}</label>
                </StackLayout>
            </StackLayout>
        </AbsoluteLayout>
    </FlexboxLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Prop, Watch } from 'vue-property-decorator'
import Component from 'vue-class-component';

import * as AppSettings from '@nativescript/core/application-settings';

// types
import task from '~/types/task'
import { AbsoluteLayout, StackLayout } from '@nativescript/core';

@Component({
})
export default class WeekCard extends Vue {
    @Prop() id!: number
    @Prop() color!: String
    @Prop() date!: String
    @Prop() data!: task[]

    public days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satursday"];

    public theme: string = AppSettings.getString('theme');
    public week_day: number = 0;

    onLoaded() {
        this.theme = AppSettings.getString('theme');

        const current_date = new Date(<string>this.date);
        this.week_day = current_date.getDay();
    }
}
</script>

<style scoped lang="scss">
@import '../../app.scss';

@include themable(afternoon, #FFC2C7, #B6E5D8, #FBE5C8, #8FDDE7);
@include themable(rainbow, #93E2BD, #93E0E2, #94B8E0, #E094DF);
@include themable(peaceful-cottage, #E3E8F0, #82807F, #414754, #E5D7BE);

.week-card {
    height: 170rem;
    margin: 10px 5px;
    padding: 0 10 10 10;

    border-radius: 20%;

    .title {
        font-family: 'DMSans-Bold';
        font-size: 60;
        font-weight: bold;

        color: rgba(#000, 0.3);
    }

    .task {
        height: 30;

        border-radius: 25%;
        color: #fff;
        background-color: #000;

        vertical-align: center;

        line-height: 1;
        font-size: 15;
        margin: 2 0;
        padding: 0 15;

        .name {
            font-family: 'DMSans-Regular';
            font-weight: bold;

            width: 200;
        }

        .time {
            font-family: 'DMSans-Regular';
            font-weight: bold;

            margin: 0 10;
            padding: 0 10;

            text-align: center;
        }
    }

    .task-wrapper {
        vertical-align: bottom;
    }
}
</style>