var a = 0;

function hide(){
    document.getElementById('emergencyHeader').style.display = 'none';
}

function hideMobile(){
    document.getElementById('emergencyMobileHeader').style.display = 'none';
}

function showMoreStats(){
    document.getElementById('entireStatHolder2').style.display = 'block';
    document.getElementById('entireStatHolder2').style.display = 'flex';
    document.getElementById('entireStatHolder2').scrollIntoView();
    document.getElementById('seeMoreStats').innerHTML = ""
    this.removeEventListener('click', showMoreStats);

    var link = document.createElement('a');
    link.id = 'addedLink';
    var insideLink = document.createTextNode('Want to see even more stats? Check out the Statistics page.');
    link.setAttribute('href', '/stats');
    link.setAttribute('target', '_blank');
    link.appendChild(insideLink);
    document.getElementById('seeMoreStats').appendChild(link);
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

var featuredPagesObject = [{title: "Substance use in adolescents - What every adolescent should know", description: "Learn all about substance use and how it can lead to substance use disorders (SUD), with examples of each. Sections include: The definition of substance use, causes of substance use, the cycle of SUD, why substance use is so harmful, and so on.", readingTime: 10, web: '/sud'}, {title: "COVID-19 and Substance Use", description: "This page discusses the impact of COVID-19 on substance use, as well as what could be causing it.", readingTime: 6, web: '/covid-19-and-substance-use'}, {title: "About Marijuana", description: "Read all about marijuana, which is one of the most popular illicit drugs used by adolescents.", readingTime: 8, web: '/about-marijuana'}];

for(var i = 0; i < featuredPagesObject.length; i++){
    var f = document.createElement('div');
    f.className = 'indivFeaturedPages';
    document.getElementById('featuredArticlesHolder').appendChild(f);

    var t = document.createElement('a');
    t.className = 'featuredPagesLink';
    var innerLink = document.createTextNode(featuredPagesObject[i].title);
    t.setAttribute('href', featuredPagesObject[i].web);
    t.setAttribute('target', '_blank');
    t.appendChild(innerLink);
    document.getElementsByClassName('indivFeaturedPages')[i].appendChild(t);

    var d = document.createElement('p');
    d.className = 'featuredDescription';
    d.innerHTML = featuredPagesObject[i].description;
    document.getElementsByClassName('indivFeaturedPages')[i].appendChild(d);

    var c = document.createElement('p');
    c.className = 'featuredTime';
    c.innerHTML = "🕒 Estimated reading time: " + featuredPagesObject[i].readingTime + " minutes";
    document.getElementsByClassName('indivFeaturedPages')[i].appendChild(c);
}

/*function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("emergencyHeader").style.position = 'fixed';
    document.getElementById("emergencyMobileHeader").style.position = 'fixed';
    document.getElementById("emergencyHeader").style.width = '102%';
    document.getElementById("emergencyMobileHeader").style.width = '102%';
    document.getElementById("emergencyMobileHeader").style.marginTop = '1.3%';
  } else {
    document.getElementById("emergencyHeader").style.position = 'relative';
    document.getElementById("emergencyMobileHeader").style.position = 'relative';
    document.getElementById("emergencyHeader").style.width = '100%';
    document.getElementById("emergencyMobileHeader").style.width = '100%';
    document.getElementById("emergencyMobileHeader").style.marginTop = '0';
  }
}*/

function scrollBackToTop(){
    document.getElementById('header').scrollIntoView();
    document.getElementById('mobileHeader').scrollIntoView();
}

document.getElementById('close').addEventListener('click', hide);
document.getElementById('closeMobile').addEventListener('click', hideMobile);
document.getElementById('seeMoreStats').addEventListener('click', showMoreStats);
document.getElementById('menu').addEventListener('click', showMenu);
document.getElementById('backToTop').addEventListener('click', scrollBackToTop);