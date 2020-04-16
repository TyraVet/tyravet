#include <iostream>
#include <fstream>

int main(){
    // open a file in read mode
    std::ifstream infile;
    infile.open("../CoquetaAndres.dat");
    std::string data;

    std::cout << "Reading from the file" << std::endl;
    infile >> data;

    // write the data at the screen.
    std::cout << data << std::endl;

    // close the opened file.
    infile.close();

    return 0;
}
