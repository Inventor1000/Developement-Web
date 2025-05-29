const clc=document.getElementsByClassName('img1');
var N =[];
N[0]=0;
N[1]=0;
N[2]=0;
N[3]=0;
N[4]=0;
N[5]=0;
N[6]=0;
N[7]=0;
N[8]=0;
var z=0;
var a=1,B=[0,0,0,0,0,0,0,0,0];
clc[0].addEventListener('click',()=>{
    if(B[0]==0){
        a++;
        B[0]++;
        if(a % 2===0){
    N[0]=1;
    clc[0].style.backgroundImage ="url('Images/image4.jpg')";
    clc[0].style.backgroundSize ="50px";
    }else{
        clc[0].style.backgroundImage ="url('Images/image5.jpeg')";
        clc[0].style.backgroundSize ="50px"; 
    N[0]=2;
    }
    z=1;
    imgg();
}
    });
    clc[1].addEventListener('click',()=>{
        if(B[1]===0){
            a++;
            B[1]--;
            if(a % 2===0){
            N[1]=1;
        clc[1].style.backgroundImage ="url('Images/image4.jpg')";
        clc[1].style.backgroundSize ="50px";
        }else{
            clc[1].style.backgroundImage ="url('Images/image5.jpeg')";
            clc[1].style.backgroundSize ="50px";
            N[1]=2; 
        }
        z=2;
        imgg();
    }
        });
        clc[2].addEventListener('click',()=>{
            if(B[2]===0){
                a++;
                B[2]--;
                if(a % 2===0){
                    N[2]=1;
            clc[2].style.backgroundImage ="url('Images/image4.jpg')";
            clc[2].style.backgroundSize ="50px";
            }else{
                clc[2].style.backgroundImage ="url('Images/image5.jpeg')";
                clc[2].style.backgroundSize ="50px"; 
                N[2]=2;
            }
            z=3;
            imgg();
        }
            });
            clc[3].addEventListener('click',()=>{
                if(B[3]===0){
                    a++;
                    B[3]--;
                    if(a % 2===0){
                        N[3]=1;
                clc[3].style.backgroundImage ="url('Images/image4.jpg')";
                clc[3].style.backgroundSize ="50px";
                }else{
                    clc[3].style.backgroundImage ="url('Images/image5.jpeg')";
                    clc[3].style.backgroundSize ="50px"; 
                    N[3]=2;
                }
                z=4;
                imgg();
            }
                });
                clc[4].addEventListener('click',()=>{
                    if(B[4]===0){
                        a++;
                        B[4]--;
                        if(a % 2===0){
                            N[4]=1;
                    clc[4].style.backgroundImage ="url('Images/image4.jpg')";
                    clc[4].style.backgroundSize ="50px";
                    }else{
                        clc[4].style.backgroundImage ="url('Images/image5.jpeg')";
                        clc[4].style.backgroundSize ="50px";
                        N[4]=2; 
                    }
                    z=5;
                    imgg();
                }
                    });
                    clc[5].addEventListener('click',()=>{
                        if(B[5]===0){
                            a++;
                            B[5]--;
                            if(a % 2===0){
                                N[5]=1;
                        clc[5].style.backgroundImage ="url('Images/image4.jpg')";
                        clc[5].style.backgroundSize ="50px";
                        }else{
                            clc[5].style.backgroundImage ="url('Images/image5.jpeg')";
                            clc[5].style.backgroundSize ="50px"; 
                            N[5]=2;
                        }
                        z=6;
                        imgg();
                    }
                        });
                        clc[6].addEventListener('click',()=>{
                            if(B[6]===0){
                                a++;
                                B[6]--;
                                if(a % 2===0){
                                    N[6]=1;
                            clc[6].style.backgroundImage ="url('Images/image4.jpg')";
                            clc[6].style.backgroundSize ="50px";
                            }else{
                                clc[6].style.backgroundImage ="url('Images/image5.jpeg')";
                                clc[6].style.backgroundSize ="50px";
                                N[6]=2;
                            }
                            z=7;
                            imgg();
                        }
                            });
                            clc[7].addEventListener('click',()=>{
                                if(B[7]===0){
                                    a++;
                                    B[7]--;
                                    if(a % 2===0){
                                        N[7]=1;
                                clc[7].style.backgroundImage ="url('Images/image4.jpg')";
                                clc[7].style.backgroundSize ="50px";
                                }else{
                                    clc[7].style.backgroundImage ="url('Images/image5.jpeg')";
                                    clc[7].style.backgroundSize ="50px"; 
                                    N[7]=2;
                                }
                                z=8;
                                imgg();
                            } 
                                });
                                clc[8].addEventListener('click',()=>{
                                    if(B[8]===0){
                                        a++;
                                        B[8]--;
                                        if(a % 2===0){
                                            N[8]=1;
                                    clc[8].style.backgroundImage ="url('Images/image4.jpg')";
                                    clc[8].style.backgroundSize ="50px";
                                    }else{
                                        clc[8].style.backgroundImage ="url('Images/image5.jpeg')";
                                        clc[8].style.backgroundSize ="50px"; 
                                        N[8]=2;
                                    }
                                    z=9;
                                    imgg();
                                }
                                    });
