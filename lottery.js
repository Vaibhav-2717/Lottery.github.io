
function getRandomindex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

function getRandomNum(length, max, min) {
    const resultsArr = [];
    for (let i = 0; i <length; i++) {
      const newNumber = Math.floor(Math.random() * (max - min)) + min;
      resultsArr.includes(newNumber) ? length += 1 : resultsArr.push(newNumber);
    }
    return resultsArr;
  }
   var winnum,rnum;
   function startgame(){
    var num=document.getElementById("rnum").value;
    if(num ==""){
      alert("please input number for start game");
    }else{
     rnum=parseInt(num);
     if(rnum<1 || rnum>100){
       alert("please input number within range");
     }else if(rnum>94){
       winnum=getRandomNum(11,rnum+1,rnum-11);
       document.getElementById('username').innerHTML="you can play the game";
     }else if(rnum<=6){
      winnum=getRandomNum(11,rnum+11,rnum);
      document.getElementById('username').innerHTML="you can play the game";
     }else{
     winnum=getRandomNum(11,rnum+6,rnum-5);
     document.getElementById('username').innerHTML="you can play the game";
     }
    }
  }

  function wingame(){
    var num=document.getElementById("rnum").value;
    if(num==""){
      alert("please input number for start game");
    }else{
  var randindex=getRandomindex(0,winnum.length-1);
   var randnum=winnum[randindex];
     if(winnum.length==0){
      document.getElementById('username').innerHTML="All 10 chances end";
      return;
     }
    if(rnum ==randnum){
        document.getElementById('username').innerHTML="you win😏😏😏";
        console.log("you win ");
    }else{
      document.getElementById('username').innerHTML="you loose😕😕";
    }
    winnum.splice(randindex,1);
    console.log(winnum);
  }
}

  










