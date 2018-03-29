window.onload=function(){
	var iUpload = document.getElementById('upload');
	var ali1 = document.getElementsByClassName('li1');
	var aLi = iUpload.getElementsByTagName('li');
	for(var  i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick = function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
				ali1[i].style.display='none';
			}
            this.className = 'item';
			ali1[this.index].style.display = 'block';
		};
		
	}



	var iUpload2 = document.getElementById('upload2');
	var aLi2 = iUpload2.getElementsByTagName('li');
	var aTab1 = document.getElementsByClassName('tab1');
	for(var i=0;i<aLi2.length;i++){
		aLi2[i].index=i;
		aLi2[i].onclick = function(){
			for(var i=0;i<aLi2.length;i++){
				aLi2[i].className = '';
				aTab1[i].style.display = 'none';

			};
			this.className = 'item';
			aTab1[this.index].style.display = 'block';

		};
	}


	// 五角星评分
	var wjx_none = ''; // 空心五角星
    var wjx_sel = '';// 实心五角星

    var ant = document.getElementById('ant-form-assess');
    var aLi3 = ant.getElementsByTagName('li');
     

     var num = finalnum = tempnum=0;
     function fnShow(num){
     	finalnum = num || tempnum;
     	for(var i=0;i<aLi3.length;i++){
             aLi3[i].innerText= i<finalnum ? "★":"☆";  
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


      var ant1 = document.getElementById('ant-form-assess2');
       var aLi4 = ant1.getElementsByTagName('li');
       var num1 = finalnum = tempnum=0;
        function fnShow2(num1){
     	finalnum = num1 || tempnum;
     	for(var i=0;i<aLi4.length;i++){
             aLi4[i].innerText= i<finalnum ? "★":"☆";  
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

    // 烹饪部分
    var iCenter = document.getElementById('six_center');
	var aLi5 = iCenter.getElementsByTagName('li');
	var aSix_tab = document.getElementsByClassName('six_tab');
	for(var i=0;i<aLi5.length;i++){
		aLi5[i].index=i;
		aLi5[i].onclick = function(){
			for(var i=0;i<aLi5.length;i++){
				aLi5[i].className = '';
				aSix_tab[i].style.display = 'none';

			};
			this.className = 'item';
			aSix_tab[this.index].style.display = 'block';

		};
	}
    
     var left =document.getElementById('six_left');
     var right = document.getElementById('six_right');
     var ul = iCenter.getElementsByTagName('ul')[0];
     
     left.onclick =function(){
     		ul.style.marginLeft=-107+"px";
     		ul.style.transition = 0.5+"s";
     }	
     right.onclick =function(){
     	ul.style.marginLeft=0+"px";
     	ul.style.transition = 0.5+"s";
     }

     // 审批意见部分

     var select = document.getElementById('ant-select');
     var agree = document.getElementById('agree');
     var gLi = agree.getElementsByTagName('li');
       select.onclick = function(){
       	if(agree.style.display){
             agree.style.display="";
       	}else{
       		 agree.style.display="block";

       	}
              
       }
     for(var i=0;i<gLi.length;i++){
     	gLi[i].index=i;
     	gLi[i].onclick = function(){
               select.innerHTML=this.innerHTML;
               agree.style.display="";
     	}
     }

     // 确认按钮部分
     var btn = document.getElementById('but');
     var aSp = document.getElementsByClassName('d');
     btn.onclick = function(){
     	if(select.innerHTML ==='同意'){
     		for(var i=0;i<aSp.length;i++){
     			addClass(aSp[i],'T');
     			


     		}
     	}
     }
};