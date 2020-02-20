#!/bin/bash

g++ -o tyra src/main.cpp src/classes/*.cpp `wx-config --libs` `wx-config --cppflags`
