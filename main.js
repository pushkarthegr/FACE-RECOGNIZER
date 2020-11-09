Webcam.set({
    width:310,
    height:280,
    image_format:'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function photo(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML = "<img src="+image+" class='photo' id='photos'>"
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Bll7ONOx-/model.json",conferm);
console.log("classifier is "+classifier);
function conferm(){
    console.log("model has lodded");
}

function check(){
    person = document.getElementById("photos");
    classifier.classify(person,results);
}
function results(error,result){
    if(error){
        console.log(error);
    }else if(result){
        console.log(result);
        document.getElementById("objectName").innerHTML = result[0].label;
        percentage = result[0].confidence.toFixed(3);
        percent = Math.round(percentage*100);
        document.getElementById("Accuracy").innerHTML = percent+"%";
    }
}