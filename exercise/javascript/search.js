function find(array, item)
{
    for(let i=0;i<array.length;i++ )
    {
        if(item === array[i]) return i
    }
    return -1
}

let idx = find([1,4,5,8,9,6], 9)
console.log('idx='+idx)