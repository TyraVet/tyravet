#pragma once

#include <string>

/* Tyra class */

class Tyra{
	public:
		Tyra();
		~Tyra();
		std::string getCreator();
		std::string getWebPage();
		void printWelcomeMessage();
		void printOptions();
		void printAbout();
	private:
		const std::string CREATOR = "Andres Ruiz";
		const std::string WEB_PAGE = "https://github.com/Andrsr";
};
