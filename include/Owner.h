#pragma once
#ifndef _OWNER_H_
#define _OWNER_H_

/*! Owner class */

#include "Person.h"

class Owner: public Person{
	public:
		Owner(std::string, std::string, std::string);
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

#endif
