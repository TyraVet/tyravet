#ifndef _OWNER_H_
#define _OWNER_H_

/*
 * Owner class interface
*/

#include "Pet.h"
#include "Bill.h"

class Owner{
public:
  Owner(std::string, std::string, std::string, std::string, std::string); // Constructor
	void setName(std::string); // Setters and getters
	std::string getName();
	void setLastName(std::string);
	std::string getLastName();
	void setEmail(std::string);
	std::string getEmail();
	void setAddress(std::string);
	std::string getAddress();
	void setPhoneNumber(std::string);
	std::string getPhoneNumber();
	void setPet(Pet);
	std::vector<Pet> getPets();
	bool payBill(Bill); // Methods
private:
	// Attributes
	std::string name;
	std::string lastName;
	std::string email;
	std::string address;
	std::string phoneNumber;
	std::vector<Pet> pets;
};

#endif
