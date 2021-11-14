var trimmed = [];
var listofgrades = ['12th grade ▼', '10th grade ▼', '8th grade ▼'];
var listofprevalences = ['Lifetime ▼', '1 year ▼', '1 month ▼', '1 day ▼'];
var scale = [[[65, 13], [60, 10], [35, 7], [10, 2]], [[50, 10], [42, 6], [24, 4], [6, 1]], [[30, 5], [24, 4], [15, 3], [2.5, 0.5]]];

var listOfFirstDrugs = [
{Drug: 'Illicit drugs', Stat: [['12th grade', 46.6, 36.8, 22.2, 'No data available'], ['10th grade', 37.3, 30.4, 18.2, 'No data available'], ['8th grade', 21.3, 15.6, 8.7, 'No data available']], color: 'crimson'},

{Drug: 'Alcohol', Stat: [['12th grade', 61.5, 55.3, 33.6, 2.7], ['10th grade', 46.4, 40.7, 20.3, 1.0], ['8th grade', 25.6, 20.5, 9.9, 0.4]], color: '#715bd4'},

{Drug: 'Marijuana', Stat: [['12th grade', 43.7, 35.2, 21.1, 6.9], ['10th grade', 33.3, 28.0, 16.6, 4.4], ['8th grade', 14.8, 11.4, 6.5, 1.1]], color: 'green'}, 

{Drug: 'Cigarettes', Stat: [['12th grade', 24.0, 'No data available', 7.5, 3.1], ['10th grade', 13.9, 'No data available', 3.2, 1.2], ['8th grade', 11.5, 'No data available', 2.2, 0.8]], color: 'black'},

{Drug: 'Any Vaping', Stat: [['12th grade', 47.2, 39.0, 28.2, 'No data available'], ['10th grade', 41.0, 34.6, 23.5, 'No data available'], ['8th grade', 24.1, 19.2, 12.5, 'No data available']], color: 'orange'},

{Drug: 'Vaping (Nicotine)', Stat: [['12th grade', 44.3, 34.5, 24.7, 8.6], ['10th grade', 38.7, 30.7, 19.3, 5.6], ['8th grade', 22.7, 16.6, 10.5, 2.0]], color: 'brown'},

{Drug: 'Vaping (Marijuana)', Stat: [['12th grade', 27.9, 22.1, 12.2, 2.5], ['10th grade', 22.7, 19.1, 11.3, 1.7], ['8th grade', 10.2, 8.1, 4.2, 0.7]], color: '#eb7d34'}, 

{Drug: 'Vaping (Flavoring)', Stat: [['12th grade', 29.8, 16.6, 8.4, 1.9], ['10th grade', 27.7, 18.4, 10.4, 1.76], ['8th grade', 17.8, 12.3, 6.8, 0.6]], color: 'cornflowerblue'}, 

{Drug: 'JUUL', Stat: [['12th grade', 36.2, 22.7, 12.9, 'No data available'], ['10th grade', 30.7, 20.0, 12.3, 'No data available'], ['8th grade', 16.9, 11.7, 6.3, 'No data available']], color: '#8f8786'}, 

{Drug: 'Inhalants', Stat: [['12th grade', 3.8, 1.1, 0.7, 'No data available'], ['10th grade', 7.4, 2.9, 1.2, 'No data available'], ['8th grade', 12.6, 6.1, 2.9, 'No data available']], color: 'skyblue'},

{Drug: 'Cocaine', Stat: [['12th grade', 4.1, 2.9, 0.8, 'No data available'], ['10th grade', 1.6, 1.1, 0.4, 'No data available'], ['8th grade', 1.6, 0.5, 0.1, 'No data available']], color: 'brown'}];

