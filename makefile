CPP= g++
CFLAGS = `pkg-config --cflags --libs gtkmm-3.0`

tyra: src/main.cpp NotebookMain.o Client.o Owner.o Person.o Pet.o Animal.o
	$(CPP) src/main.cpp NotebookMain.o Client.o Owner.o Person.o Pet.o Animal.o $(CFLAGS) -o tyra

NotebookMain.o: src/NotebookMain.cpp
	$(CPP) -c src/NotebookMain.cpp $(CFLAGS)

Client.o: src/Client.cpp
	$(CPP) -c src/Client.cpp

Owner.o: src/Owner.cpp
	$(CPP) -c src/Owner.cpp

Person.o: src/Person.cpp
	$(CPP) -c src/Person.cpp

Pet.o: src/Pet.cpp
	$(CPP) -c src/Pet.cpp

Animal.o: src/Animal.cpp
	$(CPP) -c src/Animal.cpp

clean:
	rm *.o tyra
