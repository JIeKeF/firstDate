window.onload = function(){
    var iImg = document.getElementById('img_top');
    var aLi = iImg.getElementsByTagName('li');
    var aUp = document.getElementsByClassName('up_ce');
    for(var  i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick = function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
				aUp[i].style.display='none';
			}
            this.className = 'one';
			aUp[this.index].style.display = 'block';
		};
		
    }
    var iVideo = document.getElementById('video_top');
    var aLi1 = iVideo.getElementsByTagName('li');
    var aLink = document.getElementsByClassName('link');
    for(var  i=0;i<aLi1.length;i++){
		aLi1[i].index=i;
		aLi1[i].onclick = function(){
			for(var i=0;i<aLi1.length;i++){
				aLi1[i].className='';
				aLink[i].style.display='none';
			}
            this.className = 'one';
			aLink[this.index].style.display = 'block';
		};
		
    }


    var xen = document.getElementById('xen');
    var aLi3 = xen.getElementsByTagName('li');
     

     var num = finalnum = tempnum=0;
     function fnShow(num){
     	finalnum = num || tempnum;
     	for(var i=0;i<aLi3.length;i++){
             aLi3[i].className= i<finalnum ? "light":"";  
     	}
    };
    for(var i = 1;i<aLi3.length+1;i++){

    	aLi3[i-1].index = i;
    	aLi3[i-1].onmouseover = function(){
    		fnShow(this.index);
    	}
    	 aLi3[i-1].onmouseout = function(){
    		fnShow(0);
    	}
    	aLi3[i-1].onclick = function(){
    		tempnum = this.index;
    	}
    };
    

    var xen1 = document.getElementById('xen1');
    var aLi4 = xen1.getElementsByTagName('li');
    var num1 = finalnum = tempnum=0;
     function fnShow2(num1){
      finalnum = num1 || tempnum;
      for(var i=0;i<aLi4.length;i++){
          aLi4[i].className= i<finalnum ? "light":"";  
      }
 };
 for(var i = 1;i<aLi4.length+1;i++){

     aLi4[i-1].index = i;
     aLi4[i-1].onmouseover = function(){
         fnShow2(this.index);
     }
      aLi4[i-1].onmouseout = function(){
         fnShow2(0);
     }
     aLi4[i-1].onclick = function(){
         tempnum = this.index;
     }
 };
};