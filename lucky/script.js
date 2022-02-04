$(document).ready(function(){
   var myArray=['1','2','3','4','5','6','7','8','9','10',
 '11','12','13','14','15','16','17','18',
 '19','20','21','22','23','24','25','26',
 '27','28','29','30','31','32','34','35',
 '36','37','38','39','40','41','42','43',
 '44','45','46','47','48','49'];
                  var choicea=[];
                  var choiceb=[];
                  var choicec=[];
                  var choiced=[];
                  var choicee=[];
                  var choicef=[];
                  var a=(Math.floor(Math.random()*48));
                  u=myArray.splice(a,1);
                  var b=(Math.floor(Math.random()*47));
                  v=myArray.splice(b,1);
                  var c=(Math.floor(Math.random()*46));
                  w=myArray.splice(c,1);
                  var d=(Math.floor(Math.random()*45));
                  x=myArray.splice(d,1);
                  var e=(Math.floor(Math.random()*44));
                  y=myArray.splice(e,1);
                  var f=(Math.floor(Math.random()*43));
                  z=myArray.splice(f,1);
choicea.splice(1,0,u);
choiceb.splice(1,0,v);
choicec.splice(1,0,w);
choiced.splice(1,0,x);
choicee.splice(1,0,y);
choicef.splice(1,0,z);
  if(choicea<10){$('#one').prepend('<h1 style="left:30px;">'+choicea+'</h1>');}
  else{
    $('#one').prepend('<h1>'+choicea+'</h1>');}
 if(choiceb<10){$('#two').prepend('<h1 style="left:30px;">'+choiceb+'</h1>');}
  else{
    $('#two').prepend('<h1>'+choiceb+'</h1>');}
 if(choicec<10){$('#three').prepend('<h1 style="left:30px;">'+choicec+'</h1>');}
  else{
    $('#three').prepend('<h1>'+choicec+'</h1>');}
 if(choiced<10){$('#four').prepend('<h1 style="left:30px;">'+choiced+'</h1>');}
  else{
    $('#four').prepend('<h1>'+choiced+'</h1>');}
 if(choicee<10){$('#five').prepend('<h1 style="left:30px;">'+choicee+'</h1>');}
  else{
    $('#five').prepend('<h1>'+choicee+'</h1>');}
 if(choicef<10){$('#six').prepend('<h1 style="left:30px;">'+choicef+'</h1>');}
  else{
    $('#six').prepend('<h1>'+choicef+'</h1>');}

  $('div').animate({width:'100px',height:'100px'},2500);
  $('#one').animate({left:'10px',top:'200px',fontSize:'1em'},2500);
  $('#two').animate({left:'250px',top:'100px'},2500);           $('#three').animate({left:'80px',top:'120px'},2500);  
  $('#four').animate({left:'150px',top:'30px'},2500);
  $('#five').animate({left:'20px',top:'40px'},2500);
  $('#six').animate({left:'205px',top:'280px'},2500);
  $('#luck').animate({left:'170px',top:'180px'},3000);
var ctx=getElementById('heart').getContext('2d');
  ctx.strokeStyle='red';
  ctx.lineWidth=9;
  ctx.moveTo(50,50);
  ctx.lineTo(20,20);
  ctx.lineTo(40,40);
  ctx.stroke();
});
function reDraw(){var move=
    Math.floor((Math.random()*200)+1)+"px";
                  $('#one').animate({
                    fontSize:'5em', width:'150px',height:'150px',borderRadius:'75px',left:move},1000);
                  $('#two').animate({
                    fontSize:'4.5em', width:'150px',height:'150px',borderRadius:
                    '75px',
                    top:move
                    
                  },1500);
                  
                  $('#luck').animate({
                    fontSize:'2em', width:'200px',height:'200px',borderRadius:'100px',left:move*2},2000);
                  
  $('div').animate({fontSize:'0em',
                    width:'0px',
                    height:'0px',
                    left:'150px',
                    top:'100px'},2500);
 
 




                 }