function hide(){
    document.getElementById('emergencyHeader').style.display = 'none';
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

var featuredPagesObject = [{title: "Substance use in adolescents - What every adolescent should know", description: "Learn all about substance use and how it can lead to substance use disorders (SUD), with examples of each. Sections include: The definition of substance use, causes of substance use, the cycle of SUD, why substance use is so harmful, and so on.", readingTime: 10, web: '/sud'}, {title: "COVID-19 and Substance Use", description: "This page discusses the impact of COVID-19 on substance use, as well as what could be causing it.", readingTime: 6, web: '/covid-19-and-substance-use'}, {title: "About Marijuana", description: "Read all about marijuana, which is one of the most popular illicit drugs used by adolescents.", readingTime: 8, web: '/about-marijuana'}];

for(var i = 0; i < featuredPagesObject.length; i++){
    var f = document.createElement('div');
    f.className = 'indivFeaturedPages';
    document.getElementById('featuredArticlesHolder').appendChild(f);

    var t = document.createElement('a');
    t.className = 'FeaturedPagesLink';
    var innerLink = document.createTextNode(featuredPagesObject[i].title);
    t.setAttribute('href', featuredPagesObject[i].web);
    t.setAttribute('target', '_blank');
    t.appendChild(innerLink);
    document.getElementsByClassName('indivFeaturedPages')[i].appendChild(t);
}

document.getElementById('close').addEventListener('click', hide);
document.getElementById('seeMoreStats').addEventListener('click', showMoreStats);