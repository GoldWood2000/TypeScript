enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}


function foo(direction: Direction) {
    switch (direction) {
        case Direction.LEFT:
            
            break;
        case Direction.RIGHT:
            
                break;
        case Direction.TOP:
            
            break; 
        case Direction.BOTTOM:
            
            break;
        default:
            //never应用
            const n: never = direction;
            break;
    }
}

foo(Direction.LEFT)


export {}