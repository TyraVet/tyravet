CPP= g++
STANDAR= -std=c++17
CFLAGS = `pkg-config --cflags --libs gtkmm-3.0`

tyra: src/main.cpp NotebookMain.o Client.o Owner.o Person.o Pet.o Animal.o
	$(CPP) $(STANDAR) src/main.cpp NotebookMain.o Client.o Owner.o Person.o Pet.o Animal.o $(CFLAGS) -o tyra

NotebookMain.o: src/NotebookMain.cpp
	$(CPP) $(STANDAR) -c src/NotebookMain.cpp $(CFLAGS)

Client.o: src/Client.cpp
	$(CPP) $(STANDAR) -c src/Client.cpp

Owner.o: src/Owner.cpp
	$(CPP) $(STANDAR) -c src/Owner.cpp

Person.o: src/Person.cpp
	$(CPP) $(STANDAR) -c src/Person.cpp

Pet.o: src/Pet.cpp
	$(CPP) $(STANDAR) -c src/Pet.cpp

Animal.o: src/Animal.cpp
	$(CPP) $(STANDAR) -c src/Animal.cpp

clean:
	rm *.o tyra
