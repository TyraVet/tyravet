#pragma once

#include <gtkmm.h>

class AddAppointment : public Gtk::Window{
	public:
		AddAppointment();
		virtual ~AddAppointment();

	protected:
		/* Signal handlers */
		void on_button_add_pet();
		void on_button_add_appointment();
		/* Member widgets */
		Gtk::Grid gridMain;
		Gtk::Label labelPet, labelNotHere, labelService, labelHour;
		Gtk::ComboBox comboboxPet, comboboxService, comboboxHour;
		Gtk::Calendar calendar;
		Gtk::Button buttonAddPet, buttonAddAppointment;
};
