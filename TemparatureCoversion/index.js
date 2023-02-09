document.querySelector("#button").onclick=function(){
   var input=document.querySelector("#input").value;
    if(document.querySelector("#ctemp").checked){
        var ans= toCelcius(input);
        document.querySelector("#answer").innerHTML=ans+"°C";
    }else if(document.querySelector("#ftemp").checked){
        var ans= toFarenheit(input);
        document.querySelector("#answer").innerHTML=ans+"°F";
    }
}
function toCelcius(input){
    return (input-32)*(5/9);
}
function toFarenheit(input){
    return input*(9/5)+32;
}