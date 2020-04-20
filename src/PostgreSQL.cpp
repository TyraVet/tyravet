#include <iostream>
#include <exception>
#include <pqxx/pqxx>
#include "../include/PostgreSQL.hpp"

PostgreSQL::PostgreSQL(){}
PostgreSQL::~PostgreSQL(){}

pqxx::connection PostgreSQL::connect(const std::string& server, const std::string& user,
						const std::string& password, const std::string& database){
	std::string urlConnection = "postgresql://" + user + ":" + password + "@" + server + "/" + database;
	pqxx::connection connection;
	try{
		pqxx::connection connection(urlConnection);
	}catch(std::exception const& e){
		std::cerr << e.what() << std::endl;
	}
	return connection;
}

void PostgreSQL::execute(std::string& sql, pqxx::connection connection){
	try{
		connection.prepare("test", sql);
		pqxx::work work(connection);
		work.commit();
	}catch(std::exception const& e){
		std::cout << e.what() << std::endl;
	}
}

void PostgreSQL::close(pqxx::connection connection){ connection.close(); }
