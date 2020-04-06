#pragma once

/*! Report class */
#include <string>
#include "Date.hpp"
#include "Pacient.hpp"

class Report{
    public:
        Report();
        ~Report();
    private:
        // Attributes
        Date reportDate;
        Pacient reportPacient;
        std::string reporte;
};
