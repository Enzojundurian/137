


img = "";
objects = [];
 
 
function preload()
 video = CreateVideo(video.mp4);
  video.hide();
 
function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}


  //objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  //document.getElementById("status").innerHTML = "Status: Detectando Objetos";

 

  function modelLoaded() {
    console.log("Modelo Carregado!")
    status = true;
  objectDetector.detect(video,gotResult)
  }
 
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
Objects = results;
}
function draw() {
  image(video, 0, 0, 380, 380);
  fill("#FF0000");
  text("Dog", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350 );
 
  fill("#FF0000");
  text("Cat", 320, 120);
  noFill();
  stroke("#FF0000");
  rect(300, 90, 270, 320 );
}
function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}
