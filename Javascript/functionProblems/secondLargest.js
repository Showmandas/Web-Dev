function secondLargest(nums){
  lar_num=nums[0]
  sec_lar_num=nums[0]
  for(let i=0;i<nums.length;i++){
    if(nums[i]>lar_num){
        sec_lar_num=lar_num
        lar_num=nums[i]    
    }else if(nums[i]>sec_lar_num){
        sec_lar_num=nums[i]
    }
  }
  return sec_lar_num
}

var arr=[2,3,4,5,16,9]
console.log(secondLargest(arr))