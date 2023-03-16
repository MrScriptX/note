<template>
	<Page>
		<ActionBar>
			<Label text="Note" />
		</ActionBar>

		<GridLayout>
			<TabView>
				<TabViewItem title="Home">
					<Label text="Home"></Label>
				</TabViewItem>
				<TabViewItem title="Food">
					<Calendar />
				</TabViewItem>
				<TabViewItem title="Settings">
					<Settings />
				</TabViewItem>
			</TabView>
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import Calendar from "./Calendar.vue";
import Settings from "./Settings.vue";
import { StackLayout, TabView, TabViewItem } from "@nativescript/core";

export default Vue.extend({
	components: {
    	Calendar,
		Settings
	}
});
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
Page {
	background-color: rgba($color: #000000, $alpha: 0.075);
}

.fas {
	@include colorize($color: accent);
}

.info {
	font-size: 20;
	vertical-align: center;
}
</style>
