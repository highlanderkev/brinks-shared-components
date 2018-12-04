import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BrinksButton from '@/components/Button.vue';

describe('BrinksButton.vue', () => {
    it('renders props.text when passed', () => {
        const text = 'button';
        const wrapper = shallowMount(BrinksButton, {
            propsData: { text },
        });
        expect(wrapper.text()).to.include(text);
    });
});
