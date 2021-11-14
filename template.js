var a = 0;

function hide(){
    document.getElementById('emergencyHeader').style.display = 'none';
}

function hideMobile(){
    document.getElementById('emergencyMobileHeader').style.display = 'none';
}

function showMenu(){
    a++;
    if(a%2 === 1){
        document.getElementById('mobileNavigation').style.display = 'block';
        document.getElementById('header').style.borderBottom = '2px solid white';
    }else{
        document.getElementById('mobileNavigation').style.display = 'none';
    }
}

function scrollBackToTop(){
    document.getElementById('header').scrollIntoView();
    document.getElementById('mobileHeader').scrollIntoView();
}

document.getElementById('close').addEventListener('click', hide);
document.getElementById('closeMobile').addEventListener('click', hideMobile);
document.getElementById('menu').addEventListener('click', showMenu);
document.getElementById('backToTop').addEventListener('click', scrollBackToTop);