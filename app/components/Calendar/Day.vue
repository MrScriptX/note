<template>
    <FlexboxLayout class="day-card">
        <label>Hello</label>
    </FlexboxLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { FlexboxLayout } from '@nativescript/core';

@Component({
})
export default class DayCard extends Vue {
}

</script>

<style lang="scss" scoped>
$color1 : #93E2BD;
$color2 : #93E0E2;
$color3 : #94B8E0;
$color4 : #E094DF;
$color5 : #E09594;
$color6 : #DFE094;

.day-card {
    height: 170rem;
    margin: 10px 25px;

    border-radius: 100px;

    background-color: $color1;
}
</style>