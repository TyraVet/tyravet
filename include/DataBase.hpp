#pragma once

#include <string>
#include <pqxx/pqxx>

template<typename T>
class DataBase{
	public:
		DataBase() : connected(false) {}
		virtual ~DataBase(){}

		void connect(const std::string& server, const std::string& user,
					 const std::string& password, const std::string& database){
			dataBaseEngine.connect(server, user, password, database);
			connected = true;
		}

	private:
		T dataBaseEngine;
		bool connected;
};
