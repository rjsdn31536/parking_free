var centerY=Math.floor((screen.availHeight-(500 || screen.height))/2)-(screen.height-screen.availHeight);
var centerX=Math.floor((screen.availWidth-(600 || screen.width))/2)-(screen.width-screen.availWidth);

function personalpopup() {
    window.open('personalpopup.html','개인정보활용동의서','menubar=no,toolbar=no,loaction=no,status=no,,width=600, height=500, resizable=no, left='+centerX+', top='+centerY+', screenx='+centerX+', screeny='+centerY);
}