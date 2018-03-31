function m357(a,b)
{
    console.log('===========m357(%d, %d)=============', a, b)
    for(a ; a <= b ; a++)
    {
        if(a % 3 === 0 || a % 5 === 0 || a % 7 === 0 )
        {
            console.log(a );
        }

    }
}

m357(6,99)

