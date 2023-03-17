<template>
    <Page>
        <ScrollView>
            <StackLayout class="form">
                <label class="title">{{ category }}</label>
            
                <StackLayout class="field">
                    <label>{{ form[category].name }}</label>
                    <TextField class="text-input" :text="name" />
                </StackLayout>

                <StackLayout class="field">
                    <label>{{ form[category].date }}</label>
                    <DatePicker :date="date" />
                </StackLayout>

                <StackLayout class="field">
                    <label>{{ form[category].start_time }}</label>
                    <TimePicker :time="start_time" />
                </StackLayout>
           
                <StackLayout v-if="category != 'food'">
                    <label>{{ form[category].end_time }}</label>
                    <TimePicker :time="end_time" />
                </StackLayout>

                <FlexboxLayout class="action" orientation="horizontal">
                    <Button @tap="onSave" text="Save"></Button>
                    <Button @tap="onClose" text="close"></Button>
                </FlexboxLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script scoped lang="ts">
import { DatePicker, EventData, FlexboxLayout, ScrollView, StackLayout, TextField } from '@nativescript/core';
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import task from '../types/task';

@Component({
})
export default class AddTask extends Vue {
    @Prop() category!: string;

    public name: string = "";
    public start_time?: Date;
    public end_time?: Date;
    public date?: Date;

    public form: { [key: string]: any } = {
        default : {
            name: "Nom",
            date: "Date de l'événement",
            start_time: "Heure de début",
            end_time: "Heure de fin"
        },
        food : {
            name: "Plat",
            date: "Jour",
            start_time: "Heure",
            end_time: ""
        }
    }

    onSave(args: EventData) {
        if (!this.date)
            return; // error

        const start_time_str: string | undefined = this.start_time?.getHours() + ':' + this.start_time?.getMinutes();
        const end_time_str : string | undefined = this.end_time?.getHours() + ':' + this.end_time?.getMinutes();

        let task: task = {
            category: this.category,
            name: this.name,
            date: this.date.toISOString().split('T')[0],
            time_start: this.start_time? start_time_str : undefined,
            time_end: this.end_time ? end_time_str : undefined
        };

        this.$modal?.close(task)
    }

    onClose(args: EventData) {
        this.$modal?.close();
    }
}
</script>

<style scoped lang="scss">
.form {
    font-family: 'DMSans-Bold';

    .title {
        font-size: 100;
        font-weight: bold;
        text-align: center;
        text-transform: capitalize;
    }

    .field {
        margin: 10 20;

        border-bottom-width: 1;
        
        font-size: 20;
    }

    .action {
        Button {
            width: 100%;
            height: 40;
            border-radius: 20%;

            color: #fff;
            background-color: #000;
        }
    }
}
</style>
