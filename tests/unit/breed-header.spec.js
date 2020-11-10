import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import BreedHeader from '@/components/BreedHeader.vue';

const localVue = createLocalVue();
localVue.use(Buefy);

const wrapper = shallowMount(BreedHeader, { localVue });

describe('Breed Header Component', () => {
	const data = BreedHeader.data();
	it('Shoudl set the correct default data', () => {
		expect(typeof BreedHeader.data).toBe('function');
		expect(data.title).toMatch('Breeds');
		expect(data.labelButton).toMatch('Add');
	});

	const main = wrapper.get('#breed-header');

	it('Should has a main Section', () => {
		expect(main.exists()).toBeTruthy();
		expect(main.classes()).toContain('title-container');
	});

	const title = main.get('h3');
	it('Should has an h3 tag with the Title', () => {
		expect(title.exists()).toBeTruthy();
		expect(title.classes()).toContain('is-size-4');
		expect(title.classes()).toContain('has-text-primary-dark');
		expect(title.text()).toMatch(data.title);
	});

	const addButton = main.get('b-button-stub');
	it('Should has an Add Button', () => {
		expect(addButton.exists()).toBeTruthy();
		expect(addButton.attributes().type).toMatch('is-primary');
		expect(addButton.attributes().iconpack).toMatch('fas');
		expect(addButton.attributes().iconleft).toMatch('plus');
		expect(addButton.text()).toMatch(data.labelButton);
	})

	it('Should has a launchForm Method', () => {
		expect(wrapper.vm.launchForm).toBeTruthy();
	});
});
