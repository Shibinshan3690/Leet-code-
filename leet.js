

var nums = [2,7,11,15], target = 18

function sun(nums,target){

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i]+nums[j]==target){
                const index1=nums.indexOf(nums[i])
                const index2=nums.indexOf(nums[j])
                console.log([index1,index2])

            }
            
        }
    }


}

sun(nums,target)