/*! \file */

/*
 * TyraApp class implementation
 */

#include "../headers/TyraApp.h"
#include "../headers/StartupFrame.h"

// Avoid maigc numbers
const int WIDTH = 600;
const int HEIGHT = 550;

bool TyraApp::OnInit(){
    StartupFrame *frame = new StartupFrame("Welcome to Tyra!",
                                           wxPoint(0,0),
                                           wxSize(WIDTH, HEIGHT));
    frame->Show(true);

    return true;
}
