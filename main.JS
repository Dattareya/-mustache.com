nosex=0;
nosey=0;
function preload()
{
  nose=loadImage("https://img.favpng.com/10/15/0/handlebar-moustache-cartoon-clip-art-png-favpng-khXHz0cyUWyhtq2vA0XxC0Dfw.jpg");
}
function draw()
{
  image(video,0,0,300,300);
  image(nose,nosex,nosey,30,30);
}
function setup()
{
  canvas=createCanvas(300,300) ;
  canvas.center();
  
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  posenet=ml5.poseNet(video,modelloaded);
  posenet.on("pose",gotresults);
}
function modelloaded()
{
    console.log("modelloaded");
}
function takephoto()
{
    save("photo.png");
}
function gotresults(results)
{
  if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-15;
    nosey=results[0].pose.nose.y-15;

  }
}