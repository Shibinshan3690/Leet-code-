// var nums = [2,7,11,15], target = 18

//1  function sun(nums,target){

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if(nums[i]+nums[j]==target){
//                 const index1=nums.indexOf(nums[i])
//                 const index2=nums.indexOf(nums[j])
//                 console.log([index1,index2])

//             }

//         }
//     }

// }

// sun(nums,target)

// var findMedianSortedArrays = function(nums1, nums2) {
//     const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
//     const length = mergedArray.length;

//     if (length % 2 === 0) {
//         // If the length is even, return the average of the middle two elements
//         const middle1 = mergedArray[length / 2 - 1];
//         const middle2 = mergedArray[length / 2];
//         return (middle1 + middle2) / 2;
//     } else {
//         // If the length is odd, return the middle element
//         return mergedArray[Math.floor(length / 2)];
//     }
// };

// // Example usage
// const nums1 = [1, 3];
// const nums2 = [2];
// const median = findMedianSortedArrays(nums1, nums2);
// console.log(median);

//   pallidoram

// const number=121;

// function palirom(number){
//       const string=number.toString();
//       const reverse=string.split("").reverse().join("");
//       return   string===reverse
// }
// const result =palirom(number)
// console.log(result);

// const  string="malayalam";

// function  palidrom(string){
//         const  reverse=string.split('').reverse().join("");
//         return   reverse===string;

// }

// const result=palidrom(string);

// console.log(result  ,`It Is The Plaidrom`);

// const romanNumerals = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// function romanInt(s) {
//   let result = 0;
//   for (i = 0; i < s.length; i++) {
//     const current = romanNumerals[s[i]];
//     const next = romanNumerals[s[i + 1]];
//     if (next && current < next) {
//       result -= current;
//     } else {
//       result += current;
//     }
//   }
//   return result;
// }
// console.log(romanInt("VXL"));

  
// const array = ["flower","flow","flight"];
//          for(var i=0;i<array.length;i++){
                                                 
//             for(var j=i+1;j<array.length;j++){
                    
//           const result=array[i]===array[j];
      
           
//         }
  
//    }


// //Open brackets must be closed by the same type of brackets.


// function isValid(s) {
//   const stack = [];

//   for (let char of s) {
//       if (char === '(' || char === '[' || char === '{') {
//           stack.push(char);
//       } else {
//           if (
//               (char ===')'&& stack.pop()!== '(') ||
//               (char ===']'&& stack.pop()!== '[') ||
//               (char ==='}'&& stack.pop()!== '{')
//           ) {
//               return false;
//           }
//       }
//   }
//   return stack.length === 0;
// }
// const input = "()[]{}";
// console.log(isValid(input));




// const array=[2,2,1,4,5,6];
//   const  arr1=array.reduce((x,y)=>x+y)
//   console.log(arr1)



 const array=[1,2,3,4,5];

    const  odd=array.filter((x)=>x%2==0)
        const realodd=odd;
        console.log(realodd);

        const even=array.filter((y)=>y%2==1);
            const realeven=even;
            console.log(realeven)

            const mix=realeven.concat(realodd);
            console.log(mix)