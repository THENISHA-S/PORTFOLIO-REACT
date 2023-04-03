#include<bits/stdc++.h>
using namespace std;

int sorted(int arr[],int n)
{
    if(n==0 || n==1)
      return 1;
    if(arr[n-1]<arr[n-2])
      return 0;
    return sorted(arr,n-1);
}

int main()
{
    int arr[]={1,2,3,4,5};
    int n=sizeof(arr)/sizeof(arr[0]);
    if(sorted(arr,n))
    {
        cout<<"Sorted"<<endl;
    }
    else
    {
        cout<<"Not sorted"<<endl;
    }
    return 0;
}