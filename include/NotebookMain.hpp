#pragma once

#include <gtkmm.h>

class NotebookMain : public Gtk::Window{
    public:
        NotebookMain();
        virtual ~NotebookMain();

    protected:
        // Signal handlers
        void on_notebook_switch_page(Gtk::Widget *page, guint page_num);
        void on_button_add_appointment();

        // Member widgets
        Gtk::Notebook notebookMain;
        Gtk::Label labelHospital, labelInventory, labelTest;
        Gtk::Box boxDatebook, boxCalendar, boxAppointments;
        Gtk::Calendar calendar;
        Gtk::Button buttonAddAppointment;
};
