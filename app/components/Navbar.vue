<template>
    <Page>
        <TabView class="tab-view">
            <TabViewItem title="Home" iconSource="res://home">
                <StackLayout class="p-20">
                    <Label text="Home Tab Content" class="h2 text-center" />
                </StackLayout>
            </TabViewItem>
            <TabViewItem title="Settings" iconSource="res://settings">
                <StackLayout class="p-20">
                    <Label text="Settings Tab Content" class="h2 text-center" />
                </StackLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>
  
<script lang="ts">
import Vue from "nativescript-vue";
import Component from "vue-class-component";

@Component
export default class TabNavigation extends Vue { }
</script>
  
<style scoped>
.tab-view {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
