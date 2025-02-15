function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        target.style.backgroundColor ='black';
        target.style.color ='white';
        self.value = 'day';
        var i=0;
        var alist = document.querySelectorAll('a');
        while(i<alist.length){
         alist[i].style.color = 'red';
         i=i+1;
    }
    
    } else {
        target.style.backgroundColor ='white';
        target.style.color ='black';
        self.value = 'night';
        var i=0;
        var alist = document.querySelectorAll('a');
        while(i<alist.length){
            alist[i].style.color = 'blue';
            i=i+1;
        }
    
    }
}