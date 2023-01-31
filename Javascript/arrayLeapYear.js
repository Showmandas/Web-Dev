function findLeapYear(numbers) {
    let newleapArr=[]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 4 == 0) {
      console.log(numbers[i])
      newleapArr.push(numbers[i])
    }
  }
  return newleapArr;
}

var nums = [2023, 2024, 2025, 2028, 2030];
console.log(findLeapYear(nums));
