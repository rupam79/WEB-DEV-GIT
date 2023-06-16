#include<iostream>
#include<math.h>
using namespace std;
int main(){
    int num=4,bit=0,rem=0,i=0;
    while(num>0){
        rem=num%2;
        num=num/2;
        bit=bit+(pow(10,i)*rem);
        i++;
    }
    cout<<bit;
}