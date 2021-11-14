var a = 0;
var criteria = ['Cannabis is often taken in larger amounts or over a longer period than was intended.', 'There is a persistent desire or unsuccessful efforts to cut down or control cannabis use.', 'A great deal of time is spent in activities necessary to obtain cannabis, use cannabis, or recover from its effects.', 'Cravings for cannabis.', 'Recurrent cannabis use resulting in a failure to fulfill major role obligations at work, school, or home', 'Continued use of cannabis despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of cannabis', 'Important social, occupational, or recreational activities are given up or reduced because of cannabis use.', 'Recurrent use of cannabis in situations when it is physically hazardous', 'Continued cannabis use despite having physical or psychological problems that is likely to be caused by cannabis', 'Tolerance, where 1) A need for markedly increased amounts of cannabis to achieve intoxication or desired effect, or 2) markedly diminished effect with continued use of the same amount of cannabis.', 'Withdrawal, as seen through either of the following: 1)The character withdrawal syndrome for cannabis or 2) Cannabis or a closely related substance is taken to relieve or avoid withdrawal symptoms.'];

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



var statistics = ['There are roughly 139.7 million people in the US, aged 12 and above, who have used alcohol in the past month.', 'Out f those 139.7 million people, 65.8 million are binge drinkers (around 47.1%)', 'Close to one in ten adolescents have drank alcohol, meaning they were drinking underage.', 'Nearly 15 million people ages 12 and above struggle with AUD.', '95,000 people die from alcohol-related causes annually. This makes alcohol the third leading cause of preventable death in the US. ', 'Worldwide, more than 3 million people die from alcohol related causes.', 'Alcohol misuse cost the US $249 billion in 2010.', 'According to a 2017 report, more than 1 in 10 people under the age of 17 live with a parent with AUD.', 'People who drink underage are 5 times more likely to develop AUD in the future compared to those who wait until they\'re legal.'];

createCriteria();