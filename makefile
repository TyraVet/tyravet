tyra: src/main.cpp
	g++ src/main.cpp src/helloworld.cpp src/Person.cpp src/Owner.cpp `pkg-config --cflags --libs gtkmm-3.0` -o tyra

clean:
	rm *.o tyra
