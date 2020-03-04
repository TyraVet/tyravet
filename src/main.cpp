/*! \file */

/* TYRA by Andres Ruiz */

#include <gtkmm/main.h>
#include <gtkmm/messagedialog.h>

int main(int argc, char *argv[]){
    Gtk::Main kit(argc, argv);
    Gtk::MessageDialog Hello("Hello, world", false, Gtk::MESSAGE_INFO, Gtk::BUTTONS_OK);
    Hello.set_secondary_text("This is an example dialog");
    Hello.run();

    return 0;
}
