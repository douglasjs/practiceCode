//452. Minimum Number of Arrows to Burst BalloosecSt
/**
 * ArrowShots
 * @param {number[][]} points
 * @return {number}
 */

 var ArrowShots = function(points) {
    let compareArry = [];
    points.sort((x,y)=>x[0]-y[0]);
    for(let i = 0; i < points.length; i++){
        let newItem = points[i];
        if(compareArry.length === 0){
            compareArry.push(newItem);
        }else{
            let [firSt, firEnd] = compareArry[0];
            let [secSt, secEnd] = newItem;
            if(secSt <= firEnd){
                compareArry[0][0] = Math.max(firSt, secSt);
                compareArry[0][1] = Math.min(firEnd,secEnd);
            }else{
                compareArry.unshift(newItem);
            }
        }
    }
    return compareArry.length;
};

console.log("Exp1. " + ArrowShots([[10,16],[2,8],[1,6],[7,12]]));
console.log("Exp2. " + ArrowShots([[1,2],[3,4],[5,6],[7,8]]));
console.log("Exp3. " + ArrowShots([[1,2],[2,3],[3,4],[4,5]]));
console.log("Exp4. " + ArrowShots([[1,2]]));
console.log("Exp5. " + ArrowShots([[2,3],[2,3]]));