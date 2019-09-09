/*
 * Product class interface
*/

class Product{
public:
	Product(int, double, std::string); // Constructor
	void setID(int); // Setters and getters
	int getID();
	void setPrice(double);
	double getPrice();
	void setCategory(std::string);
	std::string getCategory();
private:
	// Attributes
	int ID;
	double price;
	std::string category;
};