function imgg(){
    for(let i=0;i<7;i=i+3){
   if(N[0+i]!=0 && N[0+i]===N[1+i] && N[1+i]===N[2+i]){
   switch(i){
   case 0:
 document.getElementById('img1').style.borderColor='aqua';
 document.getElementById('img2').style.borderColor='aqua';
 document.getElementById('img3').style.borderColor='aqua';
 for(let i=0;i<9;i++){
    B[i]=2;
 }
 break;
 case 3:
 document.getElementById('img4').style.borderColor='aqua';
 document.getElementById('img5').style.borderColor='aqua';
 document.getElementById('img6').style.borderColor='aqua';
 for(let i=0;i<9;i++){
    B[i]=2;
 }
 break;
 case 6:
 document.getElementById('img7').style.borderColor='aqua';
 document.getElementById('img8').style.borderColor='aqua';
 document.getElementById('img9').style.borderColor='aqua';
 for(let i=0;i<9;i++){
    B[i]=2;
 }
 break;
 }
   }
}
for(let i=0;i<3;i++){
    if(N[0+i]!=0 && N[0+i]===N[3+i] && N[3+i]===N[6+i]){
    switch(i){
    case 0:
  document.getElementById('img1').style.borderColor='aqua';
  document.getElementById('img4').style.borderColor='aqua';
  document.getElementById('img7').style.borderColor='aqua';
  for(let i=0;i<9;i++){
    B[i]=2;
  }
  break;
  case 1:
  document.getElementById('img2').style.borderColor='aqua';
  document.getElementById('img5').style.borderColor='aqua';
  document.getElementById('img8').style.borderColor='aqua';
  for(let i=0;i<9;i++){
    B[i]=2;
  }
  break;
  case 2:
  document.getElementById('img3').style.borderColor='aqua';
  document.getElementById('img6').style.borderColor='aqua';
  document.getElementById('img9').style.borderColor='aqua';
  for(let i=0;i<9;i++){
    B[i]=2;
  }
  break;
  }
    }
 }
 if(N[0]!=0 && N[4]===N[0] && N[4]=== N[8]){
    document.getElementById('img1').style.borderColor='aqua';
    document.getElementById('img5').style.borderColor='aqua';
    document.getElementById('img9').style.borderColor='aqua';
    for(let i=0;i<9;i++){
        B[i]=2;
    }
 }
 if(N[2]!=0 && N[4]===N[2] && N[4]=== N[6]){
    document.getElementById('img3').style.borderColor='aqua';
    document.getElementById('img5').style.borderColor='aqua';
    document.getElementById('img7').style.borderColor='aqua';
    for(let i=0;i<9;i++){
        B[i]=2;
    }
 }
}
var repeat=document.getElementById('icon1');
repeat.addEventListener('click',()=>{
for(let i=0;i<9;i++){
    if(z===i+1){
        clc[i].style.backgroundImage='url(Images/image3.jpg)';
       clc[i].style.backgroundSize ="50px"
B[i]=0;
N[i]=0;
imgg_1()
    }
}
});
function imgg_1(){
    for(let i=0;i<7;i=i+3){
   if(N[0+i]===0 || N[0+i]!=N[1+i] || N[1+i]!=N[2+i]){
   switch(i){
   case 0:
 document.getElementById('img1').style.borderColor='black';
 document.getElementById('img2').style.borderColor='black';
 document.getElementById('img3').style.borderColor='black';
 for(let i=0;i<9;i++){
    B[i]=0;
 }
 break;
 case 3:
 document.getElementById('img4').style.borderColor='black';
 document.getElementById('img5').style.borderColor='black';
 document.getElementById('img6').style.borderColor='black';
 for(let i=0;i<9;i++){
    B[i]=0;
 }
 break;
 case 6:
 document.getElementById('img7').style.borderColor='black';
 document.getElementById('img8').style.borderColor='black';
 document.getElementById('img9').style.borderColor='black';
 for(let i=0;i<9;i++){
    B[i]=0;
 }
 break;
 }
   }
}
for(let i=0;i<3;i++){
    if(N[0+i]===0 || N[0+i]!=N[3+i] || N[3+i]!=N[6+i]){
    switch(i){
    case 0:
  document.getElementById('img1').style.borderColor='black';
  document.getElementById('img4').style.borderColor='black';
  document.getElementById('img7').style.borderColor='black';
  for(let i=0;i<9;i++){
    B[i]=0;
  }
  break;
  case 1:
  document.getElementById('img2').style.borderColor='black';
  document.getElementById('img5').style.borderColor='black';
  document.getElementById('img8').style.borderColor='black';
  for(let i=0;i<9;i++){
    B[i]=0;
  }
  break;
  case 2:
  document.getElementById('img3').style.borderColor='black';
  document.getElementById('img6').style.borderColor='black';
  document.getElementById('img9').style.borderColor='black';
  for(let i=0;i<9;i++){
    B[i]=0;
  }
  break;
  }
    }
 }
 if(N[0]===0 || N[4]!=N[0] || N[4]!= N[8]){
    document.getElementById('img1').style.borderColor='black';
    document.getElementById('img5').style.borderColor='black';
    document.getElementById('img9').style.borderColor='black';
    for(let i=0;i<9;i++){
        B[i]=0;
    }
 }
 if(N[2]===0 || N[4]!=N[2] || N[4]!= N[6]){
    document.getElementById('img3').style.borderColor='black';
    document.getElementById('img5').style.borderColor='black';
    document.getElementById('img7').style.borderColor='black';
    for(let i=0;i<9;i++){
        B[i]=0;
    }
 }
}
