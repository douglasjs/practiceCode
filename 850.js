//850. Rectangle Area II
/**
 * @param {number[][]} rectangles
 * @return {number}
 */

var rectangleArea = function(rectangles) {
    
    let arrylenth = rectangles.length;
    let xSpace = Array(arrylenth * 2).fill(0);
    let ySpace = Array(arrylenth * 2).fill(0);
    for (let i = 0; i < arrylenth; ++i) {
        xSpace[i * 2 + 0] = rectangles[i][0];
        ySpace[i * 2 + 0] = rectangles[i][1];
        xSpace[i * 2 + 1] = rectangles[i][2];
        ySpace[i * 2 + 1] = rectangles[i][3];
    }
    xSpace.sort((a,b)=>a-b);
    ySpace.sort((a,b)=>a-b);
    let xSpaceSize = 0, ySpaceSize = 0;
    for (let i = 0; i < 2 * arrylenth; ++i) {
        if (i == 0 || xSpace[i] != xSpace[i - 1]) {
            xSpace[xSpaceSize++] = xSpace[i];
        }
    }
    for (let i = 0; i < 2 * arrylenth; ++i) {
        if (i == 0 || ySpace[i] != ySpace[i - 1]) {
            ySpace[ySpaceSize++] = ySpace[i];
        }
    }
    let areaNum = 0;
    for (let i = 0; i + 1 < xSpaceSize; ++i) {
        for (let j = 0; j + 1 < ySpaceSize; ++j) {
            let x0 = xSpace[i], x1 = xSpace[i + 1];
            let y0 = ySpace[j], y1 = ySpace[j + 1];
            for (let k = 0; k < arrylenth; ++k) {
                if (rectangles[k][0] <= x0 &&
                    x1 <= rectangles[k][2] && 
                    rectangles[k][1] <= y0 && 
                    y1 <= rectangles[k][3]) 
                {
                    areaNum += (x1 - x0) * (y1 - y0);
                    areaNum %= 1000000007;
                    break;
                }
            }
        }
    }
    
    return areaNum;
};


var testPerformace = ( msg ,func) =>{
    var t0 = new Date();
    console.log(msg + func);
    var t1 = new Date();
    console.log("took " + (t1.getTime()  - t0.getTime() ) + " milliseconds.")
}

testPerformace("Exp1. ", rectangleArea([[0,0,2,2],[1,0,2,3],[1,0,3,1]]));
testPerformace("Exp2. ", rectangleArea([[0,0,1000000000,1000000000]]));