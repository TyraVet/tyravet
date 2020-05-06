CC = g++
STD = -std=c++17
OBJ = -c
WARN = -Wall
LINKER_GTKMM = `pkg-config --cflags --libs gtkmm-3.0`
LINKER_PQXX = -lpqxx -lpq
LINKER_BOOST = -I/usr/local/boost_1_72_0
OBJS = src/main.cpp NotebookMain.o AddPet.o AddAppointment.o Tyra.o Owner.o Person.o Pet.o Animal.o
OBJ_NAME_RELEASE = tyra
OBJ_NAME_DEBUG = tyra-debug

# Multiple executables
.TYRA: all release debug
all: release debug
release: $(OBJ_NAME_RELEASE)
debug: $(OBJ_NAME_DEBUG)

# Release
$(OBJ_NAME_RELEASE): $(OBJS)
	$(CC) $(STD) $(WARN) $(OBJS) $(LINKER_BOOST) $(LINKER_PQXX) $(LINKER_GTKMM) -o $(OBJ_NAME_RELEASE)

# Debug
$(OBJ_NAME_DEBUG): $(OBJS)
	$(CC) $(STD) -g $(WARN) $(OBJS) $(LINKER_BOOST) $(LINKER_PQXX) $(LINKER_GTKMM) -o $(OBJ_NAME_DEBUG)

NotebookMain.o: src/NotebookMain.cpp
	$(CC) $(STD) $(OBJ) src/NotebookMain.cpp $(LINKER_GTKMM)

AddPet.o: src/AddPet.cpp
	$(CC) $(STD) $(OBJ) src/AddPet.cpp $(LINKER_GTKMM) $(LINKER_PQXX)

AddAppointment.o: src/AddAppointment.cpp
	$(CC) $(STD) $(OBJ) src/AddAppointment.cpp $(LINKER_GTKMM)

Tyra.o: src/Tyra.cpp
	$(CC) $(STD) $(OBJ) src/Tyra.cpp

Owner.o: src/Owner.cpp
	$(CC) $(STD) $(OBJ) src/Owner.cpp

Person.o: src/Person.cpp
	$(CC) $(STD) $(OBJ) src/Person.cpp

Pet.o: src/Pet.cpp
	$(CC) $(STD) $(OBJ) src/Pet.cpp

Animal.o: src/Animal.cpp
	$(CC) $(STD) $(OBJ) src/Animal.cpp

clean:
	rm *.o tyra tyra-debug
