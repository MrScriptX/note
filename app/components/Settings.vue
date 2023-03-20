
<template>
    <ScrollView heigth="100%">
        <StackLayout class="page">
            <Label class="title">Settings</Label>
            <StackLayout class="category">
                <label class="header">Theme</label>
                <ListPicker :items="themes" :selectedIndex="theme_index" @selectedIndexChange="OnThemeChange" />
            </StackLayout>
            <StackLayout class="category">
                <label class="header">Developper Options</label>
                <Button text="Clear data" @tap="OnClearData"></Button>
            </StackLayout>
        </StackLayout>
    </ScrollView>
</template>

<script lang="ts">
import { EventData, ItemEventData, confirm, ScrollView, ListPicker } from '@nativescript/core';
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import Store from '~/store/store';
import * as AppSettings from '@nativescript/core/application-settings';

@Component
export default class Settings extends Vue {
    public theme_index = 0;
    public themes = ["afternoon", "rainbow", "peaceful-cottage"];

    public beforeMount() {
        const theme = AppSettings.getString('theme');
        if (!theme)
        {
            AppSettings.setString('theme', this.themes[0]);
            return;
        }

        for (let i = 0; i < this.themes.length; i++)
        {
            if (theme == this.themes[i])
            {
                this.theme_index = i;
                break;
            }
        }
    }

    public OnThemeChange(args: EventData): void {
        const picker = <ListPicker><unknown>args.object;
        AppSettings.setString('theme', this.themes[picker.selectedIndex]);
    }

    public OnClearData(args: ItemEventData): void {
        confirm({
            title: "Delete all data",
            message: "Do you want to clear local data",
            okButtonText: "Yes",
            cancelButtonText: "No"
        })
        .then((result) => {
            if (result)
                Store.clear();
        });
    }
}
</script>

<style scoped lang="scss">
.page {
    font-family: 'DMSans-Bold';

    .title {
        font-size: 60;
        text-align: center;
    }

    .category {
        margin: 0 20;
        .header {
            font-size: 15;
        }
    }
}
</style>
