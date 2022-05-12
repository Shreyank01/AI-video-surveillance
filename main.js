function setup() {
    canvas = createCanvas(450,350);
    canvas.center();
    
}

function preload() {
    video=createVideo("video.mp4");
    video.hide();
}
 function start() {
    objectDetector =  ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects...";
 }
Status = "";
object = [];


 function modelLoaded() {
     console.log("Model Loaded!");
     video.loop();
    video.speed(1);
    video.volume(0);
    Status = true;
 }

 function draw() {
     image(video,0,0,450,350);
     if(Status != "") {
         objectDetector.detect(video ,gotResult);

         for(i=0; i < object.length; i++ ) {
             document.getElementById("status").innerHTML = "Status : Objects Detected!";
             document.getElementById("num_of_objects_detected").innerHTML = "Total number Objects Detected are : " + object.length;

             percent = floor(object[i].confidence * 100);
             fill("red");
             text(object[i].label + " " + percent  + "%", object[i].x , object[i].y );
             noFill();
             stroke("red");
             rect(object[i].x , object[i].y , object[i].width , object[i].height);

         }
     }
     
 }

 function gotResult(error,results) {
     if(error) {
         console.error(error);
     }
     else {
         console.log(results);
         object = results;
     }
 }
