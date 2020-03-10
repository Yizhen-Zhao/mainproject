
//load data as array
data =JSON.parse(data);

for(var i = 0; i < data.length; i++){
    if(parseInt(data[i]['pitch']) >=30){
        data[i]['pitch'] = '29';
    } 
    if(parseInt(data[i]['pitch']) < -30){
        data[i]['pitch'] = '-30';
    }
    if(parseInt(data[i]['yaw']) < -50){
        data[i]['yaw'] = '-50';
    }
    if(parseInt(data[i]['yaw']) >= 90){
        data[i]['yaw'] = '89';
    }
    if(parseInt(data[i]['roll']) < -50){
        data[i]['roll'] = '-50';
    }
    if(parseInt(data[i]['roll']) >= 40){
        data[i]['roll'] = '39';
    }
    if(data[i]['happy'] >= 100){
        data[i]['happy'] = 99;
    }
    if(data[i]['neutral'] >= 100){
        data[i]['neutral'] = 99;
    }
    if(data[i]['sadness'] >= 100){
        data[i]['sadness'] = 99;
    }
    data[i]['age'].toString();

    data[i]['happy'].toString();
    data[i]['sadness'].toString();
    data[i]['neutral'].toString();
}

var showArea = document.getElementById("showArea");
var painting = document.getElementById("painting");
var areaCircle = document.querySelectorAll(".areaCircle");
var genderCircle = document.querySelectorAll(".genderCircle");
var eyesCircle = document.querySelectorAll(".eyesCircle");
var mouthCircle = document.querySelectorAll(".mouthCircle");
var smileCircle = document.querySelectorAll(".smileCircle");

