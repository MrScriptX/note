<template>
    <Page>
        <StackLayout>
            <ListPicker :items="groupList" v-model="selectedGroup" />
            <TextField v-model="name" hint="Name" />
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// import { Prop } from "vue-property-decorator";

@Component
export default class DailyActivity extends Vue {
    groupList = ["Group 1", "Group 2", "Group 3"];
    selectedGroup = "Group 1";
    name = "";
}
</script>