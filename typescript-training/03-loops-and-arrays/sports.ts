let sportsOne : string[] =["Golf", "Cricket", "Tennis", "Swimming"];

for(let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}

//simplified for loop

for(let aSport of sportsOne){
    if(aSport == "Swimming"){
        console.log(aSport + " << My favourite sport");
    }else{
        console.log(aSport);
    }
}