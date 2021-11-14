var a = 0;
var criteria = ['Alcohol is taken in larger amounts, or over a longer period.', 'There have been unsuccessful efforts or a desire to cut down or control alcohol use.', 'A great deal of time is spent in activities relating to alcohol (such as obtaining alcohol, drinking, or coping with side effects)', 'Cravings for alcohol', 'Alcohol use affects performance at work, school, or home life.', 'Continued alcohol use despite having constant social or personal problems that are likely to be caused by alcohol', 'Important social, occupational, or recreational activities are given up or reduced because of alcohol use.', 'Alcohol use in situations when it is physically hazardous', 'Continued alcohol use despite having physical or psychological problems that is likely to be caused by alcohol', 'Tolerance, where 1) consuming the same amount of alcohol leads to diminshed happiness, or 2) when more alcohol is needed to achieve the same level of euphoria'];

function createCriteria(){
    for(var i = 0; i < criteria.length; i++){
        var d = document.createElement('div');
        d.className = 'indivCriteriaHolder';
        document.getElementById('criteriaHolder').appendChild(d);

        var b = document.createElement('div');
        b.className = 'bullet';
        document.getElementsByClassName('indivCriteriaHolder')[i].appendChild(b);

        var t = document.createElement('p');
        t.innerHTML = criteria[i];
        t.className = 'bulletText';
        document.getElementsByClassName('indivCriteriaHolder')[i].appendChild(t);
    }
}



var statistics = ['There are roughly 139.7 million people in the US, aged 12 and above, who have used alcohol in the past month.', 'Out f those 139.7 million people, 65.8 million are binge drinkers (around 47.1%)', 'Close to one in ten adolescents have drank alcohol, meaning they were drinking underage.', 'Nearly 15 million people ages 12 and above struggle with AUD.', '95,000 people die from alcohol-related causes annually. This makes alcohol the third leading cause of preventable death in the US. ', 'Worldwide, more than 3 million people die from alcohol related causes.', 'Alcohol misuse cost the US $249 billion in 2010.', 'According to a 2017 report, more than 1 in 10 people under the age of 17 live with a parent with AUD.', 'People who drink underage are 5 times more likely to develop AUD in the future compared to those who wait until they\'re legal.']


function createStatistics(){
    for(var i = 0; i < statistics.length; i++){
        var d = document.createElement('div');
        d.className = 'indivStatisticsHolder';
        document.getElementById('statisticsHolder').appendChild(d);

        var b = document.createElement('div');
        b.className = 'bullet';
        document.getElementsByClassName('indivStatisticsHolder')[i].appendChild(b);

        var t = document.createElement('p');
        t.innerHTML = statistics[i];
        t.className = 'bulletText';
        document.getElementsByClassName('indivStatisticsHolder')[i].appendChild(t);
    }
}

/*var navigation = ['Introduction', 'What is alcohol use disorder (AUD)?', 'DSM-5 diagnosis', 'How alcohol works + its effects', 'Statistics', 'Treatment'];

function scroll(){
    console.log('test');
    document.getElementsByClassName('subtitle')[navigation.indexOf(this.innerHTML)].scrollTop = document.getElementsByClassName('subtitle')[navigation.indexOf(this.innerHTML)].offsetTop;
    document.getElementById('contentDiv').style.width = '75%';
    document.getElementById('navigationDiv').style.width = '25%';
    document.getElementById('content').style.justifyContent = 'center';
}

for (var i = 0; i < document.getElementsByClassName('navigationLink').length; i++){
    document.getElementsByClassName('navigationLink')[i].addEventListener('click', scroll);
}*/

function showExample(){
    a++;
    if(a%2 === 1){
        document.getElementsByClassName('example')[0].style.display = 'block';
        document.getElementById('brightLink').innerHTML = 'Hide example';
    }else{
        document.getElementsByClassName('example')[0].style.display = 'none';
        document.getElementById('brightLink').innerHTML = '(Show me an example of a person with AUD!)';
    }
}

document.getElementById('brightLink').addEventListener('click', showExample);

createCriteria();
createStatistics();