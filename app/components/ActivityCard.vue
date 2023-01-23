<template>
    <StackLayout class="activity-card">
        <Label class="title" :text="category"></Label>
        <!-- <ListPicker :items="groupList" v-model="selectedGroup" /> -->
    </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
    props: {
        category: {
            type: String
        }
    }
})
export default class ActivityCard extends Vue {
    groupList = ["Group 1", "Group 2", "Group 3"];
    selectedGroup = "Group 1";

    public category: string = '';
}
</script>

<style lang="scss" scoped>
.activity-card {
    margin: 10rem 30rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .title {
        font-size: 20rem;
        text-align: center;
    }
}
</style>
