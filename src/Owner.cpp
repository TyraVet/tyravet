/*! \file */

//! Owner class.
/*!
 Owner class is meant to stored all the information of every client in the veterinary.
*/

#include <string>
#include <vector>
#include "../include/Owner.hpp"

//! Class constructor.
/*!
 To initialize every attribute of the class except the pets array.
*/
Owner::Owner(std::string ownerName, std::string ownerLastName, std::string ownerGender,
			 std::string ownerEmail, std::string ownerAddress, std::string ownerPhoneNumber)
	: Person(ownerName, ownerLastName, ownerGender){
	setEmail(ownerEmail);
	setAddress(ownerAddress);
	setPhoneNumber(ownerPhoneNumber);
}

Owner::Owner(){}

// Setter member taking one argument and returning void.
/*!
 \param ownerEmail a string argument.
 \return void.
*/
void Owner::setEmail(std::string ownerEmail){ email = ownerEmail; }

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Owner::getEmail(){ return email; }

// Setter member taking one argument and returning void.
/*!
 \param ownerAddress a string argument.
 \return void.
*/
void Owner::setAddress(std::string ownerAddress){ address = ownerAddress; }

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Owner::getAddress(){ return address; }

// Setter member taking one argument and returning void.
/*!
 \param ownerPhoneNumber a string argument.
 \return void.
*/
void Owner::setPhoneNumber(std::string ownerPhoneNumber){ phoneNumber = ownerPhoneNumber; }

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Owner::getPhoneNumber(){ return phoneNumber; }
