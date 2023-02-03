const names=['bul','kul','bul','chul','chul','babul','kabul','babul']

function rem_dup(names){
    const unique=[]
    for(let i=0;i<names.length;i++){
        const name=names[i]
        if(unique.includes(name) === false){
            unique.push(name)
        }
    }
    return unique

}

console.log(rem_dup(names));