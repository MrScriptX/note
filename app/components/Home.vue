<template>
	<Page>
		<ActionBar>
			<Label text="Home" />
		</ActionBar>

		<GridLayout>
			<TabView>
				<TabViewItem title="Home">
					<Label text="Home"></Label>
				</TabViewItem>
				<TabViewItem title="Your Day">
					<StackLayout>
						<YourDay></YourDay>
					</StackLayout>
				</TabViewItem>
			</TabView>
		</GridLayout>
	</Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import YourDay from "./YourDay.vue";
import { StackLayout, TabView } from "@nativescript/core";

export default Vue.extend({
	components: {
		YourDay
	}
});
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
	@include colorize($color: accent);
}

.info {
	font-size: 20;
	horizontal-align: center;
	vertical-align: center;
}
</style>
