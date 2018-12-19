import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex';

import BrinksButton from '../src/components/Button.vue';

Vue.use(Vuex);
Vue.component('brinks-button', BrinksButton);

function loadStories(){
    require('../src/stories');
}

configure(loadStories, module);