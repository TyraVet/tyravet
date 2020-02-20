#pragma once
#ifndef _TYRAAPP_H_
#define _TYRAAPP_H_

/*
 * TyraApp class interface
 */

// wxWidgets
#include <wx/wxprec.h>
#ifndef WX_PRECOM
#include <wx/wx.h>
#endif

class TyraApp: public wxApp{
    public:
        virtual bool OnInit();
};

#endif
