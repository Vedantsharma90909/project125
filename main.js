noseX=0;
noseY=0;
left_wristX=0;
right_wristX=0;
difference=0;
function setup(){
     video = createCapture(VIDEO);
     video.size(550,550);

     canvas = createCanvas(550,550);
     canvas.position(560,150);
    
     posenet = ml5.poseNet(video,modelLoaded);
     posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX);
    }
}

function draw(){
    background("#FF5733");
    fill("#aa00ff");
    textSize(difference);
    text("Vedant",noseX,noseY);
    document.getElementById("square_side").innerHTML="Font size of your text is "+difference+"px";
}