left=0;
right=0;
diff=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,400);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#08c284');
    textSize(diff);
    fill("white");
    text('RESIZE',30,250);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left=results[0].pose.leftWrist.x;
        right=results[0].pose.rightWrist.x;
        diff=floor(left-right);
    }
}