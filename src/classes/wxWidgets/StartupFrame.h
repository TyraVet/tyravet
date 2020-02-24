#pragma once
#ifndef _STARTUPFRAME_H_
#define _STARTUPFRAME_H_

/*
 * StartupFrame class interface
 */

// wxWidgets
#include <wx/wxprec.h>
#ifndef WX_PRECOM
#include <wx/wx.h>
#endif

class StartupFrame: public wxFrame{
    public:
        StartupFrame(const wxString& title, const wxPoint& pos, const wxSize& size);

    private:
        void OnHello(wxCommandEvent& event);
        void OnExit(wxCommandEvent& event);
        void OnAbout(wxCommandEvent& event);

        wxDECLARE_EVENT_TABLE();
};

#endif
