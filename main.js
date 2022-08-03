Webcam.set({
    width:350 ,
    height:300 , 
    image_format:'png' , 
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image_capture" src="'+data_uri+'">';
    })
}
console.log("ml5 version--" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KoMXk17ns/model.json" , modelLoaded);

function modelLoaded(){
    console.log("Model is loaded!");
}

function check(){
    img = document.getElementById("image_capture");
    classifier.classify(img , gotResult);
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }   else{
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

