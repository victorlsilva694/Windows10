let ImageLogoWhite   = document.getElementById("Img-Logo-White-Branca");
let ImageLogoBlue    = document.getElementById("Img-Logo-White-Azul");
let PanelWindowsUser = document.getElementById("Panel-Windows-User");
let Screen1          = document.getElementById("Screen-1");
let Screen2          = document.getElementById("Screen-2");
let ImageInitial     = document.getElementById("ImageInitial");
let ImageFlex        = document.getElementById("Image-Flex");
let ImageFlex2       = document.getElementById("Image-Flex-2");
let ImageFlex3       = document.getElementById("Image-Flex-3");
let ImageFlex4       = document.getElementById("Image-Flex-4");
let ImageFlex5       = document.getElementById("Image-Flex-5");
let Panel6           = document.getElementById("Produtividade-Panels-6");

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
    Change = setInterval(ChangeImage, 4000);
}

function ChangeImage(){
    ImageInitial.style.display = 'block';

    if(ImageInitial.style.display === 'block')
    {

        ImageInitial.style.display = 'none';
        ImageFlex.style.display    = 'block';
        ImageFlex.style.animation  = "TrocaDeImagem 1s";
    }
}
function LoadChangeImage2(){
    Change = setInterval(ChangeImage2, 4000);
}

function ChangeImage2(){
    if(ImageFlex.style.display === 'block')
    {
        ImageFlex = ImageFlex2
    }
}

function LoadChangeImage3(){
    Change = setInterval(ChangeImage3, 4000);
}

function ChangeImage3(){
    if(ImageFlex.style.display === 'block')
    {
        ImageFlex2 = ImageFlex3
    }
}

function LoadChangeImage4(){
    Change = setInterval(ChangeImage4, 4000);
}

function ChangeImage4(){
    if(ImageFlex.style.display === 'block')
    {
        ImageFlex3 = ImageFlex4
    }
}

function LoadChangeImage5(){
    Change = setInterval(ChangeImage5, 4000);
}

function ChangeImage5(){
    if(ImageFlex.style.display === 'block')
    {
        ImageFlex4 = ImageFlex5
    }
}