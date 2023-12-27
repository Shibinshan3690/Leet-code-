
          
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




var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
        // If the length is even, return the average of the middle two elements
        const middle1 = mergedArray[length / 2 - 1];
        const middle2 = mergedArray[length / 2];
        return (middle1 + middle2) / 2;
    } else {
        // If the length is odd, return the middle element
        return mergedArray[Math.floor(length / 2)];
    }
};

// Example usage
const nums1 = [1, 3];
const nums2 = [2];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median);




