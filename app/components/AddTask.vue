<template>
    <Page>
        <StackLayout>
            <label class="title">{{ category }}</label>
            <TextField :text="name" hint="Nom" />
            <DatePicker :date="date" />
            <TimePicker :time="time" />
            <Button @tap="onSave" text="Save"></Button>
            <Button @tap="onClose" text="close"></Button>
        </StackLayout>
    </Page>
</template>

<script scoped lang="ts">
import { DatePicker, EventData, StackLayout, TextField } from '@nativescript/core';
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
})
export default class AddTask extends Vue {
    @Prop() category!: string;

    public name: string = "";
    public time?: Date;
    public date?: Date;

    onSave(args: EventData) {

    }

    onClose(args: EventData) {
        this.$modal?.close();
    }
}
</script>

<style scoped lang="scss">
.title {
    font-family: 'DMSans-Bold';
    font-size: 150;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
}
</style>
