
//1//
let ages = [3,9,23,64,2,8,28,93];

console.log(ages[ages.length-1]-ages[0])

ages.push(101);
console.log(ages[ages.length-1]-ages[0])

let sum = 0;
let count =0;

for(let i =0;i< ages.length;i++){
    if(ages[i] !==undefined){
        count++;
        sum +=ages[i];
    }
}

console.log(sum/count)


//2//
let names=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let namesSum =0;

    for (i=0;i<names.length;i++){
        namesSum=namesSum+names[i].length;

    }

    console.log(namesSum/names.length);

var con =names[0];

for (i=1;i<names.length;i++){

    con = con.concat(" ",names[i]);
}

console.log(con); 



//3//

//you would use (length-1) to access the last element

//4//

//you would use [0] to access the first element

//5//

let nameLengths=[]

    for (i=0;i<names.length;i++){
        nameLengths[i]=names[i].length;
    }

    console.log(nameLengths);

//6//

nameLengthsSum=0;
for (i=0;i<nameLengths.length;i++){

    nameLengthsSum=nameLengthsSum +nameLengths[i];

}
    console.log(nameLengthsSum);


//7//

    function system(word, n){
        let con=word;
        for (i=1;i<n;i++){
            con = con.concat(word);
        }
        return con;
    }
console.log(system("Hello",3));

//8///

    function fullName(firstName, lastName){
        return firstName + ' ' + lastName
    }

    console.log(fullName("Erick", "Garcia"))

//9//


function array100(arr){

    array100Sum=0;
    for(i=0;i<arr.length;i++){
        array100Sum=array100Sum + arr[i];
    }

    if (array100Sum>100){
        return true;
    }
    else{
        return false;
    }
}

//10//

function arrayAvg(array){
    arrayAvgSum=0;
    for(i=0;array.length;i++){
        arrayAvgSum=arrayAvgSum + arr[i];
    }
    return (arrayAvgSum/array.length);
}

//11//

function compareAvg(arr1,arr2){
    if (average(arr1)>average(arr2)){
        return true;
    }
    else {
        return false;
    }
}

//12//

function willBuyDrink(isHotOutside, moneyInPocket ){
    if ((isHotOutside)&&(moneyInPocket>10.50)){
        return true;
    }
    else{
        return false;
    }
}

//13//

function isPrime(n){
    for (let i =2; i<n;i++){
        if (n%i == 0){
            return "Not A Prime Number";
        }
    }
    return " A Prime Number";
}

var answer = isPrime(9);
console.log(answer);
// This function checks if the number inputed is a prime or not a prime number
// I created this so you can check any number easily and not have to struggle weather it's a prime or not