var f1 = document.getElementById('mode');
var state = 'night';
f1.addEventListener('click', function(){
    if(state=="night")
        // {document.getElementById('main').style.backgroundImage="url(https://swall.teahub.io/photos/small/112-1128749_thumb-image-light-green-nature-hd.jpg)"
        // document.getElementById('main').style.backgroundRepeat="no-repeat";
        {document.getElementById('main').style.backgroundImage="url(./light-back.jpg)";
        document.getElementById('mode').style.backgroundImage="url(./dark-back.jpg)";
        document.getElementById('text').style.color='rgb(35, 36, 36)';
        document.getElementById('mode').style.color='rgb(221, 239, 239)';
        console.log("Changed to light");
        state = 'dark';
    }
    else{
        document.getElementById('main').style.backgroundImage="url(./dark-back.jpg)";
        document.getElementById('mode').style.backgroundImage="url(./light-back.jpg)";
        document.getElementById('text').style.color='rgb(221, 239, 239)';
        document.getElementById('mode').style.color='rgb(35, 36, 36)';
        console.log("Changed to dark");
        state = 'night';
    }
    

})