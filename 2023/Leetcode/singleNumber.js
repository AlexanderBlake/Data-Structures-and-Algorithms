/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numsList = [];

    for (let i = 0; i < nums.length; i++)
    {
        if (!(numsList.includes(nums[i])))
        {
            numsList.push(nums[i]);
        }
        else
        {
            numsList.splice(numsList.indexOf(nums[i]), 1);
        }
    }
        
    return numsList[0];
};