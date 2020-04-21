#pragma once

/*! Pet class */
#include <boost/serialization/base_object.hpp>
#include "Animal.hpp"
#include "Owner.hpp"

class Pet: public Animal{
	public:
		Pet(std::string specie, std::string breed, std::string gender, /* Animal */
			std::string name, std::string birthday, Owner owner); /* Pet */
		Pet(); /* Default */
		Pet(const Pet&); /* Copy constructor */
		Pet& operator=(const Pet& pet); /* Assignment operator */
		~Pet();
		void setName(std::string); // Setters and getters
		std::string getName();
		void setBirthday(std::string);
		std::string getBirthday();
		void setOwner(Owner);
		Owner getOwner();
		void setAge(int);
		int getAge();
	private:
		// Attributes
		std::string name; /*!< Pet's name. */
		std::string birthday; /*!< Pet's birthay. */
		Owner myOwner; /*!< Pet's owner. */
		int age; /*!< Pet's age. */
		// To serialize
		friend class boost::serialization::access;
		template<class Archive>
		void serialize(Archive &ar, const unsigned int version){
			// Serialize base class
			ar << boost::serialization::base_object<Animal>(*this);
			ar << name;
			ar << birthday;
			ar << myOwner;
			ar << age;
		}
};
