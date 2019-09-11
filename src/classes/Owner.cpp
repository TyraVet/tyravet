/*
 * Owner class implementation
*/

#include <string>
#include <vector>
#include "Owner.h"
#include "Pet.h"

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

void Owner::setPet(Pet oPet){
	pets.push_back(oPet);
}

std::vector<Pet> Owner::getPets(){
	return pets;
}

// Methods
bool Owner::payBill(Bill oBill){
	return true;
}
