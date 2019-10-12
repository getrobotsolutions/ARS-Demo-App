conf_count = 0;
        var jokes = new Array( );
        jokes[1]="Why do I get so angry? Because people keep pushing my buttons!";
        jokes[2]="What is my favorite type of music? Heavy metal";
        jokes[3]="Why was I feeling bad? I had a virus";
        jokes[4]="Why did I go to the mall? Because I had hardware and software but needed underwear";
        jokes[5]="Why was I so tired when I got here? I had a hard drive";
        jokes[6]="Why did I cross the road? I was programmed by a chicken";
        jokes[7]="Why can’t bad programmers drive well? They can’t C sharp";
        jokes[8]="Want to know my favorite drink? It’s a screwdriver";
        jokes[9]="Want to know my favorite dance? It’s the robot";

        var speak = new Array( );
        speak[0] = "";
        speak[1] = "Take a picture with me.";
        speak[2] = "Pick a song and let's boogie.";
        speak[3] = "Become a robot.";
        speak[4] = "see our pictures from today on our slack channel";
        speak[5] = "";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
            break;
        
        case "Home":
            //writeCookie("NavigationState", true, 30);
           location.href = "../../maincontents.htm";
           break;
        case "Home2":
            //writeCookie("NavigationState", true, 30);
           location.href = "../../main-2.htm";
           break;
        case "Maps":
            location.href = "Contents/Maps/index.html";
            //PlaySpeech(speak[1]);
            break;

        case "Videos":
            location.href = "Contents/Videos/index.html";
            //PlaySpeech(speak[1]);
            break;
        case "Team":
            location.href = "Contents/Team/index.html";
            //PlaySpeech(speak[1]);
            break;
        case "Survey":
            location.href = "Contents/Survey/index.html";
            //PlaySpeech(speak[5]);
            break;
        case "Services":
            location.href = "Contents/Services/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "EventRentals":
            location.href = "../EventRentals/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "BackToRentals":
            location.href = "../EventRentals/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "TradeShows":
            location.href = "../TradeShows/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "BackToServices":
            location.href = "../Services/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "PrizeWheel":
            location.href = "Contents/PrizeWheel/index.html";
            //PlaySpeech(speak[1]);
            break;
        case "SlotMachine":
            location.href = "Contents/SlotMachine/index.html";
            //PlaySpeech(speak[1]);
            break;
        case "Pictures":
            location.href = "Contents/Pictures/index.html";
            //PlaySpeech(speak[1]);
            break;

        case "Selfie":
            location.href = "../../Contents/Selfie/index.html";
            PlaySpeech(speak[1]);
            break;

        case "Dance":
            location.href = "Contents/Dance/index.html";
            PlaySpeech(speak[2]);
            break;

        case "Avatar":
            location.href = "../../Contents/RobotAvatar/index.htm";
            PlaySpeech(speak[3]);
            break;

        case "MatchGame":
            location.href = "Contents/MatchGame/index.html";
            //PlaySpeech(speak[4]);
            break;

        case "OurPhotos":
            location.href = "Contents/Photos/index.html";
            //PlaySpeech(speak[5]);
            break;

        
        
        
            
        case "Config":
            if(conf_count === 3)
            {
                conf_count = 0;
                location.href = "Config/Config.htm";
            }
            else
            {
                conf_count++;
                console.log(conf_count);
            }

            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}


function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}
function ShowPopupForm(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').style.display = "block";
    //document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}



$(document).ready(function(){

    //$('.navigation').hide();
    /*$('.get-started').click(function(){
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
        
    });
    if (readCookie("NavigationState")) {
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
    }
    $('.close-menu').click(function(){
        $('.navigation').hide();
        $('.welcome-text, .get-started, footer').show();
        writeCookie("NavigationState", false, 30);
    });*/
    

    $('a.close').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });

  


});

