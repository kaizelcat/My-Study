function LinksSetColor(color){
    var i=0;
    var alist = document.querySelectorAll('a');
    while(i<alist.length){
    alist[i].style.color = color;
    i=i+1;
    }
}
function BodySetColor(color){
    document.querySelector('body').style.color = color;
}
function BodySetBackGroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        BodySetBackGroundColor('black');
        BodySetColor('white');
        self.value = 'day';
        LinksSetColor('red');
    } 
    else {
        BodySetBackGroundColor('white');
        BodySetColor('black');
        self.value = 'night';
        LinksSetColor('blue')
    
    }
}