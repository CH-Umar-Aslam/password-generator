#include <iostream>
using namespace std;
void glassesMoves(char glasses[], int size, int& moves) {
    int n = size / 2;
    int pivot = n;

    char result[size];

    for (int i = 0; i < n; ++i) {
        result[i * 2] = glasses[i];
        result[i * 2 + 1] = glasses[pivot + i];
    }

    moves = 0;
    for (int i = 0; i < size; ++i) {
        if (glasses[i] != result[i]) {
            moves++;
        }
    }

    for (int i = 0; i < size; ++i) {
        glasses[i] = result[i];
    }
}

int main() {
    char glasses[] = {'F', 'F', 'F' ,'F','F','E', 'E', 'E','E','E'};
    int size = sizeof(glasses) / sizeof(glasses[0]);
    int moves = 0;

  
    cout << "Initial arrangement after " << moves << " moves: ";
    for (int i = 0; i < size; ++i) {
        cout << glasses[i] << "-";
    }

    glassesMoves(glasses, size, moves);


      cout << "Final arrangement: ";
    for (int i = 0; i < size; ++i) {
        cout << glasses[i] << "-";
    }
    cout << endl;
    cout << endl;

    return 0;
}
