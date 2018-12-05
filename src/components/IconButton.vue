<template>
  <div style="margin-bottom: 10px;">
    <BrinksButton text="Icon Button">
        <BrinksIcon name="check" slot="icon-left" :btnIcon="btnIcon"/>
    </BrinksButton>
    <BrinksButton text="Icon Button">
        <BrinksIcon name="check" slot="icon-right" :btnIcon="btnIcon" class="btn__icon--right"/>
    </BrinksButton>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Inject, Provide, Vue } from 'vue-property-decorator';
import { default as BrinksButton, ButtonType } from './Button.vue';
import BrinksIcon from './Icon.vue';

@Component({
    components: {
        BrinksButton,
        BrinksIcon,
    },
})
export default class BrinksIconButton extends Vue {
    private btnIcon = true;
}
</script>

<style scoped lang="scss">

</style>