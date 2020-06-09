var names=["Aib ","Joe ","Feroz ","John ","Het ","Kevin ","Jeson ","Rudh ","Tom "];
for(var name in names){
    console.log(names[name]);
}
const result=names.map(([v])=>v);
//console.log(result);
console.log("After Sorting Names => ")
for(var i=0;i<result.length;i++){
    //console.log(result[i]);
    if(result[i]=="J"){
        console.log("GoodBye "+names[i]);
    }
    else{
        console.log("Hello "+names[i]);
    }
}