function drawFirstGraph(maxStat, increment, row, col){
    trimmed = [];
        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var newCont = document.createElement('div');
            newCont.className = 'container';
            document.getElementById('graph1').appendChild(newCont);
        }
    
        for(var i = 0; i<listOfFirstDrugs.length; i++){
            if(listOfFirstDrugs[i].Stat[row][col+1] != 'No data available'){
                var drugName = document.createElement('section');
                drugName.className = 'graphText';
                drugName.innerHTML = listOfFirstDrugs[i].Drug;
                document.getElementsByClassName('container')[i].appendChild(drugName);
                trimmed.push(i);
            }
        }
    
        for(var i = 0; i<listOfFirstDrugs.length; i++){
            if(listOfFirstDrugs[i].Stat[row][col+1] != 'No data available'){
                var bar = document.createElement('div');
                bar.className = 'graphBars';
                document.getElementsByClassName('container')[i].appendChild(bar);
            }
        }
    
        for(var i = 0; i<trimmed.length; i++){
            if(listOfFirstDrugs[trimmed[i]].Stat[row][col+1] != 'No data available'){
                var drugStat = document.getElementsByClassName('graphBars')[i];
                var drugStatWidth = ((listOfFirstDrugs[trimmed[i]].Stat[row][col+1]/maxStat) * 65) - 1.5;
                drugStat.style.width = (((listOfFirstDrugs[trimmed[i]].Stat[row][col+1]/maxStat) * 65) - 1.5) + '%';
                if (drugStatWidth > 3){
                    drugStat.innerHTML = listOfFirstDrugs[trimmed[i]].Stat[row][col+1] + '%';
                }else{
                    var outsideText = document.createElement('p');
                    outsideText.className = 'outsideText';
                    outsideText.innerHTML = listOfFirstDrugs[trimmed[i]].Stat[row][col+1] + '%';
                    document.getElementsByClassName('container')[trimmed[i]].appendChild(outsideText);
                }
                
                drugStat.style.backgroundColor = listOfFirstDrugs[trimmed[i]].color;
            } 
        }
        
        var line = document.createElement('div');
        line.id = 'graphScale';
        document.getElementById('graph1').appendChild(line);
        
        for(var i = 0; i< (maxStat/increment); i++){
            var percentages = document.createElement('div');
            percentages.className = 'percentDiv';
            if(i === (maxStat/increment)-1){
                percentages.innerHTML = (i*increment) + " (%)";
            }else{
                percentages.innerHTML = (i*increment);
            }
            document.getElementById('graphScale').appendChild(percentages);
        }
    
        for(var i = 0; i< (maxStat/increment); i++){
            document.getElementsByClassName('percentDiv')[i].style.width = (100 / (maxStat/increment)) + '%';
            document.getElementsByClassName('percentDiv')[i].style.maxWidth = (100 / (maxStat/increment)) + '%';
        }

        /*var newCont = document.createElement('div');
        newCont.id = 'pContainer';
        //newCont.innerHTML = 'stuff is here';
        document.getElementById('graph1').appendChild(newCont);

        var leftCont = document.createElement('div');
        leftCont.id = 'lContainer';
        document.getElementById('pContainer').appendChild(leftCont);

        var rightCont = document.createElement('div');
        rightCont.id = 'rContainer';
        document.getElementById('pContainer').appendChild(rightCont);

        
        for(var i = Math.trunc(maxStat/increment); i > 0; i--){
            var percentages = document.createElement('div');
            percentages.className = 'hPercentDiv';
            if(i === 1){
                percentages.innerHTML = (i*increment) + " (%)";
            }else{
                percentages.innerHTML = (i*increment);
            }
            document.getElementById('lContainer').appendChild(percentages);

            document.getElementsByClassName('hPercentDiv')[Math.trunc(maxStat/increment) - i].style.height = (48 / (maxStat/increment)) + 'vh';
        }

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var bar = document.createElement('div');
            bar.className = 'vGraphBarsCont';
            document.getElementById('rContainer').appendChild(bar);
            
        }

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var barContent = document.createElement('div');
            barContent.className = 'vGraphBars';
            
            document.getElementsByClassName('vGraphBarsCont')[i].appendChild(barContent);
        }

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            document.getElementsByClassName('vGraphBarsCont')[i].style.width = (100 / listOfFirstDrugs.length) + '%';
            var vGraphBars = document.getElementsByClassName('vGraphBars')[i];
            vGraphBars.style.marginLeft = '15%';
            vGraphBars.style.marginRight = '15%';
            vGraphBars.style.width = '70%';
            vGraphBars.style.backgroundColor = listOfFirstDrugs[i].color;
            vGraphBars.style.height = (50 * (listOfFirstDrugs[i].Stat[row][col+1]/maxStat)) - 0.5 + 'vh';
            vGraphBars.style.marginTop = (50 - (50 * (listOfFirstDrugs[i].Stat[row][col+1]/maxStat) -0.5)) + 'vh';
        }

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var a = document.createElement('div');
            a.className = 'vGraphBarsStats';
            a.innerHTML = listOfFirstDrugs[i].Stat[row][col+1] + '%';
            document.getElementsByClassName('vGraphBars')[i].appendChild(a);
        }


        var hGraphScale = document.createElement('div');
        hGraphScale.id = 'hGraphScale';
        document.getElementById('graph1').appendChild(hGraphScale);

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            var drugNames = document.createElement('p');
            drugNames.className = 'hDrugNames';
            drugNames.innerHTML = listOfFirstDrugs[i].Drug;
            document.getElementById('hGraphScale').appendChild(drugNames);
            document.getElementsByClassName('hDrugNames')[i].style.width = (100 / listOfFirstDrugs.length) + '%';
        }
    }*/
}

var lengthOfPrevalence = ['1 day', '1 month', '1 year', 'Lifetime']

