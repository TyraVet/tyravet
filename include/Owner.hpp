#pragma once

/*! Owner class */
#include "Person.hpp"

class Owner: public Person{
	public:
		Owner(std::string, std::string, std::string, // Person
		      std::string, std::string, std::string); // Owner
		// Person : name, lastName, gender
		// Owner : email, address, phoneNumber
		void setEmail(std::string);
		std::string getEmail();
		void setAddress(std::string);
		std::string getAddress();
		void setPhoneNumber(std::string);
		std::string getPhoneNumber();
	private:
		std::string email; /*!< Owner's email address. */
		std::string address; /*!< Owner's address. */
		std::string phoneNumber; /*!< Owner's mobile phone number. */
};
