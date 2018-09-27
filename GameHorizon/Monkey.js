// JavaScript Documentvar x = 200;
var y = 200;
var faceS = 750;
var count=0;

//change this to false to not zoom
var zoom=true;

draw = function() {
    background(61, 125, 56);
    //ears and hair around head
    noStroke();
    fill(66, 66, 66);
    ellipse(x, y, faceS, 3/4*faceS);
    ellipse(x+faceS*2/5,y-faceS/5,faceS/5,faceS/4);
    ellipse(x-faceS*2/5,y-faceS/5,faceS/5,faceS/4);
    //face area
    fill(48, 48, 48);
    ellipse(x, y+faceS/20, 17/20*faceS, 3/5*faceS); 
    //eyes
    fill(20, 8, 20);
    ellipse(x+faceS/7,y,faceS/7,faceS/9);
    ellipse(x-faceS/7,y,faceS/7,faceS/9);
    //white hair
    fill(255);
    ellipse(x,y+faceS*45/200,faceS*3/5,faceS/4);
    //facialhair
    noFill();
    stroke(255, 255, 255);
    strokeWeight(faceS/10);
    arc(x,y+faceS*3/8,faceS*19/20,faceS/2,160,380);
    //nose
    fill(0);
    noStroke();
    ellipse(x-faceS*3/40,y+faceS/8,faceS/20,faceS/20);
    ellipse(x+faceS*3/40,y+faceS/8,faceS/20,faceS/20);
    //mouth
     noFill();
    stroke(0, 0, 0);
    strokeWeight(faceS/100);
    arc(x,y+faceS*6/20,faceS*5/8,faceS/5,240,300);
    fill(0);
    ellipse(x,y+faceS*7/33,faceS/10,faceS/50);
    
    //animate
    if(faceS>=250&&zoom===true) {
        faceS-=5;
    }
    
    //animate mouth
    count+=1;
        if(count>=100) {
            ellipse(x,y+faceS*7/33,faceS/3,faceS/50);
            if(count>=160) {
                count=0;
            }
        }
    
};