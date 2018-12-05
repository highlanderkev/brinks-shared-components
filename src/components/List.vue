<template>
    <ul :class="classes">
        <li v-for="item in items" :key="item.id">
            {{item.data}}
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export type ListType = 'list-spaced' | 'list-ordered' | 'list-bulleted' | 'list-bulleted-icons';

export interface IListItem {
    id: string | number;
    data: any;
}

@Component
export default class BrinksList extends Vue {
    @Prop({ default: 'list-spaced' }) public type!: ListType | ListType[];
    @Prop({ default: [] }) public items!: IListItem[];

    private readonly defaultClass = 'list-group';

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

    // Custom List Styles
    @import '../scss/components/_components.bootstrap.list-group.scss';
    @import '../scss/objects/_objects.bootstrap.lists.scss';
</style>