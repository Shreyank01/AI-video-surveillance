function setup() {
    canvas = createCanvas(450,350);
    canvas.center();
    
}

function preload() {
    video=createVideo("video.mp4");
    video.hide();
}
 function start() {
    object_detector =  ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Object : Detecting video...";
    
 }

 function modelLoaded() {
     console.log("Model Loaded!");
     video.loop();
    video.speed(1);
    video.volume(0);
 }

 function draw() {
     image(video,0,0,450,350);
 }
