var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
//simplified for loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var aSport = sports_1[_i];
    if (aSport == "Swimming") {
        console.log(aSport + " << My favourite sport");
    }
    else {
        console.log(aSport);
    }
}
