/*! \file */

/*
 * TyraApp class implementation
 */

#include "TyraApp.h"
#include "StartupFrame.h"

// Avoid maigc numbers
const int WIDTH = 600;
const int HEIGHT = 550;

bool TyraApp::OnInit(){
    StartupFrame *frame = new StartupFrame("Welcome to Tyra!",
                                           wxPoint(0,0),
                                           wxSize(WIDTH, HEIGHT));
    frame->Show(true);

    wxButton* button = new wxButton;
    button->Create(frame,
                   wxID_OK,
                   wxEmptyString,
                   wxPoint(50,50),
                   wxSize(100, 100),
                   0,
                   wxDefaultValidator,
                   "Button");

    return true;
}
