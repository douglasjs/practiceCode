//391. Perfect Rectangle
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
 var isRectangleCover = function(rectangles) {
    const corners = new Set()

    let left = Infinity
    let right = 0
    let top = 0
    let bot = Infinity
    let area = 0

    const trackItem = ( x, y ) => x + ( y === 0 ? 0 : .1 / y )
    const track = ( x, y ) => {
        const n = trackItem( x, y )

        if ( corners.has( n ) ) {
            corners.delete( n )
        } else {
            corners.add( n )
        }
    }
    
    for ( let i = 0; i < rectangles.length; i++ ) {
        const [ x1, y1, x2, y2 ] = rectangles[ i ]
        
        left = Math.min( left, x1 )
        top = Math.max( top, y2 )
        right = Math.max( right, x2 )
        bot = Math.min( bot, y1 )
        
        area += ( x2 - x1 ) * ( y2 - y1 )

        track( x1, y1 )
        track( x1, y2 )
        track( x2, y1 )
        track( x2, y2 )
    }

    const compare = (top, bot, right, left ) => {
        return area === ( top - bot ) * ( right - left )
        && 4 === corners.size
        && corners.has( trackItem( left, bot ) )
        && corners.has( trackItem( right, bot ) )
        && corners.has( trackItem( left, top ) )
        && corners.has( trackItem( right, top ) )

    }

    return compare(top, bot, right, left );
};


var testPerformace = ( msg ,func) =>{
    var t0 = new Date();
    console.log(msg + func);
    var t1 = new Date();
    console.log("took " + (t1.getTime()  - t0.getTime() ) + " milliseconds.")
}

testPerformace("Exp1. ", isRectangleCover([
    [1,1,3,3],
    [3,1,4,2],
    [3,2,4,4],
    [1,3,2,4],
    [2,3,3,4]]));

testPerformace("Exp2. ", isRectangleCover([
    [1,1,2,3],
    [1,3,2,4],
    [3,1,4,2],
    [3,2,4,4]
    ]));

testPerformace("Exp3. ", isRectangleCover([
    [1,1,3,3],
    [3,1,4,2],
    [1,3,2,4],
    [3,2,4,4]
    ]));

testPerformace("Exp4. ", isRectangleCover([
    [1,1,3,3],
    [3,1,4,2],
    [1,3,2,4],
    [2,2,4,4]
]));