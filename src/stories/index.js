import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import BrinksButton from '../components/Button.vue';

storiesOf('BrinksButton', module)
    .add('story as a component', () => ({
        components: { BrinksButton },
        template: '<brinks-button></brinks-button>'
    }));