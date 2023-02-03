function lowest_num(nums){
    let lowest=nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i]<lowest){
            lowest=nums[i]
        }

    }
    return lowest
}

var arr=[20,4,5,8,10,3]
console.log("Lowest Number is:",lowest_num(arr))