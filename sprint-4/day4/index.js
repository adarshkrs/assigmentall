let num=919;
 num=num.toString();
 let rev="";

 function reverse(num){
    let N=num.length-1;
    for(let i=N;i>=0;i--){
      rev=rev+num[i];
    }
    console.log(rev);
 }
    reverse(num);

    if(num===rev){
        console.log("it is an pallindrome");
    }
    else{
        console.log("it is not pallindrome");
    }
