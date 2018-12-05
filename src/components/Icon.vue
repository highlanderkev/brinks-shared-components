<template>
  <svg :class="classes">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="formattedUrl"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Inject, Provide, Vue } from 'vue-property-decorator';

@Component({})
export default class BrinksIcon extends Vue {
    @Prop() public name!: string;
    @Prop({ default: false }) public btnIcon!: boolean;
    @Prop() public title!: string;
    @Inject({ default: '//d1cng9tcgpnm0q.cloudfront.net/icons/symbol-defs.svg#icon'}) public baseUrl!: string;

    private readonly defaultClass = 'icon';

    private get formattedUrl() {
        return `${this.baseUrl}-${this.name}`;
    }

    private get classes() {
        const iconClasses = `icon icon-${this.name}`;
        return this.btnIcon ? `btn__icon ${iconClasses}` : iconClasses;
    }
}
</script>

<style scoped lang="scss">
    // Required @imports
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins";
    @import "../scss/settings/settings.bootstrap.custom";
    @import "../scss/settings/settings.bootstrap.imports";
    @import "../scss/settings/settings.global";
    @import "../scss/tools/tools.typography";
    @import "../scss/tools/tools.positioning";
    @import "../scss/tools/tools.functions";
    @import "../scss/tools/tools.transitions";
    @import "../scss/tools/tools.mixins.grid";
    @import "../scss/tools/tools.responsive";

    // Custom Icon Styles
    @import "../scss/base/_base.icons.icomoon.scss";
    @import "../scss/base/_base.icons.scss";
    @import '../scss/components/_components.bootstrap.buttons.scss';
</style>