document.getElementById('totalPaintings').textContent = data.length;
document.getElementById('selectedPaintings').textContent = data.length;
//age above 60, delete
var selectedDict = {"areas": ["North", "South", "Europe"], 
                    "gender": ["Female", "Male"],
                    "age":['0', '10', '20', '30', '40','50', '60','70','80','90'],
                    "yaw": ['-50','-40','-30','-20','-10','0','10','20','30','40', '50', '60','70','80','90'],
                    "pitch":['-30', '-20', '-10', '0', '10','20'],
                    "roll": ['-50','-40','-30','-20','-10','0','10','20','30','40'],
                    "eyes":["open", "closed"],
                    "mouth":["openm", "closedm"],
                    "smile":["yes", "no"],
                    "happy": ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
                    "neutral": ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
                    "sadness": ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90']};


//show all painting in show area

showAll();
chooseAreaButton();
chooseGenderButton();
chooseEyesButton();
chooseMouthButton();
chooseSmileButton();
//function to show one painting
function showOne(data){
    var newDiv = document.createElement("div");
    newDiv.className = 'paintingdiv';
    newDiv.id = data['Artist']+' '+data['Title'];
    newDiv.style.width = '200px';
    var img = document.createElement("img");
    img.style.width = '180px';
    img.src = data['url'];
    img.className = 'painting';
    img.id = data['Title'];
    img.style.display = 'inline';
    newDiv.appendChild(img);
    document.getElementById('showArea').appendChild(newDiv);
}
// Click on img to get original pic
$("img").click(function(){location.href = $(this).attr('src');});

//function to show selected paintings
function showSelected(selectedDict){
    const myNode = document.getElementById("showArea");
    myNode.innerHTML = '';
    var number = 0;
    for(var i = 0; i < data.length; i ++){
        var tmparea = selectedDict['areas'].includes(data[i]['area']);
        var tmpgender = selectedDict['gender'].includes(data[i]['gender']);
        var age = Math.floor(parseInt(data[i]['age'])/10)*10;
        var tmpage = selectedDict['age'].includes(age.toString());
        var tmpeyes = selectedDict['eyes'].includes(data[i]['eyes']);
        var tmpmouth = selectedDict['mouth'].includes(data[i]['mouth']);
        var tmpsmile = selectedDict['smile'].includes(data[i]['smile']);
        var yaw = Math.floor(parseInt(data[i]['yaw'])/10)*10;
        var tmpyaw = selectedDict['yaw'].includes(yaw.toString());
        var pitch = Math.floor(parseInt(data[i]['pitch'])/10)*10;
        var tmppitch = selectedDict['pitch'].includes(pitch.toString());
        var roll = Math.floor(parseInt(data[i]['roll'])/10)*10;
        var tmproll = selectedDict['roll'].includes(roll.toString());
        var happy = Math.floor(parseInt(data[i]['happy'])/10)*10;
        var tmphappy = selectedDict['happy'].includes(happy.toString());
        var neutral = Math.floor(parseInt(data[i]['neutral'])/10)*10;
        var tmpneutral = selectedDict['neutral'].includes(neutral.toString());
        var sadness = Math.floor(parseInt(data[i]['sadness'])/10)*10;
        var tmpsadness = selectedDict['sadness'].includes(sadness.toString());
        if(tmparea && tmpgender && tmpage && tmpyaw && tmppitch && tmproll && tmpeyes && tmpmouth && tmpsmile && tmphappy && tmpneutral && tmpsadness){
            
            showOne(data[i]);
            number = number + 1;
            }
               
    }
    document.getElementById('selectedPaintings').textContent = number;
}
//function to show all painting in show area
function showAll(){
    for(var i = 0; i < data.length; i ++){
        showOne(data[i]);
    }
    drawAgeLine();
    drawYawLine();
    drawPitchLine();
    drawRollLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}

/*
function reset(clicked_id){
    selectedDict = {"areas": ["North", "South", "Europe"], 
                    "gender": ["Female", "Male"],
                    "age":['0', '10', '20', '30', '40','50', '60','70','80','90'],
                    "yaw": ['-50','-40','-30','-20','-10','0','10','20','30','40', '50', '60','70','80','90'],
                    "pitch":['-30', '-20', '-10', '0', '10','20'],
                    "roll": ['-50','-40','-30','-20','-10','0','10','20','30','40'],
                    "eyes":["open", "closed"],
                    "mouth":["openm", "closedm"],
                    "smile":["yes", "no"],
                    "happy": ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
                    "neutral": ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
                    "sadness": ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90']};
    
    areaCircle.reset();
    genderCircle.reset();
    eyesCircle.reset();
    mouthCircle.reset();
    smileCircle.reset();
    document.getElementById('happyPath').reset();
    document.getElementById('neutralPath').reset();
    document.getElementById('sadnessPath').reset();
    document.getElementById('totalPaintings').textContent = data.length;
    document.getElementById('selectedPaintings').textContent = data.length;
    showAll();
}
*/
//function to choose area
function chooseAreaButton(){
    for(var i = 0; i < areaCircle.length; i++){
        areaCircle[i].addEventListener("click", function(){
            for(var i = 0; i < areaCircle.length; i++){
                areaCircle[i].classList.remove("selected");
            }
            this.classList.add("selected");          
        });
    }
}
//function to choose gender
var flag_g ='';
function chooseGenderButton(){
    for(var i = 0; i < genderCircle.length; i++){
        genderCircle[i].addEventListener("click", function(){
            if (this.id != flag_g) {
                for(var i = 0; i < genderCircle.length; i++){
                genderCircle[i].classList.remove("selected");
                }            
                //console.log(this);
                flag_g = this.id;
                this.classList.add("selected");    
            } 
            else {
                this.classList.remove("selected");
                flag_g = '';
            }
      
        });
    }
}

//function to choose eyes
var flag_e = '';
function chooseEyesButton(){
    for(var i = 0; i < eyesCircle.length; i++){
        eyesCircle[i].addEventListener("click", function(){
            if (this.id != flag_e) {
                for(var i = 0; i < eyesCircle.length; i++){
                eyesCircle[i].classList.remove("selected");
                }            
                //console.log(this);
                flag_e = this.id;
                this.classList.add("selected");    
            } 
            else {
                this.classList.remove("selected");
                flag_e = '';
            }

        });
    }
}
//function to choose mouth
var flag_m = '';
function chooseMouthButton(){
    for(var i = 0 ; i < mouthCircle.length; i++){
        mouthCircle[i].addEventListener("click", function(){
            if (this.id != flag_m) {
                for(var i = 0; i < mouthCircle.length; i++){
                    mouthCircle[i].classList.remove("selected");
                }
                //console.log(this);
                flag_m = this.id;
                this.classList.add("selected");
                }
            else{
                this.classList.remove("selected");
                flag_m = '';
            }
        });
    }
}
//function to choose smile
var flag_s = '';
function chooseSmileButton(){
    for(var i = 0 ; i < smileCircle.length; i++){
        smileCircle[i].addEventListener("click", function(){
            if (this.id != flag_s) {
                for(var i = 0; i < smileCircle.length; i++){
                    smileCircle[i].classList.remove("selected");
                }
                //console.log(this);
                flag_s = this.id;
                this.classList.add("selected");
                }
            else{
                this.classList.remove("selected");
                flag_s = '';
            }
        });
    }
}

//function to click area button and reply
function reply_click_area(clicked_id){
    /*
    for(var i = 0; i < data.length; i++){
        
        if(data[i]['area'] != clicked_id && document.getElementById(data[i]['Title']) != null){
            //console.log(document.querySelectorAll('#'+data[i]['Title']));
            document.getElementById(data[i]['Artist']+' '+data[i]['Title']).remove();        
        }
        
        if(data[i]['area'] == clicked_id && document.getElementById(data[i]['Title']) == null){
            showOne(data[i]);
        }
    }
    */
    selectedDict['areas'] = [clicked_id];
    //console.log(selectedDict);
    showSelected(selectedDict);
    drawPitchLine();
    drawYawLine();
    drawRollLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}
//function to click gender button and reply
function reply_click_gender(clicked_id){
    if (flag_g =='') {
        selectedDict['gender'] = [clicked_id];
        showSelected(selectedDict);
    } else {
        selectedDict['gender'] = ["Female", "Male"];
        showSelected(selectedDict);
    }
    showSelected(selectedDict);
    drawPitchLine();
    drawYawLine();
    drawRollLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}
//function to click eyes button and reply
function reply_click_eyes(clicked_id){
    if (flag_e =='') {
        selectedDict['eyes'] = [clicked_id];
        showSelected(selectedDict);
    } else {
        selectedDict['eyes'] = ["open", "closed"];
        showSelected(selectedDict);
    }
    //console.log(selectedDict);
    showSelected(selectedDict);
    drawPitchLine();
    drawYawLine();
    drawRollLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}
//function to click mouth button and reply
function reply_click_mouth(clicked_id){
    if (flag_m=='') {
            selectedDict['mouth'] = [clicked_id];
            showSelected(selectedDict);
    }
    else{
        selectedDict['mouth'] = ["openm", "closedm"];
        showSelected(selectedDict);
    }
    //console.log(selectedDict);
    showSelected(selectedDict);
    drawPitchLine();
    drawYawLine();
    drawRollLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}

//function to click smile button and reply
function reply_click_smile(clicked_id){
    if (flag_s=='') {
        selectedDict['smile'] = [clicked_id];
        showSelected(selectedDict);
}
else{
    selectedDict['smile'] = ["yes", "no"];
    showSelected(selectedDict);
}
    //console.log(selectedDict);
    showSelected(selectedDict);
    drawPitchLine();
    drawYawLine();
    drawRollLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}

//svg for age
svgContainer = d3.select("#ageSvg");
//make the rectangle 
for(var i = 0; i < 10; i++){
    svgContainer.append("rect")
        .attr('id', i * 10)
        .attr('fill-opacity','0')
        .attr('class', 'agerect')
        .attr("x", i * 15)
        .attr("y", 20)
        .attr("width", 15)
        .attr("height", 90)
        .attr('fill', '#444444')
        .attr('onclick','reply_click_age(this.id)');
    svgContainer.append("text")
        .attr("x", i * 15)
        .attr("y", 6)
        .attr("font-size", "12px")
        .attr("opacity", 0)
        .attr("dy", ".35em")
        //.attr('opacity', 0)
        .text(function(){return (i * 10) + " to " + (i * 10 + 10);})
        .on("mouseover", mouseOver)
        .on("mousemove", mouseOver)
        .on("mouseout", mouseOut);
}
//function to show mouseover text
function mouseOver(){
    d3.select(this)
      .style("opacity", 0.9);
}
function mouseOut(){
    d3.select(this)
      .style("opacity", 0);
}
var ageRect = document.querySelectorAll('.agerect');
//console.log(yawRect[0].id);
chooseAgeRect(ageRect);
//function to click yaw button and reply
function reply_click_age(clicked_id){

    var age_rects = document.getElementsByClassName('agerect');
    for (var i =0; i<age_rects.length;i++)
    {
        var id = age_rects[i].getAttribute('id');
        if(id == clicked_id)
        {age_rects[i].setAttribute('fill-opacity','50%')}
        else{age_rects[i].setAttribute('fill-opacity','0');}
        
    }

    selectedDict['age'] = [clicked_id];
    //console.log(selectedDict['age']);
    //document.getElementById('agePath').style.visibility = "hidden";
    showSelected(selectedDict);
    drawYawLine();
    drawRollLine();
    drawPitchLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}
//function to choose age
function chooseAgeRect(ageRect){
    for(var i = 0; i < ageRect.length; i++){
        ageRect[i].addEventListener("click", function(){
            for(var i = 0; i < ageRect.length; i++){
                ageRect[i].classList.remove("selected");
            }
            this.classList.add("selected");        
        });
    }
}

//function to draw line in age area
function drawAgeLine(){
    points = getAgePoints();
    for(var i = 0; i < points.length; i++){
        //need to change with large data
        points[i][1] = 100 - points[i][1];
    }
    //console.log(points);
    //console.log(points);
    var lineGenerator = d3.line()
                        .curve(d3.curveCardinal);

    var pathData = lineGenerator(points);

    d3.select('#agePath')
        .attr('d', pathData);
}

function getAgePoints(){
    if(selectedDict['age'].length == 1){
        return [];
    }
    var points = [[0, 0],[15, 0], [30, 0], [45, 0], [60, 0], [75, 0], [90, 0],
                 [105, 0], [120, 0], [135, 0], [150, 0]];
    for(var i = 0; i < data.length; i ++){
        var tmparea = selectedDict['areas'].includes(data[i]['area']);
        var tmpgender = selectedDict['gender'].includes(data[i]['gender']);
        var age = Math.floor(parseInt(data[i]['age'])/10)*10;
        var tmpeyes = selectedDict['eyes'].includes(data[i]['eyes']);
        var tmpmouth = selectedDict['mouth'].includes(data[i]['mouth']);
        var tmpsmile = selectedDict['smile'].includes(data[i]['smile']);
        var yaw = Math.floor(parseInt(data[i]['yaw'])/10)*10;
        var tmpyaw = selectedDict['yaw'].includes(yaw.toString());
        var pitch = Math.floor(parseInt(data[i]['pitch'])/10)*10;
        var tmppitch = selectedDict['pitch'].includes(pitch.toString());
        var roll = Math.floor(parseInt(data[i]['roll'])/10)*10;
        var tmproll = selectedDict['roll'].includes(roll.toString());
        var happy = Math.floor(parseInt(data[i]['happy'])/10)*10;
        var tmphappy = selectedDict['happy'].includes(happy.toString());
        var neutral = Math.floor(parseInt(data[i]['neutral'])/10)*10;
        var tmpneutral = selectedDict['neutral'].includes(neutral.toString());
        var sadness = Math.floor(parseInt(data[i]['sadness'])/10)*10;
        var tmpsadness = selectedDict['sadness'].includes(sadness.toString());
        if(age >= 100){
            continue;
        }
        if(tmparea && tmpgender && tmpyaw && tmproll && tmppitch && tmpeyes && tmpmouth && tmpsmile && tmphappy && tmpneutral && tmpsadness){
            //need to change with large data
            //console.log(age);
            points[age/10][1] = points[age/10][1] + 1;
        }        
    }
    return points;
}


//svg for yaw
var svgContainer = d3.select("#yawSvg");
//make the rectangle 
for(var i = 0; i < 15; i++){
    svgContainer.append("rect")
        .attr('id', i * 10 - 50)
        .attr('class', 'yawrect')
        .attr("x", i * 15)
        .attr("y", 20)
        .attr("width", 10)
        .attr("height", 80)
        .attr('fill-opacity','0%')
        .attr('fill', '#444444')
        .attr('onclick','reply_click_yaw(this.id)');
    svgContainer.append("text")
        .attr("x", i * 15)
        .attr("y", 6)
        .attr("font-size", "12px")
        .attr("opacity", 0)
        .attr("dy", ".35em")
        //.attr('opacity', 0)
        .text(function(){return (i * 10 - 50) + " to " + (i * 10 - 40);})
        .on("mouseover", mouseOver)
        .on("mousemove", mouseOver)
        .on("mouseout", mouseOut);
}
var yawRect = document.querySelectorAll('.yawrect');
//console.log(yawRect[0].id);
chooseYawRect(yawRect);
//function to click yaw button and reply
function reply_click_yaw(clicked_id){
    //console.log(clicked_id);
    var yaw_rects = document.getElementsByClassName('yawrect');
    for (var i =0; i<yaw_rects.length;i++)
    {
        var id = yaw_rects[i].getAttribute('id');
        if(id == clicked_id)
        {yaw_rects[i].setAttribute('fill-opacity','50%')}
        else{yaw_rects[i].setAttribute('fill-opacity','0');}
        
    }

    selectedDict['yaw'] = [clicked_id];
    //document.getElementById('yawPath').style.visibility = "hidden";
    showSelected(selectedDict);
    drawPitchLine();
    drawRollLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}
//function to choose yaw
//console.log(document.querySelectorAll('.yawrect')[0].id);
function chooseYawRect(yawRect){
    for(var i = 0; i < yawRect.length; i++){
        yawRect[i].addEventListener("click", function(){
            for(var i = 0; i < yawRect.length; i++){
                yawRect[i].classList.remove("selected");
            }
            this.classList.add("selected");        
        });
    }
}
//function to draw line in yaw area
function drawYawLine(){
    points = getYawPoints();
    //console.log(getYawPoints());
    for(var i = 0; i < points.length; i++){
        points[i][1] = 100 - points[i][1];
    }
    //console.log(points);
    //console.log(points);
    var lineGenerator = d3.line()
                        .curve(d3.curveCardinal);

    var pathData = lineGenerator(points);

    d3.select('#yawPath')
        .attr('d', pathData);
}
//function to get points in pitch area after any button clicked
function getYawPoints(){
    if(selectedDict['yaw'].length == 1){
        return [];
    }
    var points = [[0, 0],[10, 0],[20, 0], [30, 0], [40, 0], [50, 0],[60, 0], [70, 0], [80, 0], [90, 0],
                 [100, 0], [110, 0], [120, 0], [130, 0], [140, 0], [150, 0]];
    for(var i = 0; i < data.length; i ++){
        var tmparea = selectedDict['areas'].includes(data[i]['area']);
        var tmpgender = selectedDict['gender'].includes(data[i]['gender']);
        var age = Math.floor(parseInt(data[i]['age'])/10)*10;
        var tmpage = selectedDict['age'].includes(age.toString());
        var tmpeyes = selectedDict['eyes'].includes(data[i]['eyes']);
        var tmpmouth = selectedDict['mouth'].includes(data[i]['mouth']);
        var tmpsmile = selectedDict['smile'].includes(data[i]['smile']);
        var yaw = Math.floor(parseInt(data[i]['yaw'])/10)*10;
        var pitch = Math.floor(parseInt(data[i]['pitch'])/10)*10;
        var tmppitch = selectedDict['pitch'].includes(pitch.toString());
        var roll = Math.floor(parseInt(data[i]['roll'])/10)*10;
        var tmproll = selectedDict['roll'].includes(roll.toString());
        var happy = Math.floor(parseInt(data[i]['happy'])/10)*10;
        var tmphappy = selectedDict['happy'].includes(happy.toString());
        var neutral = Math.floor(parseInt(data[i]['neutral'])/10)*10;
        var tmpneutral = selectedDict['neutral'].includes(neutral.toString());
        var sadness = Math.floor(parseInt(data[i]['sadness'])/10)*10;
        var tmpsadness = selectedDict['sadness'].includes(sadness.toString());
        if(yaw < -50 || yaw >= 90){
            continue;
        }
        if(tmparea && tmpgender && tmpage && tmppitch && tmproll && tmpeyes && tmpmouth && tmpsmile && tmphappy && tmpneutral && tmpsadness){
            //need to change with large data
            points[yaw / 10 + 5][1] = points[yaw / 10 + 5][1] + 1;
        }        
    }
    return points;
}

//svg for pitch
svgContainer = d3.select("#pitchSvg");
//make the rectangle 
for(var i = 0; i < 6; i++){
    svgContainer.append("rect")
        .attr('id', i * 10 - 30)
        .attr('class', 'pitchrect')
        .attr("x", i * 25)
        .attr("y", 13)
        .attr("width", 25)
        .attr("height", 90)
        .attr('fill-opacity','0%')
        .attr('fill', '#444444')
        .attr('onclick','reply_click_pitch(this.id)');
    svgContainer.append("text")
        .attr("x", i * 25)
        .attr("y", 6)
        .attr("font-size", "12px")
        .attr("opacity", 0)
        .attr("dy", ".35em")
        //.attr('opacity', 0)
        .text(function(){return (i * 10 - 30) + " to " + (i * 10 -20);})
        .on("mouseover", mouseOver)
        .on("mousemove", mouseOver)
        .on("mouseout", mouseOut);
}

var pitchRect = document.querySelectorAll('.pitchrect');
//console.log(yawRect[0].id);
choosePitchRect(pitchRect);
//function to click yaw button and reply
function reply_click_pitch(clicked_id){
    var pitch_rects = document.getElementsByClassName('pitchrect');
    for (var i =0; i<pitch_rects.length;i++)
    {
        var id = pitch_rects[i].getAttribute('id');
        if(id == clicked_id)
        {pitch_rects[i].setAttribute('fill-opacity','50%')}
        else{pitch_rects[i].setAttribute('fill-opacity','0');}
        
    }

    selectedDict['pitch'] = [clicked_id];
    //document.getElementById('pitchPath').style.visibility = "hidden";
    showSelected(selectedDict);
    drawYawLine();
    drawRollLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}
//function to choose pitch
function choosePitchRect(pitchRect){
    for(var i = 0; i < pitchRect.length; i++){
        pitchRect[i].addEventListener("click", function(){
            for(var i = 0; i < pitchRect.length; i++){
                pitchRect[i].classList.remove("selected");
            }
            this.classList.add("selected");        
        });
    }
}

//function to draw line in pitch area
function drawPitchLine(){
    points = getPitchPoints();
    //console.log(getPitchPoints());
    for(var i = 0; i < points.length; i++){
        //need to change with large data
        points[i][1] = 100 - points[i][1];
    }
    //console.log(points);
    //console.log(points);
    var lineGenerator = d3.line()
                        .curve(d3.curveCardinal);

    var pathData = lineGenerator(points);

    d3.select('#pitchPath')
        .attr('d', pathData);
}
//function to get points in pitch area after any button clicked
function getPitchPoints(){
    if(selectedDict['pitch'].length == 1){
        return [];
    }
    var points = [[0, 0], [30, 0], [60, 0], [90, 0], [120, 0], [150, 0]];
    for(var i = 0; i < data.length; i ++){
        /*
        if(data[i]['pitch'] < -30){
            var pitch = -30;
        } 
        if(data[i]['pitch'] >= 30){
            var pitch = 20;
        }
        */
        var tmparea = selectedDict['areas'].includes(data[i]['area']);
        var tmpgender = selectedDict['gender'].includes(data[i]['gender']);
        var age = Math.floor(parseInt(data[i]['age'])/10)*10;
        var tmpage = selectedDict['age'].includes(age.toString());
        var tmpeyes = selectedDict['eyes'].includes(data[i]['eyes']);
        var tmpmouth = selectedDict['mouth'].includes(data[i]['mouth']);
        var tmpsmile = selectedDict['smile'].includes(data[i]['smile']);
        var yaw = Math.floor(parseInt(data[i]['yaw'])/10)*10;
        var tmpyaw = selectedDict['yaw'].includes(yaw.toString());
        var pitch = Math.floor(parseInt(data[i]['pitch'])/10)*10;
        var roll = Math.floor(parseInt(data[i]['roll'])/10)*10;
        var tmproll = selectedDict['roll'].includes(roll.toString());
        var happy = Math.floor(parseInt(data[i]['happy'])/10)*10;
        var tmphappy = selectedDict['happy'].includes(happy.toString());
        var neutral = Math.floor(parseInt(data[i]['neutral'])/10)*10;
        var tmpneutral = selectedDict['neutral'].includes(neutral.toString());
        var sadness = Math.floor(parseInt(data[i]['sadness'])/10)*10;
        var tmpsadness = selectedDict['sadness'].includes(sadness.toString());

        if(tmparea && tmpgender && tmpage && tmpyaw && tmproll && tmpeyes && tmpmouth && tmpsmile && tmphappy && tmpneutral && tmpsadness){
            //need to change with large data
            points[pitch / 10 + 3][1] = points[pitch / 10 + 3][1] + 1;
        }        
    }
    return points;
}

//svg for roll
var svgContainer = d3.select("#rollSvg");
//make the rectangle 
for(var i = 0; i < 10; i++){
    svgContainer.append("rect")
        .attr('id', i * 10 - 50)
        .attr('fill-opacity','0')
        .attr('class', 'rollrect')
        .attr("x", i * 15)
        .attr("y", 13)
        .attr("width", 15)
        .attr("height", 80)
        .attr('fill', '#444444')
        .attr('onclick','reply_click_roll(this.id)');
    svgContainer.append("text")
        .attr("x", i * 15)
        .attr("y", 6)
        .attr("font-size", "12px")
        .attr("opacity", 0)
        .attr("dy", ".35em")
        //.attr('opacity', 0)
        .text(function(){return (i * 10 - 50) + " to " + (i * 10 - 40);})
        .on("mouseover", mouseOver)
        .on("mousemove", mouseOver)
        .on("mouseout", mouseOut);
}
var rollRect = document.querySelectorAll('.rollrect');
//console.log(rollRect[0].id);
chooseRollRect(rollRect);
//function to click roll button and reply
function reply_click_roll(clicked_id){

    var roll_rects = document.getElementsByClassName('rollrect');
    for (var i =0; i<roll_rects.length;i++)
    {
        var id = roll_rects[i].getAttribute('id');
        if(id == clicked_id)
        {roll_rects[i].setAttribute('fill-opacity','50%')}
        else{roll_rects[i].setAttribute('fill-opacity','0');}
        
    }

    selectedDict['roll'] = [clicked_id];
    //document.getElementById('rollPath').style.visibility = "hidden";
    showSelected(selectedDict);
    drawPitchLine();
    drawYawLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
    drawSadnessLine();
}
//function to choose roll
//console.log(document.querySelectorAll('.rollrect')[0].id);
function chooseRollRect(rollRect){
    for(var i = 0; i < rollRect.length; i++){
        rollRect[i].addEventListener("click", function(){
            for(var i = 0; i < rollRect.length; i++){
                rollRect[i].classList.remove("selected");
            }
            this.classList.add("selected");        
        });
    }
}
//function to draw line in roll area
function drawRollLine(){
    points = getRollPoints();
    //console.log(getRollPoints());
    for(var i = 0; i < points.length; i++){
        points[i][1] = 100 - points[i][1];
    }
    //console.log(points);
    //console.log(points);
    var lineGenerator = d3.line()
                        .curve(d3.curveCardinal);

    var pathData = lineGenerator(points);

    d3.select('#rollPath')
        .attr('d', pathData);
}
//function to get points in pitch area after any button clicked
function getRollPoints(){
    if(selectedDict['roll'].length == 1){
        return [];
    }
    var points = [[0, 0],[15, 0], [30, 0], [45, 0], [60, 0], [75, 0], [90, 0],
                 [105, 0], [120, 0], [135, 0], [150, 0]];
    for(var i = 0; i < data.length; i ++){
        var tmparea = selectedDict['areas'].includes(data[i]['area']);
        var tmpgender = selectedDict['gender'].includes(data[i]['gender']);
        var age = Math.floor(parseInt(data[i]['age'])/10)*10;
        var tmpage = selectedDict['age'].includes(age.toString());
        var tmpeyes = selectedDict['eyes'].includes(data[i]['eyes']);
        var tmpmouth = selectedDict['mouth'].includes(data[i]['mouth']);
        var tmpsmile = selectedDict['smile'].includes(data[i]['smile']);
        var yaw = Math.floor(parseInt(data[i]['yaw'])/10)*10;
        var tmpyaw = selectedDict['yaw'].includes(yaw.toString());
        var roll = Math.floor(parseInt(data[i]['roll'])/10)*10;
        var pitch = Math.floor(parseInt(data[i]['pitch'])/10)*10;
        var tmppitch = selectedDict['pitch'].includes(pitch.toString());
        var happy = Math.floor(parseInt(data[i]['happy'])/10)*10;
        var tmphappy = selectedDict['happy'].includes(happy.toString());
        var neutral = Math.floor(parseInt(data[i]['neutral'])/10)*10;
        var tmpneutral = selectedDict['neutral'].includes(neutral.toString());
        var sadness = Math.floor(parseInt(data[i]['sadness'])/10)*10;
        var tmpsadness = selectedDict['sadness'].includes(sadness.toString());
        if(roll < -50 || pitch > 50){
            continue;
        }
        if(tmparea && tmpgender && tmpage && tmppitch && tmpyaw && tmpeyes && tmpmouth && tmpsmile && tmphappy && tmpneutral && tmpsadness){
            //need to change with large data
            points[roll / 10 + 5][1] = points[roll / 10 + 5][1] + 1;
        }        
    }
    return points;
}
//svg for happy
svgContainer = d3.select("#happySvg");
//make the rectangle 
for(var i = 0; i < 10; i++){
    svgContainer.append("rect")
        .attr('id', i * 10)
        .attr('class', 'happyrect')
        .attr("x", i * 15)
        .attr("y", 20)
        .attr("width", 15)
        .attr("height", 90)
        .attr('fill-opacity','0')
        .attr('fill', '#444444')
        .attr('onclick','reply_click_happy(this.id)');
    svgContainer.append("text")
        .attr("x", i * 13)
        .attr("y", 6)
        .attr("font-size", "12px")
        .attr("opacity", 0)
        .attr("dy", ".35em")
        //.attr('opacity', 0)
        .text(function(){return (i * 10) + " to " + (i * 10 + 10);})
        .on("mouseover", mouseOver)
        .on("mousemove", mouseOver)
        .on("mouseout", mouseOut);
}

var happyRect = document.querySelectorAll('.happyrect');
//console.log(yawRect[0].id);
chooseHappyRect(happyRect);
//function to click yaw button and reply
function reply_click_happy(clicked_id){

    var happy_rects = document.getElementsByClassName('happyrect');
    for (var i =0; i<happy_rects.length;i++)
    {
        var id = happy_rects[i].getAttribute('id');
        if(id == clicked_id)
        {happy_rects[i].setAttribute('fill-opacity','50%')}
        else{happy_rects[i].setAttribute('fill-opacity','0');}
        
    }

    selectedDict['happy'] = [clicked_id];
    //document.getElementById('happyPath').style.visibility = "hidden";
    showSelected(selectedDict);
    drawYawLine();
    drawRollLine();
    drawPitchLine();
    drawAgeLine();
    drawNeutralLine();
    drawSadnessLine();
}
//function to choose happy
function chooseHappyRect(happyRect){
    for(var i = 0; i < happyRect.length; i++){
        happyRect[i].addEventListener("click", function(){
            for(var i = 0; i < happyRect.length; i++){
                happyRect[i].classList.remove("selected");
            }
            this.classList.add("selected");        
        });
    }
}

//function to draw line in happy area
function drawHappyLine(){
    points = getHappyPoints();
    for(var i = 0; i < points.length; i++){
        //need to change with large data
        points[i][1] = 100 - points[i][1];
    }
    //console.log(points);
    //console.log(points);
    var lineGenerator = d3.line()
                        .curve(d3.curveCardinal);

    var pathData = lineGenerator(points);

    d3.select('#happyPath')
        .attr('d', pathData);
}
//function to get points in happy area after any button clicked
function getHappyPoints(){
    if(selectedDict['happy'].length == 1){
        return [];
    }
    var points = [[0, 0],[15, 0], [30, 0], [45, 0], [60, 0], [75, 0], [90, 0],
    [105, 0], [120, 0], [135, 0], [150, 0]];
    for(var i = 0; i < data.length; i ++){
        var tmparea = selectedDict['areas'].includes(data[i]['area']);
        var tmpgender = selectedDict['gender'].includes(data[i]['gender']);
        var age = Math.floor(parseInt(data[i]['age'])/10)*10;
        var tmpage = selectedDict['age'].includes(age.toString());
        var tmpeyes = selectedDict['eyes'].includes(data[i]['eyes']);
        var tmpmouth = selectedDict['mouth'].includes(data[i]['mouth']);
        var tmpsmile = selectedDict['smile'].includes(data[i]['smile']);
        var yaw = Math.floor(parseInt(data[i]['yaw'])/10)*10;
        var tmpyaw = selectedDict['yaw'].includes(yaw.toString());
        var pitch = Math.floor(parseInt(data[i]['pitch'])/10)*10;
        var tmppitch = selectedDict['pitch'].includes(pitch.toString());
        var roll = Math.floor(parseInt(data[i]['roll'])/10)*10;
        var tmproll = selectedDict['roll'].includes(roll.toString());
        var happy = Math.floor(parseInt(data[i]['happy'])/10)*10;
        var neutral = Math.floor(parseInt(data[i]['neutral'])/10)*10;
        var tmpneutral = selectedDict['neutral'].includes(neutral.toString());
        var sadness = Math.floor(parseInt(data[i]['sadness'])/10)*10;
        var tmpsadness = selectedDict['sadness'].includes(sadness.toString());
        if(tmparea && tmpgender && tmpage && tmpyaw && tmproll && tmppitch && tmpeyes && tmpmouth && tmpsmile && tmpneutral && tmpsadness){
            //need to change with large data
            points[happy / 10][1] = points[happy / 10][1] + 1;
        }        
    }
    return points;
}

//svg for neutral
svgContainer = d3.select("#neutralSvg");
//make the rectangle 
for(var i = 0; i < 10; i++){
    svgContainer.append("rect")
        .attr('id', i * 10)
        .attr('class', 'neutralrect')
        .attr("x", i * 15)
        .attr("y", 13)
        .attr("width", 15)
        .attr("height", 90)
        .attr('fill-opacity','0')
        .attr('fill', '#444444')
        .attr('onclick','reply_click_neutral(this.id)');
    svgContainer.append("text")
        .attr("x", i * 13)
        .attr("y", 6)
        .attr("font-size", "12px")
        .attr("opacity", 0)
        .attr("dy", ".35em")
        //.attr('opacity', 0)
        .text(function(){return (i * 10) + " to " + (i * 10 + 10);})
        .on("mouseover", mouseOver)
        .on("mousemove", mouseOver)
        .on("mouseout", mouseOut);
}

var neutralRect = document.querySelectorAll('.neutralrect');
//console.log(yawRect[0].id);
chooseNeutralRect(neutralRect);
//function to click yaw button and reply
function reply_click_neutral(clicked_id){

    var neutral_rects = document.getElementsByClassName('neutralrect');
    for (var i =0; i<neutral_rects.length;i++)
    {
        var id = neutral_rects[i].getAttribute('id');
        if(id == clicked_id)
        {neutral_rects[i].setAttribute('fill-opacity','50%')}
        else{neutral_rects[i].setAttribute('fill-opacity','0');}
        
    }

    selectedDict['neutral'] = [clicked_id];
    //document.getElementById('neutralPath').style.visibility = "hidden";
    showSelected(selectedDict);
    drawYawLine();
    drawRollLine();
    drawPitchLine();
    drawAgeLine();
    drawHappyLine();
    drawSadnessLine();
}
//function to choose neutral
function chooseNeutralRect(neutralRect){
    for(var i = 0; i < neutralRect.length; i++){
        neutralRect[i].addEventListener("click", function(){
            for(var i = 0; i < neutralRect.length; i++){
                neutralRect[i].classList.remove("selected");
            }
            this.classList.add("selected");        
        });
    }
}

//function to draw line in neutral area
function drawNeutralLine(){
    points = getNeutralPoints();
    for(var i = 0; i < points.length; i++){
        //need to change with large data
        points[i][1] = 100 - points[i][1];
    }
    //console.log(points);
    //console.log(points);
    var lineGenerator = d3.line()
                        .curve(d3.curveCardinal);

    var pathData = lineGenerator(points);

    d3.select('#neutralPath')
        .attr('d', pathData);
}
//function to get points in neutral area after any button clicked
function getNeutralPoints(){
    if(selectedDict['neutral'].length == 1){
        //console.log(selectedDict['neutral'].length);
        return [];
    }
    var points = [[0, 0],[15, 0], [30, 0], [45, 0], [60, 0], [75, 0], [90, 0],
    [105, 0], [120, 0], [135, 0], [150, 0]];
    for(var i = 0; i < data.length; i ++){
        var tmparea = selectedDict['areas'].includes(data[i]['area']);
        var tmpgender = selectedDict['gender'].includes(data[i]['gender']);
        var age = Math.floor(parseInt(data[i]['age'])/10)*10;
        var tmpage = selectedDict['age'].includes(age.toString());
        var tmpeyes = selectedDict['eyes'].includes(data[i]['eyes']);
        var tmpmouth = selectedDict['mouth'].includes(data[i]['mouth']);
        var tmpsmile = selectedDict['smile'].includes(data[i]['smile']);
        var yaw = Math.floor(parseInt(data[i]['yaw'])/10)*10;
        var tmpyaw = selectedDict['yaw'].includes(yaw.toString());
        var pitch = Math.floor(parseInt(data[i]['pitch'])/10)*10;
        var tmppitch = selectedDict['pitch'].includes(pitch.toString());
        var roll = Math.floor(parseInt(data[i]['roll'])/10)*10;
        var tmproll = selectedDict['roll'].includes(roll.toString());
        var happy = Math.floor(parseInt(data[i]['happy'])/10)*10;
        var tmphappy = selectedDict['happy'].includes(happy.toString());
        var neutral = Math.floor(parseInt(data[i]['neutral'])/10)*10;
        var sadness = Math.floor(parseInt(data[i]['sadness'])/10)*10;
        var tmpsadness = selectedDict['sadness'].includes(sadness.toString());
        if(tmparea && tmpgender && tmpage && tmpyaw && tmproll && tmppitch && tmpeyes && tmpmouth && tmpsmile && tmphappy && tmpsadness){
            //need to change with large data
            points[neutral / 10][1] = points[neutral / 10][1] + 1;
        }        
    }
    return points;
}


//svg for sadness
svgContainer = d3.select("#sadnessSvg");
//make the rectangle 
for(var i = 0; i < 10; i++){
    svgContainer.append("rect")
        .attr('id', i * 10)
        .attr('class', 'sadnessrect')
        .attr("x", i * 15)
        .attr("y", 20)
        .attr("width", 15)
        .attr("height", 90)
        .attr('fill-opacity','0')
        .attr('fill', '#444444')
        .attr('onclick','reply_click_sadness(this.id)');
    svgContainer.append("text")
        .attr("x", i * 10)
        .attr("y", 6)
        .attr("font-size", "12px")
        .attr("opacity", 0)
        .attr("dy", ".35em")
        //.attr('opacity', 0)
        .text(function(){return (i * 10) + " to " + (i * 10 + 10);})
        .on("mouseover", mouseOver)
        .on("mousemove", mouseOver)
        .on("mouseout", mouseOut);
}

var sadnessRect = document.querySelectorAll('.sadnessrect');
//console.log(yawRect[0].id);
chooseSadnessRect(sadnessRect);
//function to click yaw button and reply
function reply_click_sadness(clicked_id){

    var sadness_rects = document.getElementsByClassName('sadnessrect');
    for (var i =0; i<sadness_rects.length;i++)
    {
        var id = sadness_rects[i].getAttribute('id');
        if(id == clicked_id)
        {sadness_rects[i].setAttribute('fill-opacity','50%')}
        else{sadness_rects[i].setAttribute('fill-opacity','0');}
        
    }

    selectedDict['sadness'] = [clicked_id];
    //document.getElementById('sadnessPath').style.visibility = "hidden";
    showSelected(selectedDict);
    drawYawLine();
    drawRollLine();
    drawPitchLine();
    drawAgeLine();
    drawHappyLine();
    drawNeutralLine();
}
//function to choose sadness
function chooseSadnessRect(sadnessRect){
    for(var i = 0; i < sadnessRect.length; i++){
        sadnessRect[i].addEventListener("click", function(){
            for(var i = 0; i < sadnessRect.length; i++){
                sadnessRect[i].classList.remove("selected");
            }
            this.classList.add("selected");        
        });
    }
}

//function to draw line in sadness area
function drawSadnessLine(){
    points = getSadnessPoints();
    for(var i = 0; i < points.length; i++){
        //need to change with large data
        points[i][1] = 100 - points[i][1];
    }
    //console.log(points);
    //console.log(points);
    var lineGenerator = d3.line()
                        .curve(d3.curveCardinal);

    var pathData = lineGenerator(points);

    d3.select('#sadnessPath')
        .attr('d', pathData);
}
//function to get points in sadness area after any button clicked
function getSadnessPoints(){
    if(selectedDict['sadness'].length == 1){
        return [];
    }
    var points = [[0, 0],[15, 0], [30, 0], [45, 0], [60, 0], [75, 0], [90, 0],
    [105, 0], [120, 0], [135, 0], [150, 0]];
    for(var i = 0; i < data.length; i ++){
        var tmparea = selectedDict['areas'].includes(data[i]['area']);
        var tmpgender = selectedDict['gender'].includes(data[i]['gender']);
        var age = Math.floor(parseInt(data[i]['age'])/10)*10;
        var tmpage = selectedDict['age'].includes(age.toString());
        var tmpeyes = selectedDict['eyes'].includes(data[i]['eyes']);
        var tmpmouth = selectedDict['mouth'].includes(data[i]['mouth']);
        var tmpsmile = selectedDict['smile'].includes(data[i]['smile']);
        var yaw = Math.floor(parseInt(data[i]['yaw'])/10)*10;
        var tmpyaw = selectedDict['yaw'].includes(yaw.toString());
        var pitch = Math.floor(parseInt(data[i]['pitch'])/10)*10;
        var tmppitch = selectedDict['pitch'].includes(pitch.toString());
        var roll = Math.floor(parseInt(data[i]['roll'])/10)*10;
        var tmproll = selectedDict['roll'].includes(roll.toString());
        var happy = Math.floor(parseInt(data[i]['happy'])/10)*10;
        var tmphappy = selectedDict['happy'].includes(happy.toString());
        var neutral = Math.floor(parseInt(data[i]['neutral'])/10)*10;
        var tmpneutral = selectedDict['neutral'].includes(neutral.toString());
        var sadness = Math.floor(parseInt(data[i]['sadness'])/10)*10;
        if(tmparea && tmpgender && tmpage && tmpyaw && tmproll && tmppitch && tmpeyes && tmpmouth && tmpsmile && tmphappy && tmpneutral){
            //need to change with large data
            points[sadness / 10][1] = points[sadness / 10][1] + 1;
        }        
    }
    return points;
}


/*

function checkarea(data){
    if(areaSelected == "All"){
        var img = document.createElement("img");
        img.src = data['Image URL'];
        document.getElementById('showArea').appendChild(img);
    }
    
}
*/
//capture useful click
/*
jQuery('*:not(.nocapture)').on('click', function(e){
    e.stopPropagation();
    click = true; 

})
*/


