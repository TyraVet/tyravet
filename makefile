CC = g++
STD = -std=c++17
OBJ = -c
WARN = -Wall
LINKER_NCURSES = -lncurses
LINKER_PQXX = -lpqxx -lpq
OBJS = src/main.cpp Tyra.o Owner.o Person.o Pet.o Animal.o
OBJ_NAME_RELEASE = tyra
OBJ_NAME_DEBUG = tyra-debug

# Multiple executables
.TYRA: all release debug
all: release debug
release: $(OBJ_NAME_RELEASE)
debug: $(OBJ_NAME_DEBUG)

# Release
$(OBJ_NAME_RELEASE): $(OBJS)
	$(CC) $(STD) $(WARN) $(OBJS) $(LINKER_NCURSES) -o $(OBJ_NAME_RELEASE)

# Debug
$(OBJ_NAME_DEBUG): $(OBJS)
	$(CC) $(STD) -g $(WARN) $(OBJS) $(LINKER_NCURSES) -o $(OBJ_NAME_DEBUG)

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
