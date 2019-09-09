/*
 * Owner class interface
*/

class Owner{
public:
	Owner(std::string, std::string, std::string, std::string); // Constructor
	void setName(std::string); // Setters and getters
	std::string getName();
	void setLastName(std::string);
	std::string getLastName();
	void setEmail(std::string);
	std::string getEmail();
	void setAddress(std::string);
	std::string getAddress();
	bool setPet(Pet);
	std::vector<Pet> getPets();
	bool payBill(Bill); // Methods
private:
	// Attributes
	std::string name;
	std::string lastName;
	std::string email;
	std::string address;
	std::vector<Pet> pets;
};
