function passwordcheck(str){
  var arrConsecutive=[];
  
  if(str.length<6){
    console.log("at least 6 characters")
      console.log("pending char "+ (Math.abs(str.length-6)));
    
    
  }
  if(str.length>20){
     console.log("canot be more than 20 characters")
  }if(str.length>=6 && str.length<=20){
      var upper = 0,
          lower = 0,
          number = 0,
          special = 0;
        for (var i = 0; i < str.length; i++)
        {
          if (str.charAt(i) >= "A" && str.charAt(i) <= "Z") upper++;
          else if (str.charAt(i) >= "a" && str.charAt(i) <= "z") lower++;
          else if (str.charAt(i) >= "0" && str.charAt(i) <= "9") number++;
          else special++;
        }
    
    if(upper>=1 &&
          lower>=1 &&
          number>=1 &&
          special>=1){

      for(var i=0;i<str.length;i++){
      for(var j=i+1;j<str.length;j++){
          arrConsecutive.push(StringCharCheck(str.substring(i,j)));

           }   
  }
  
        console.log(arrConsecutive.includes(true)?"3 cons present":"password.ok");
    }else{
       console.log("must contains at least one lowercase,uppercase,or number");

    }
    }
  }
function StringCharCheck(strg){
  if(strg.length>=3){
    return strg.split("").every(c=>c===strg[0]);
  }
  
}
passwordcheck("ddssddSsS@3");
