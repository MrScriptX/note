<template>
    <FlexboxLayout flexDirection="column" class="day-card theme-afternoon" :class="color">
        <label class="title">{{ data.category }}</label>
        <FlexboxLayout flexDirection="row">
            <label class="task">{{ data.name }}</label>
            <label v-if="data.time_start" class="time">{{ data.time_start }}</label>
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Prop } from 'vue-property-decorator'
import Component from 'vue-class-component';
import { FlexboxLayout } from '@nativescript/core';

// types
import task from '~/types/task'

@Component({
})
export default class DayCard extends Vue {
    @Prop() id!: number
    @Prop() color!: String
    @Prop() data!: task

    beforeMount() {
    }
}

</script>

<style lang="scss" scoped>
@import '../../app.scss';

@include themable(theme-afternoon, #FFC2C7, #B6E5D8, #FBE5C8, #8FDDE7);
@include themable(theme-rainbow, #93E2BD, #93E0E2, #94B8E0, #E094DF);
@include themable(theme-peaceful-cottage, #E3E8F0, #82807F, #414754, #E5D7BE);

.day-card {
    height: 170rem;
    margin: 10px 5px;
    padding: 10 10;

    border-radius: 20%;

    .title {
        font-family: 'DMSans-Bold';
        font-size: 40;
        font-weight: bold;

        color: rgba(#000, 0.7);
    }

    .task {
        font-family: 'DMSans-Regular';
        font-size: 15;
        font-weight: bold;
    }

    .time {
        font-family: 'DMSans-Regular';
        font-size: 15;
        font-weight: bold;

        margin: 0 10;
        padding: 0 10;
        padding-top: 2;

        text-align: center;

        border-radius: 15%;
        color: #fff;
        background-color: #000;
    }
}
</style>