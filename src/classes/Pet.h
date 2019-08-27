/*
 * Pet class interface
*/

class Pet{
public:
	Pet(std::string, std::string, std::string, std::string); // Constructor
	void setName(std::string); // Setters and getters
	std::string getName();
	void setSpecie(std::string);
	std::string getSpecie();
	void setBreed(std::string);
	std::string getBreed();
	void setBirthday(std::string);
	std::string getBirthday();
	void setAge(int);
	int getAge();
private:
	// Attributes
	std::string name;
	std::string specie;
	std::string breed;
	std::string birthday;
	int age;
};
