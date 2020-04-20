#pragma once

#include <string>

template<typename T>
class DataBase{
	public:
		DataBase();
		virtual ~DataBase();
		void setConnected(bool isConnected);
		bool getConnected();
		void setDataBaseEngine(T engine);
		T getDataBaseEngine();
		void connect(const std::string& server, const std::string& user,
						const std::string& password, const std::string& database);
		DataBase& operator<< (const std::string& sql);
	private:
		T dataBaseEngine;
		bool connected;
};
