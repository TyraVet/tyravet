#pragma once

/*! Owner class */
#include <boost/serialization/access.hpp>
#include "Person.hpp"

class Owner: public Person{
	public:
		Owner(std::string, std::string, std::string, // Person
		      std::string, std::string, std::string); // Owner
		Owner(); // Default
		~Owner();
		void setEmail(std::string);
		std::string getEmail();
		void setAddress(std::string);
		std::string getAddress();
		void setPhoneNumber(std::string);
		std::string getPhoneNumber();
	private:
		// Attributes
		std::string email; /*!< Owner's email address. */
		std::string address; /*!< Owner's address. */
		std::string phoneNumber; /*!< Owner's mobile phone number. */
		// To serialize
		friend class boost::serialization::access;
		template<class Archive>
		void serialize(Archive &ar, const unsigned int version){
			ar << email;
			ar << address;
			ar << phoneNumber;
		}
};
