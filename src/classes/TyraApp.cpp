/*! \file */

/*
 * TyraApp class implementation
 */

#include "TyraApp.h"
#include "StartupFrame.h"

bool TyraApp::OnInit(){
    StartupFrame *frame = new StartupFrame( "Welcome to Tyra!", wxPoint(50, 50), wxSize(450, 340) );
    frame->Show(true);
    return true;
}
