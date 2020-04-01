#include <iostream>
#include "../include/helloworld.hpp"

HelloWorld::HelloWorld() : button("Hello World"){
    set_border_width(10);
    button.signal_clicked().connect(sigc::mem_fun(*this, &HelloWorld::on_button_clicked));
    add(button);
    button.show();
}

HelloWorld::~HelloWorld(){

}

void HelloWorld::on_button_clicked(){
    std::cout << "Hello, world" << std::endl;
}
