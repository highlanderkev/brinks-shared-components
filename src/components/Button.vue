<template>
    <button type="button" :class="classes" @click="onClick()" :disabled="disabled">
        <slot name="icon-left"></slot>
        <span>{{text}}</span>
        <slot name="icon-right"></slot>
    </button>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

/**
 * @typedef ButtonType - literal string type for easy enumerating all available button types.
 */
export type ButtonType = 'btn-primary' | 'btn-link' | 'btn-success' | 'btn-lg' | 'btn-warning';

/**
 * Basic Button Component
 * @export
 * @class Button
 * @classdesc Brinks Vue Button Component.
 * @extends {Vue}
 */
@Component({})
export default class BrinksButton extends Vue {
    @Prop({ default: 'btn-primary' }) public type!: ButtonType | ButtonType[];
    @Prop() public text!: string;
    @Prop({ default: Function }) public onClick!: () => void;
    @Prop({ default: false }) public disabled!: boolean;

    private readonly defaultClass = 'btn';

    private get classes() {
        return `${this.defaultClass} ${this.type.toString().replace(',', ' ')}`;
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
    
    // Custom Button Styles
    @import '../scss/components/_components.bootstrap.buttons.scss';
</style>