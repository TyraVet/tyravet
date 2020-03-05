/*! \file */

/* TYRA by Andres Ruiz */

#include <gtkmm/application.h>
#include "classes/headers/helloworld.h"

int main(int argc, char *argv[]){
    auto app = Gtk::Application::create(argc, argv, "example");

    HelloWorld helloworld;

    return app->run(helloworld);
}
