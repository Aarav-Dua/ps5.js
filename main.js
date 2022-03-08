function preload(){

}

function setup(){

    var Canvas = createCanvas(540, 380);
    Canvas.position(90, 300);

    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw(){


    fill(178, 34, 23);
triangle(40, 350, 500, 350, 270, 20 )

image(video, 150, 100, 240, 180);
tint(tintColor);


fill(34, 178, 23);
circle(40, 350, 60);
fill(34, 178, 23);
circle(40, 30, 60);
fill(34, 178, 23);
circle(500, 30, 60);
fill(34, 178, 23);
circle(500, 350, 60);



}

function take_snapshot(){

save('SUSpicious.png');
}

function apply_filter999(){

    tintColor = document.getElementById("INPUTARE").value;
}