#include<stdio.h>

int main(void)
{
	int input=0,answer=0;
	const int pi=3.14159;
	char a='no';
	printf("請輸入一個實數:");
	scanf("%d",&input);
	printf("請輸入C或S:");
	scanf("%c",&a);
	if(a=='S')
	{
		answer=input*input;
	}
	else if(a=='C')
		{
			answer=input*input*pi;
		}
	else printf("無效的指令");
	printf("%d",answer);
	
}