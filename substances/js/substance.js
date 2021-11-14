var allSubstances = [
{title: 'Marijuana', description: 'Read all about marijuana, one of the most popular substances used amongst adolescents.', image: 'https://images.pexels.com/photos/606506/pexels-photo-606506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', link: 'marijuana.html'},

{title: 'Alcohol', description: 'According to the SAHMSA 2019 annual report, a whopping 139.7 million people ages 12 and older used alcohol in the United States in the past month. Find out more about the effects of alcohol on the body.', image: 'https://images.pexels.com/photos/667986/pexels-photo-667986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', link: 'alcohol.html'},

{title: 'Nitrous oxide', description: 'Nitrous oxide is often used in the dispensing of whipped cream during baking. However, it is a prevalent drug used at clubs and parties.', image: 'https://media.istockphoto.com/photos/gas-cylinders-picture-id508813979?b=1&k=20&m=508813979&s=170667a&w=0&h=31tFWBrfUfLp4aGcCGnYbP60tTs55tRi5eRXgypvasE=', link: 'nitrousoxide.html'},

{title: 'Smoking (Cigarettes)', description: 'Smoking is the leading cause of preventable death in the world. Read about the effects of cigarettes in your body.', image: 'https://images.pexels.com/photos/1058472/pexels-photo-1058472.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', link: 'smoking.html'},

{title: 'Smoking (E-Cigarettes)', description: 'Also known as vaping, smoking E-cigarettes have become another popular substance that adolescents use. The term \'vaping\' can include vaping nicotine, marijuana, or flavoring.', image: 'https://images.pexels.com/photos/4834389/pexels-photo-4834389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', link: 'vaping.html'},

{title: 'Internet Addiction (IA)', description: 'IA, also called pathological Internet use, compulsive computer use, or Internet dependence, is a phenomenon in which Internet usage starts to affect important aspects of life. Although not included in the DSM-5, this is an interesting area of study.', image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', link: 'ia.html'}];

var definitions = ['Substance use disorders, also known as SUD, is a behavioral condition where an individual uses a substance uncontrollably. \'Substance\' can mean many things - such as alcohol, tobacco, marijuana, meth, LSD, magic mushrooms, etc... Often, people with SUD have the mindset that the substance is more important than other things in life.']

for (var i = 0; i < allSubstances.length; i++){
    var a = document.createElement('div');
    a.className = 'linkHolder';
    document.getElementById('allSubstancesHolder').appendChild(a);

    var innerHolder = document.createElement('div');
    innerHolder.className = 'innerHolder';
    document.getElementsByClassName('linkHolder')[i].appendChild(innerHolder);
    
    var b = document.createElement('a');
    b.className = 'link';
    b.setAttribute('href', allSubstances[i].link);
    b.setAttribute('target', '_blank');
    var inner = document.createTextNode(allSubstances[i].title);
    b.appendChild(inner);
    document.getElementsByClassName('innerHolder')[i].appendChild(b);

    var c = document.createElement('p');
    c.className = 'linkDesc';
    c.innerHTML = allSubstances[i].description;
    document.getElementsByClassName('innerHolder')[i].appendChild(c);

    var img = document.createElement('img');
    img.className = 'img';
    img.setAttribute('src', allSubstances[i].image);
    document.getElementsByClassName('linkHolder')[i].appendChild(img);
}


