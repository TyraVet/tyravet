#pragma once

#include <gtkmm.h>

class NotebookMain : public Gtk::Window{
public:
    NotebookMain();
    virtual ~NotebookMain();

protected:
    // Signal handlers
    void on_notebook_switch_page(Gtk::Widget *page, guint page_num);

    // Member widgets
    Gtk::Notebook notebookMain;
    Gtk::Label labelDatebook, labelHospital, labelInventory;
};
