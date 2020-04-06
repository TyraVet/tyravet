#pragma once

/*! Date class*/
#include <string>

class Date{
    public:
        Date(int, int, int);
        ~Date();
        void setDay(int);
        int getDay();
        void setMonth(int);
        int getMonth();
        void setYear(int);
        int getYear();
        std::string getDate();
    private:
        // Attributes
        int day; /*!< Date's day. */
        int month; /*!< Date's month. */
        int year; /*!< Date's year. */
};
