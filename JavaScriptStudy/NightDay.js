
var Links = {
    SetColor: function(color) {
        // var i=0;
        // var alist = document.querySelectorAll('a');
        // while(i<alist.length){
        // alist[i].style.color = color;
        // i=i+1;
        // } // Ctrl + /
        $('a').css('color',color); // $가 jquery에서 쓰고 2번이 매개변수 color
    }   
}
var Body = {
    SetColor : function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    SetBackGroundColor : function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.SetBackGroundColor('black');
        Body.SetColor('white');
        self.value = 'day';
        Links.SetColor('red');
    } 
    else {
        Body.SetBackGroundColor('white');
        Body.SetColor('black');
        self.value = 'night';
        Links.SetColor('blue')
    
    }
}