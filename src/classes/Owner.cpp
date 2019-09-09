/*
 * Owner class implementation
*/

#include <string>
#include <vector>
#include "Owner.h"

// Constructor
Owner::Owner(std::string oName, std::string oLastName, std::string oEmail, std::string oAddress){
	setName(oName);
	setLastName(oLastName);
	setEmail(oEmail);
	setAddress(oAddress);
}

// Setters and getters
void Owner::setName(std::string oName){
	name = oName;
}

std::string Owner::getName(){
	return name;
}

void Owner::setLastName(std::string oLastName){
	lastName = oLastName;
}

std::string Owner::getLastName(){
	return lastName;
}

void Owner::setEmail(std::string oEmail){
	email = oEmail;
}

std::string Owner::getEmail(){
	return email;
}

void Owner::setAddress(std::string oAddress){
	address = oAddress;
}

std::string Owner::getAddress(){
	return address;
}

bool Owner::setPet(Pet oPet){
	bool isOK = false;

	pets.push_back(oPet) ? isOk = true : isOK = false;

	return isOk;
}

std::vector<Pet> getPets(){
	return pets;
}

// Methods
bool payBill(Bill oBill){
	return true;
}
