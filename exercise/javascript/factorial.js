function factorial(n)
{
    let result=1;
    for(let i=1 ; i<n ; i++)
    {
        result = result * i;
    }
    return result;
}

console.log('function(10)='+factorial(10));