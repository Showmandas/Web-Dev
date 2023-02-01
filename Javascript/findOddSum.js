function findOddSum(nums){
    var sum=0
    var oddnum=[]
    for(let i=0;i<nums.length;i++){
        var elem=nums[i]
        if(elem % 2 == 1){
            sum=sum+elem
            // oddnum.push(sum)
        }
    }
    console.log(sum)

    // return nums[i]

    // return sum;

}

var numbers=[5, 7, 8, 10, 45, 30];
findOddSum(numbers)