/*! \file */

/* TYRA by Andres Ruiz */

// wxWidgets
#include <wx/wxprec.h>
#ifndef WX_PRECOM
#include <wx/wx.h>
#endif
// My wxWidgets
#include "classes/TyraApp.h"
#include "classes/StartupFrame.h"

enum{ ID_Hello = 1 };

wxBEGIN_EVENT_TABLE(StartupFrame, wxFrame)
EVT_MENU(ID_Hello, StartupFrame::OnHello)
EVT_MENU(wxID_EXIT, StartupFrame::OnExit)
EVT_MENU(wxID_ABOUT, StartupFrame::OnAbout)
wxEND_EVENT_TABLE()

wxIMPLEMENT_APP(TyraApp);
