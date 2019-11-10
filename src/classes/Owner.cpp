/*! \file */

//! Owner class.
/*!
 Owner class is meant to stored all the information of every client in the veterinary.
*/

#include <string>
#include <vector>
#include "Owner.h"
#include "Pet.h"

//! Class constructor.
/*!
 To initialize every attribute of the class except the pets array.
*/
Owner::Owner(std::string ownerName, std::string ownerLastName,
	     std::string ownerEmail, std::string ownerAddress,
	     std::string ownerPhoneNumber){
	setName(ownerName);
	setLastName(ownerLastName);
	setEmail(ownerEmail);
	setAddress(ownerAddress);
	setPhoneNumber(ownerPhoneNumber);
}

//! Setter member taking one argument and returning void.
/*!
 \param ownerName a string argument.
 \return void.
*/
void Owner::setName(std::string ownerName){
	name = ownerName;
}

//! Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Owner::getName(){
	return name;
}

//! Setter member taking one argument and returning void.
/*!
 \param ownerLastName a string argument.
 \return void.
*/
void Owner::setLastName(std::string ownerLastName){
	lastName = ownerLastName;
}

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Owner::getLastName(){
	return lastName;
}

// Setter member taking one argument and returning void.
/*!
 \param ownerEmail a string argument.
 \return void.
*/
void Owner::setEmail(std::string ownerEmail){
	email = ownerEmail;
}

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Owner::getEmail(){
	return email;
}

// Setter member taking one argument and returning void.
/*!
 \param ownerAddress a string argument.
 \return void.
*/
void Owner::setAddress(std::string ownerAddress){
	address = ownerAddress;
}

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Owner::getAddress(){
	return address;
}

// Setter member taking one argument and returning void.
/*!
 \param ownerPhoneNumber a string argument.
 \return void.
*/
void Owner::setPhoneNumber(std::string ownerPhoneNumber){
	phoneNumber = ownerPhoneNumber;
}

// Getter member taking no argument and returning a string value.
/*!
 \return Object's string attribute.
*/
std::string Owner::getPhoneNumber(){
	return phoneNumber;
}

// Setter member taking one argument and returning void.
/*!
 \param ownerPet a Pet argument.
 \return void.
*/
void Owner::setPet(Pet ownerPet){
	pets.push_back(ownerPet);
}

// Getter member taking no argument and returning a string value.
/*!
 \return Object's vector attribute.
*/
std::vector<Pet> Owner::getPets(){
	return pets;
}

// A normal member taking one argument and returning a boolean value.
/*!
 \param ownerBill a Bill argument.
 \return bool.
*/
bool Owner::payBill(Bill ownerBill){
	return true;
}
