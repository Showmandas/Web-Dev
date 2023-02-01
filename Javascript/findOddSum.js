function findOddSum(nums){
    // let sum=0
    let oddnum=[]
    for(let i=0;i<nums.length;i++){
        const index=i
        const elem=nums[index]
        if(elem % 2 === 1){
            // sum=sum+nums[i]
            console.log(elem)
            oddnum.push(elem)
        }
    }
    // return nums[i]

    // return sum;

}

var numbers=[5, 7, 8, 10, 45, 30];
console.log(numbers)