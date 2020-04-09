/*! \file */

/* TYRA by Andres Ruiz */

#include <gtkmm-3.0/gtkmm.h>
#include "../include/NotebookMain.hpp"

int main(int argc, char *argv[]){
    auto app = Gtk::Application::create(argc, argv, "dev.tyra");

    NotebookMain notebookMain;

    return app->run(notebookMain);
}
