export function leet001(nums: number[], target: number): number[] {
    const list = [];
    const halfTarget = target / 2;
    let result = [];
    let objectiveNum, i;
  
    i = nums.length;
    for (i; i--;) {
      const numsI = nums[i];
      if (numsI === halfTarget) result.push(i);
      if (result.length === 2) return result;
        list[nums[i]] = i
    }

    i = nums.length;
    for (i; i--;) {
        objectiveNum = target - nums[i]
        if (list[objectiveNum] && list[objectiveNum] !== i) {
            result = [list[objectiveNum], i]
            break;
        }
    }

    return result
}

console.log(leet001([1, 2, 7, 9], 9))