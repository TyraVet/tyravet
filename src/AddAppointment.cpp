#include <string>
#include <gtkmm/messagedialog.h>
#include "../include/AddAppointment.hpp"
#include "../include/Pet.hpp"
#include "../include/Owner.hpp"
#include "../include/AddPet.hpp"

const std::string WINDOW_TITLE = "Agregar Cita";
const std::string LABEL_PET = "Mascota";
const std::string LABEL_NOT_HERE = "Tu mascota no está aquí?";
const std::string LABEL_SERVICE = "Servicio";
const std::string LABEL_HOUR = "Hora";
/* Window options */
const bool WINDOW_RESIZABLE = false;
const bool GRID_ROW_HOMOGENEOUS = true;
const bool MESSAGE_DIALOG_MARKUP = false;
const std::string MESSAGE_DIALOG_WARNING = "WARNING";
const std::string MESSAGE_DIALOG_WARNING_2 = "Ingresa todo los datos";
const std::string CLEAN_ENTRY = "";
/* Avoid magic numbers */
const int WINDOW_WIDTH = 300;
const int WINDOW_HEIGHT = 500;

AddAppointment::AddAppointment() : labelPet(::LABEL_PET),
									labelNotHere(::LABEL_NOT_HERE),
									labelService(::LABEL_SERVICE),
									labelHour(::LABEL_HOUR){
	/* this = the window */
	this->set_title(::WINDOW_TITLE);
	this->set_default_size(::WINDOW_WIDTH, ::WINDOW_HEIGHT);
	this->set_resizable(::WINDOW_RESIZABLE);

	/* Add Main Grid to Window */
	this->add(gridMain);
	gridMain.set_row_homogeneous(::GRID_ROW_HOMOGENEOUS);
	/* Populate Grid */
	/* attach(widget, column, row, width, height) */
	gridMain.attach(labelPet, 0, 0, 1, 1);
	gridMain.attach(comboboxPet, 1, 0, 1, 1);
	gridMain.attach(labelNotHere, 1, 1, 1, 1);
	gridMain.attach(buttonAddPet, 1, 2, 1, 1);
	gridMain.attach(labelService, 0, 3, 1, 1);
	gridMain.attach(comboboxService, 1, 3, 1, 1);
	gridMain.attach(calendar, 0, 4, 2, 2);
	gridMain.attach(labelHour, 0, 5, 1, 1);
	gridMain.attach(comboboxHour, 1, 5, 1, 1);

	/* Events */
	buttonAddPet.signal_clicked().
		connect(sigc::mem_fun(*this, &AddAppointment::on_button_add_pet));
	buttonAddAppointment.signal_clicked().
		connect(sigc::mem_fun(*this, &AddAppointment::on_button_add_appointment));

	this->show_all_children();
}

AddAppointment::~AddAppointment(){}

void AddAppointment::on_button_add_pet(){
	AddPet window;
	window.show();
}

void AddAppointment::on_button_add_appointment(){
	/* The user may click the button whitout choosing
	 * a pet, a service or an hour. This prevents to
	 * save null data into the database. */
	while((comboboxPet.get_entry_text() == ::CLEAN_ENTRY) ||
			(comboboxService.get_entry_text() == ::CLEAN_ENTRY) ||
			(comboboxHour.get_entry_text() == ::CLEAN_ENTRY)){
		Gtk::MessageDialog dialog(*this, ::MESSAGE_DIALOG_WARNING,
									::MESSAGE_DIALOG_MARKUP,
									Gtk::MESSAGE_WARNING,
									Gtk::BUTTONS_OK);
		dialog.set_secondary_text(::MESSAGE_DIALOG_WARNING_2);
		dialog.run();
		return;
	}
	/* TODO save to DB */
}
