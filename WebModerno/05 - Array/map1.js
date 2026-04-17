const nums = [1, 2, 3, 4, 5, 6]

const nums2 = nums.map(function (num) {
    return num * 2
})

console.log(nums2)

const nums3 = nums.map(num => num * 2)
console.log(nums3)

const nums4 = nums.map(num => num * 2)
console.log(nums4)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${e}`

const nums5 = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(nums5)