/*
 * Bill class interface
*/

class Bill{
public:
	Bill(std::vector<Product>); // Constructor
	void setProducts(std::vector<Product>); // Setters and getters
	std::vector<Product> getProducts();
	double calculateTotal(); // Methods
private:
	// Attributes
	std::vector<Product> products;
	double total;
};
