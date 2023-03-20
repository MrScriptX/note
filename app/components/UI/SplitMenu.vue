<template>
    <FlexboxLayout id="calendar-menu">
        <button v-for="(tab, index) in tabs" :key="index" class="item" :class="{ selected: selectedIndex == index }" @tap="onClickItem" ref="{{ tab }}">{{ tab }}</button>
    </FlexboxLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { EventData, FlexboxLayout } from '@nativescript/core';

@Component({
})
export default class SplitMenu extends Vue {
    public selectedIndex: number = 0;
    public tabs: string[] = ["Today", "Week", "Month"];

    onClickItem(event: EventData) {
        const target = event.object;

        for (let i = 0; i < this.tabs.length; ++i)
        {
            if (this.tabs[i] == target.get('text'))
            {
                this.selectedIndex = i;
                break;
            }
        }

        this.$emit('changeTab', this.selectedIndex);
    }
}
</script>

<style lang="scss" scoped>
#calendar-menu {
    .item {
        width: 100%;
        height: 40rem;

        border-radius: 100rem;
    }

    .selected {
        color: #fff;
        background-color: #000;
    }
}
</style>