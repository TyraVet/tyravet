#include <iostream>
#include "../include/NotebookMain.hpp"

NotebookMain::NotebookMain() : labelDatebook("Hello from inside Datebook!"),
                           labelHospital("Hello from inside Hospital!"),
                           labelInventory("Hello from inside Inventory!"){
    set_title("Tyra");
    set_default_size(640, 480);

    // Set Notebook
    notebookMain.set_border_width(0);
    // Add Notebook tabs
    notebookMain.append_page(labelDatebook, "Datebook");
    notebookMain.append_page(labelHospital, "Hospital");
    notebookMain.append_page(labelInventory, "Inventory");
    // Switch tabs
    notebookMain.signal_switch_page().connect(sigc::mem_fun(*this,
                                                            &NotebookMain::on_notebook_switch_page));

    add(notebookMain);
    show_all_children();
}

NotebookMain::~NotebookMain(){}

void NotebookMain::on_notebook_switch_page(Gtk::Widget * /* page */, guint page_num){
    std::cout << "Switched to tab with index : " << page_num << std::endl;
}
