function multiplication(n)
{
    result=0;
        for(var i = 1 ; i <= n ; i++)
        {
            for(var j = 1 ; j <= n ; j++)
            {
                result = i * j;
                console.log('i * j = '+result+' ');
            }
            j = 1;
        }
}

console.log('multiplication(20)='+multiplication(20));