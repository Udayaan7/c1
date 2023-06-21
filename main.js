song = "";
leftWristX = 0;
leftWristY = 0;
RightWristX = 0;
RightWristY = 0;


function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function gotPoses(results){
    if(results.length > 0){
      console.log(results);

      leftWristX = results[0].pose.leftWristX;
      leftWristY = results[0].pose.leftWristY;
      console.log("leftWristX = " + leftWristX  + "leftWristY" + leftWristY);

      RightWristX = results[0].pose.rightWristX;
      RightWristY = results[0].pose.rightWristY;
      console.log("RightWristX = " + RightWristX  + "RightWristY" + RightWristYss);
    }
}

