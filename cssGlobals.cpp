#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream file;
    file.open("globals.txt");

    // padding: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".p-" << i << " {\n\tpadding: "<< i << "px;\n}\n\n";
    }

    // padding top: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".pt-" << i << " {\n\tpadding-top: "<< i << "px;\n}\n\n";
    }

    // padding bottom: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".pb-" << i << " {\n\tpadding-bottom: "<< i << "px;\n}\n\n";
    }

    // padding left: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".pl-" << i << " {\n\tpadding-left: "<< i << "px;\n}\n\n";
    }

    // padding right: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".pr-" << i << " {\n\tpadding-right: "<< i << "px;\n}\n\n";
    }


// -------------------------------------------------------------


    // margin: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".m-" << i << " {\n\tmargin: "<< i << "px;\n}\n\n";
    }

    // margin top: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".mt-" << i << " {\n\tmargin-top: "<< i << "px;\n}\n\n";
    }

    // margin bottom: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".mb-" << i << " {\n\tmargin-bottom: "<< i << "px;\n}\n\n";
    }

    // padding left: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".ml-" << i << " {\n\tmargin-left: "<< i << "px;\n}\n\n";
    }

    // padding right: _
    for (int i = 1; i < 101; i++) {
        file << 
        ".mr-" << i << " {\n\tmargin-right: "<< i << "px;\n}\n\n";
    }

    
// -------------------------------------------------------------


    // width: _vw
    for (int i = 1; i < 101; i++) {
        file << 
        ".vw-" << i << " {\n\twidth: "<< i << "vw;\n}\n\n";
    }

     // height: _vh
    for (int i = 1; i < 101; i++) {
        file << 
        ".vh-" << i << " {\n\theight: "<< i << "vh;\n}\n\n";
    }


// -------------------------------------------------------------

    file << 
    ".frcc {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n}";
}