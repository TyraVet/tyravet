import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import VaccinationList from '@/components/VaccinationList.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

const localVue = createLocalVue();
localVue.use(Buefy);

const wrapper = shallowMount(VaccinationList, {
	propsData: { records: [] },
	localVue
});

describe('Vaccination List Component', () => {
	const data = VaccinationList.data();
	it('Should set the correct default data', () => {
		expect(typeof VaccinationList.data).toBe('function');
		expect(data.errorMessage).toMatch('There are no Vaccination/Deworming Records for this pet. Add one!');
		expect(data.noRecords).toBeTruthy();
	});

	const main = wrapper.get('#vaccination-list');
	it('Should have a main section container', () => {
		expect(main.exists()).toBeTruthy();
	});

	it('Should have a table with four columns', async () => {
		await wrapper.setData({ noRecords: false });
		const table = main.get('b-table-stub');

		expect(table.exists()).toBeTruthy();
		expect(table.attributes().id).toMatch('vaccination-table');

		const applicationDateColumn = table.get('#application-date');
		expect(applicationDateColumn.exists()).toBeTruthy();
		expect(applicationDateColumn.attributes().field).toMatch('applicationDate');
		expect(applicationDateColumn.attributes().label).toMatch('Application Date');

		const shot = table.get('#shot');
		expect(shot.exists()).toBeTruthy();
		expect(shot.attributes().field).toMatch('shot');
		expect(shot.attributes().label).toMatch('Shot');

		const medic = table.get('#medic');
		expect(medic.exists()).toBeTruthy();
		expect(medic.attributes().field).toMatch('medic');
		expect(medic.attributes().label).toMatch('Medic');

		const nextDate = table.get('#next-date');
		expect(nextDate.exists()).toBeTruthy();
		expect(nextDate.attributes().field).toMatch('nextDate');
		expect(nextDate.attributes().label).toMatch('Next Application Date');
	});

	it('Should has an error message if there are no records', async () => {
		await wrapper.setData({ noRecords: true });

		const errorMessage = main.findComponent(ErrorMessage);
		expect(errorMessage.exists()).toBeTruthy();
	});
});
