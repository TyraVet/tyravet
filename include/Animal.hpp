#pragma once

/*! Animal class */
#include <string>
#include <boost/serialization/access.hpp>

class Animal{
	public:
		Animal(std::string specie, std::string breed, std::string gender);
		Animal(); /* Default */
		~Animal();
		void setSpecie(std::string);
		std::string getSpecie();
		void setBreed(std::string);
		std::string getBreed();
		void setGender(std::string);
		std::string getGender();
	private:
		std::string specie;
		std::string breed;
		std::string gender;
		/* To serialize */
		friend class boost::serialization::access;
		template<class Archive>
		void serialize(Archive &ar, const unsigned int version){
			ar << specie;
			ar << breed;
			ar << gender;
		}
};
