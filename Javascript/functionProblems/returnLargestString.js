function largest_string(arr){
    var max_str=arr[0].length
    var max_arr=arr[0]
    for(let i=1;i<arr.length;i++){
       var max_str_len=arr[i].length
        if(max_str_len>max_str){
            max_arr=arr[i]
            max_str=max_str_len
        }
    }
    return max_arr

}

var names=['ina','cina','meena','tina','pina']
console.log(largest_string(names));