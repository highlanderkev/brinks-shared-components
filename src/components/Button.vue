<template>
    <button type="button" class="btn btn-primary" @click="onClick()">
        {{text}}
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { noop } from 'vue-class-component/lib/util';

/**
 * Basic Button Component
 * @export
 * @class Button
 * @extends {Vue}
 */
@Component({})
export default class BrinksButton extends Vue {
    @Prop() public text!: string;
    @Prop() public onClick!: () => void;
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