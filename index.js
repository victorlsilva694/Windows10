let ImageLogoWhite   = document.getElementById("Img-Logo-White-Branca");
let ImageLogoBlue    = document.getElementById("Img-Logo-White-Azul");
let PanelWindowsUser = document.getElementById("Panel-Windows-User");

function EventLogo(){
    ImageLogoWhite.style.display = 'none';
    
    if(ImageLogoBlue.style.display !== 'block'){
        ImageLogoBlue.style.display = 'block';
    }

}

function EventLogoExit(){
   
    if(ImageLogoBlue.style.display  === 'block'){
        ImageLogoBlue.style.display  = 'none';
        ImageLogoWhite.style.display = 'block';
        ImageLogoWhite.style.left    = '17px';
    }

}

function ExibPanelWindows(){
    if(PanelWindowsUser.style.display !== 'block'){
        PanelWindowsUser.style.display = 'block';
    }
    else{
        PanelWindowsUser.style.display = 'none';
    }
}