/*! \file */

/*
 * StartupFrame class implementation
 */

#include "StartupFrame.h"

enum { ID_Hello = 1 };

StartupFrame::StartupFrame(const wxString& title, const wxPoint& pos, const wxSize& size)
    : wxFrame(NULL, wxID_ANY, title, pos, size){
    wxMenu *menuFile = new wxMenu;
    menuFile->Append(ID_Hello, "&Welcome to Tyra...\tCtrl-H", "Tyra v.0.0.1");
    menuFile->AppendSeparator();
    menuFile->Append(wxID_EXIT);

    wxMenu *menuHelp = new wxMenu;
    menuHelp->Append(wxID_ABOUT);

    wxMenuBar *menuBar = new wxMenuBar;
    menuBar->Append(menuFile, "&File");
    menuBar->Append(menuHelp, "&Help");

    SetMenuBar(menuBar);

    CreateStatusBar();
    SetStatusText("Welcome to Tyra!");
}

void StartupFrame::OnHello(wxCommandEvent& event){
    wxLogMessage("Welcome to Tyra!\nYour best veterinary managment.");
}

void StartupFrame::OnExit(wxCommandEvent& event){
    Close(true);
}

void StartupFrame::OnAbout(wxCommandEvent& event){
    wxMessageBox("Software made by Andres Ruiz", "About Tyra", wxOK | wxICON_INFORMATION);
}