function createDropDowns(){
    for (var i = 0; i < 3; i++){
        var g = document.createElement('p');
        g.className = 'grade';
        g.innerHTML = 8 + (i)*2 + 'th grade';
        document.getElementById('gradeSelection').appendChild(g);
    }

    for (var i = 0; i < 4; i++){
        var p = document.createElement('p');
        p.className = 'prevalenceOfUse';
        p.innerHTML = lengthOfPrevalence[i];
        document.getElementById('prevalenceSelection').appendChild(p);
    }

    for (var i = 0; i < 2; i++){
        var x = document.getElementsByClassName('grade')[i+1];
        x.style.borderTop = 'none';
        x.style.borderBottom = 'none';
        x.style.paddingTop = '2%';
        x.style.paddingBottom = '2%';
    }
    document.getElementsByClassName('grade')[3].style.borderTop = 'none';

    for (var i = 0; i < 3; i++){
        var x = document.getElementsByClassName('prevalenceOfUse')[i+1];
        x.style.borderTop = 'none';
        x.style.borderBottom = 'none';
        x.style.paddingTop = '2%';
        x.style.paddingBottom = '2%';
    }
    document.getElementsByClassName('prevalenceOfUse')[4].style.borderTop = 'none';

    for (var i = 0; i < 3; i++){
        document.getElementsByClassName('grade')[i+1].style.display = 'none';
    }

    for (var i = 0; i < 4; i++){
        document.getElementsByClassName('prevalenceOfUse')[i+1].style.display = 'none';
    }
}

var gradeShown = false;
var prevalenceShown = false;
function showDropDownGrade(){
    if(gradeShown === false){
        gradeShown = true;
        for (var i = 0; i < 3; i++){
            document.getElementsByClassName('grade')[i+1].style.display = 'block';
        }
    }else{
        gradeShown = false;
        for (var i = 0; i < 3; i++){
            document.getElementsByClassName('grade')[i+1].style.display = 'none';
        }
    }
}

function showDropDownPrevalence(){
    if(prevalenceShown === false){
        prevalenceShown = true;
        for (var i = 0; i < 4; i++){
            document.getElementsByClassName('prevalenceOfUse')[i+1].style.display = 'block';
        }
    }else{
        prevalenceShown = false;
        for (var i = 0; i < 4; i++){
            document.getElementsByClassName('prevalenceOfUse')[i+1].style.display = 'none';
        }
    }
}

function changeGradeGraph(){
    document.getElementsByClassName('grade')[0].innerHTML = this.innerHTML + ' ▼';
    var d = document.getElementsByClassName('graphTitle')[0];
    var g = document.getElementsByClassName('prevalenceOfUse')[0];
    if(g.innerHTML != 'Lifetime ▼'){
        d.innerHTML = 'Prevalence of use in the past ' + g.innerHTML.substring(2, g.innerHTML.length-2) + ' of selected substances among ' + this.innerHTML + 'rs, 2020';
    }else{
        d.innerHTML = 'Lifetime prevalence of use of selected substances among ' + this.innerHTML + 'rs, 2020';
    }
    showDropDownGrade();
    for(var i = 0; i<listOfFirstDrugs.length; i++){
        document.getElementsByClassName('container')[0].remove();
    }
    document.getElementById('graphScale').remove();
    
    var temp = listofgrades.indexOf(document.getElementsByClassName('grade')[0].innerHTML);
    var temp1 = listofprevalences.indexOf(g.innerHTML)
    drawFirstGraph(scale[temp][temp1][0], scale[temp][temp1][1], temp, temp1);
}

function changePrevalenceGraph(){
    document.getElementsByClassName('prevalenceOfUse')[0].innerHTML = this.innerHTML + ' ▼';
    var d = document.getElementsByClassName('graphTitle')[0];
    var g = document.getElementsByClassName('grade')[0];
    if(document.getElementsByClassName('prevalenceOfUse')[0].innerHTML != 'Lifetime ▼'){
        d.innerHTML = 'Prevalence of use in the past ' + this.innerHTML.substring(2, this.innerHTML.length) + ' of selected substances among ' + g.innerHTML.substring(0, g.innerHTML.length - 2) + 'rs, 2020';
    }else{
        d.innerHTML = 'Lifetime prevalence of use of selected substances among ' + g.innerHTML.substring(0, g.innerHTML.length - 2) + 'rs, 2020';
    }
    showDropDownPrevalence();

        for(var i = 0; i<listOfFirstDrugs.length; i++){
            document.getElementsByClassName('container')[0].remove();
        }
        document.getElementById('graphScale').remove();

    var temp = listofgrades.indexOf(g.innerHTML);
    var temp1 = listofprevalences.indexOf(document.getElementsByClassName('prevalenceOfUse')[0].innerHTML);
    drawFirstGraph(scale[temp][temp1][0], scale[temp][temp1][1], temp, temp1);
}

drawFirstGraph(65, 13, 0, 1);

createDropDowns();

document.getElementsByClassName('grade')[0].addEventListener('click', showDropDownGrade);
document.getElementsByClassName('prevalenceOfUse')[0].addEventListener('click', showDropDownPrevalence);
for(var i = 0; i < 3; i++){
    document.getElementsByClassName('grade')[i+1].addEventListener('click', changeGradeGraph);
}

for(var i = 0; i < 4; i++){
    document.getElementsByClassName('prevalenceOfUse')[i+1].addEventListener('click', changePrevalenceGraph);
}
