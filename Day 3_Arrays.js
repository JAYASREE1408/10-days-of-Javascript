function getSecondLargest(nums) {
    // getting the maximum value  
    let max=0;  
    for(let i of nums){
        if(max<i){
            max=i;
        }
    } 
    let max1=0;
    for(let i of nums){
        if(max1<i && i<max){
            max1=i;
        }
    }
    return max1;
}
 

