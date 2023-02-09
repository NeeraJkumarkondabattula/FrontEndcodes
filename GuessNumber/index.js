var ans=Math.floor((Math.random()*100)+1);
var gusstime=0;
document.querySelector("#button").onclick=function(){
  var guss=document.querySelector("#answer").value;
  gusstime++;
  if(guss==ans){
    document.querySelector("#Display").innerHTML=`correct you take ${gusstime} Chances to Guss Number`;
  }else if(guss<ans){
    document.querySelector("#Display").innerHTML="Bigger try Again!";
  }else{
    document.querySelector("#Display").innerHTML="Smaller try Again!";
  }
}