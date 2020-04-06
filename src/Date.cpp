/*! \file */

//! Date class.
/*! Date class. Basic date class. */

#include <string>
#include "../include/Date.hpp"

//! Class constructor.
/*! To initialize every attribute of the class. */
Date::Date(int dateDay, int dateMonth, int dateYear){
    setDay(dateDay);
    setMonth(dateMonth);
    setYear(dateYear);
}

Date::Date(){}
Date::~Date(){}

// Setter member taking one argument and returning void.
/*!
 * \param dateDay an int argument.
 * \return void. */
void Date::setDay(int dateDay){ day = dateDay; }

// Getter member taking no arguments and returning an int value.
/*!
 * \return int. */
int Date::getDay(){ return day; }

// Setter member taking one argument and returning void.
/*!
 * \param dateMonth an int argument.
 * \return void. */
void Date::setMonth(int dateMonth){ month = dateMonth; }

// Getter member taking no arguments and returning an int value.
/*!
 * \return int. */
int Date::getMonth(){ return month; }

// Setter member taking one argument and returning void.
/*!
 * \param dateYear an int argument.
 * \return void. */
void Date::setYear(int dateYear){ year = dateYear; }

// Getter member taking no arguments and returning an int value.
/*!
 * \return int. */
int Date::getYear(){ return year; }

// Getter member taking no arguments and returning an string value.
/*!
 * \return string. */
std::string Date::getDate(){
    std::string date =
        std::to_string(getDay()) +
        "-" +
        std::to_string(getMonth()) +
        "-" +
        std::to_string(getYear());
    return date;
}
