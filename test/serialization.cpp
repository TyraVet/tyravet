#include <fstream>
#include <boost/archive/binary_oarchive.hpp>
#include <boost/archive/binary_iarchive.hpp>

class gps_position {
    private:
        friend class boost::serialization::access;
        template<class Archive>
        void serialize(Archive &ar, const unsigned int version){
            ar << degrees;
            ar << minutes;
            ar << seconds;
        }
        int degrees;
        int minutes;
        int seconds;

    public:
        gps_position(){};
        gps_position(int d, int m, float s) :
            degrees(d), minutes(m), seconds(s)
        {}
};

int main(){

    std::ofstream ofs("filename.dat", std::ios::binary);

    // class instance
    const gps_position g(35, 59, 24.567f);

    boost::archive::binary_oarchive oa(ofs);
    // write class instance to archive
    oa << g;
    // archive and stream closed when destructors are called

    return 0;
}
