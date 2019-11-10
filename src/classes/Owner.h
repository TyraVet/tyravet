#ifndef _OWNER_H_
#define _OWNER_H_

/*! Owner class */

#include "Pet.h"
#include "Bill.h"

class Owner{
public:
  Owner(std::string, std::string, std::string, std::string, std::string);
	void setName(std::string);
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
	bool payBill(Bill);
private:
	std::string name; /*!< Owner's name. */
	std::string lastName; /*!< Owner's lastname. */
	std::string email; /*!< Owner's email address. */
	std::string address; /*!< Owner's address. */
	std::string phoneNumber; /*!< Owner's mobile phone number. */
	std::vector<Pet> pets; /*!< Owner's pet(s). */
};

#endif
