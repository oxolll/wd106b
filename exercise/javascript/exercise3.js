var score = 61;
if (score < 60)
console.log("不及格");
else console.log("及格");

i=1;
while (i<10)
{
console.log("i=",i);
i+=1;}
var sum = 1;
for(var i = 1 ; i<11 ; i++)
{
    sum = 1 * i * sum;
}
console.log(sum);


var i=1 , j=1,answer=0;
    for(i;i<10;i++)
    {
        for(j;j<10n;j++)
        {
            answer = i * j;
            console.log('i * j = '+answer+' ');
        }
        j=1;
    }

var base=0.001,contract=7,answer2=1;
while(1)
{
    answer2 = answer2 + base;
    if(answer2*answer2 >= contract )
    {
        console.log(answer2);
        break;
    }

}


