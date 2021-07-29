var ball,database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";



    var ballref=database.ref('ball/position');
    ballref.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
    position=data.val();
    console.log(position.x);
    ball.position.x=position.x;
    ball.position.y=position.y;

}



function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
