function reversed(txt){
    let rev=''
for(let i=txt.length-1;i>=0;i--){
    const elem=txt[i]
    rev=rev+elem
    console.log(elem,rev)

}
return rev
}

var text='I am a bad boy'
console.log('reversed text: ',reversed(text))