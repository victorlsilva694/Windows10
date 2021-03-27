let ImageLogoWhite   = document.getElementById("Img-Logo-White-Branca");
let ImageLogoBlue    = document.getElementById("Img-Logo-White-Azul");
let PanelWindowsUser = document.getElementById("Panel-Windows-User");
let Screen1          = document.getElementById("Screen-1");
let Screen2          = document.getElementById("Screen-2");
let ImageInitial     = document.getElementById("ImageInitial");

function EventLogo()
{
    ImageLogoWhite.style.display = 'none';
    
    if(ImageLogoBlue.style.display !== 'block')
    {
        ImageLogoBlue.style.display = 'block';
    }

}

function EventLogoExit(){
   
    if(ImageLogoBlue.style.display  === 'block')
    {
        ImageLogoBlue.style.display  = 'none';
        ImageLogoWhite.style.display = 'block';
        ImageLogoWhite.style.left    = '17px';
    }

}

function ExibPanelWindows()
{
    if(PanelWindowsUser.style.display !== 'block')
    {
        PanelWindowsUser.style.display = 'block';
    }
    else
    {
        PanelWindowsUser.style.display = 'none';
    }
}

function LoadSlider()
{
    run = setInterval(SliderMicrosoft , 5000);

}

function SliderMicrosoft() {
    Screen1.style.display = 'block';

    if(Screen1.style.display === 'block')
    {
        Screen1.style.display   = 'none';
        Screen2.style.display   = 'block';
        Screen2.style.animation = "TrocaDeSlider2 1s";
    }
}

function LoadChangeImage(){
    Change = setInterval(ChangeImage, 3000);
}

function ChangeImage(){
    ImageInitial.style.display = 'block';

    if(ImageInitial.style.display === 'block')
    {

        ImageInitial.style.display = 'none';
        
    }
}