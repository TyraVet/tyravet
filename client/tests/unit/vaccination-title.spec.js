import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import VaccinationTitle from '@/components/VaccinationTitle.vue';

const localVue = createLocalVue();
localVue.use(Buefy);

const wrapper = shallowMount(VaccinationTitle, {
	propsData: { petId: '' },
	localVue
});

describe('Vaccination Title Component', () => {
	it('Should have a section container', () => {
		expect(wrapper.get('#vaccination-title')).toBeTruthy();
	});

	it('Sets the correct default data', () => {
		expect(typeof VaccinationTitle.data).toBe('function');
		const data = VaccinationTitle.data();
		expect(data.title).toMatch('Vaccination and Deworming Record');
		expect(data.labelButton).toMatch('Add');
	});

	const main = wrapper.get('#vaccination-title');

	it('Shoudl have an Needle Icon', () => {
		const icon = main.get('b-icon-stub');
		expect(icon.exists()).toBeTruthy();
		expect(icon.attributes().pack).toMatch('fas');
		expect(icon.attributes().icon).toMatch('syringe');
		expect(icon.attributes().size).toMatch('is-large');
		expect(icon.attributes().type).toMatch('is-icon');
	});

	it('Should have an h1 tag as the Title', () => {
		const h1 = main.get('h1');
		expect(h1.exists()).toBeTruthy();
		expect(h1.classes('is-size-3')).toBeTruthy();
		expect(h1.text()).toMatch('Vaccination and Deworming Record');
	});

	it('Should have a button to Add Log', () => {
		const button = main.get('b-button-stub');
		expect(button.exists()).toBeTruthy();
		expect(button.attributes().nativetype).toMatch('button');
		expect(button.attributes().tag).toMatch('button');
		expect(button.attributes().title).toMatch('Add Vaccination/Deworming Log');
		expect(button.attributes().type).toMatch('is-primary');
		expect(button.attributes().size).toMatch('is-medium');
		expect(button.attributes('has-icon')).toMatch('');
		expect(button.attributes().iconpack).toMatch('fas');
		expect(button.attributes().iconleft).toMatch('plus');
		expect(button.text()).toMatch('Add');
	});
});
