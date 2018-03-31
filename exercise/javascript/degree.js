function degree(n)
{

    switch(Math.floor(n/10))
    {
        case 10:
        case 9:
        console.log('A');
        break;
        case 8:
        console.log('B');
        break;
        case 7:
        console.log('C');
        break;
        case 6:
        console.log('D');
        break;
        default:
        console.log('E');
        break;
    }
}

degree(77)