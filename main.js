//ans 1
/*let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]; 
let num = 5; 
 
//elements larger than a number num 
function getElements(arr, num) { 
for (let i = 0; i < arr.length; i++) { 
if (arr[i] > num) { 
console.log(arr[i]);g 
} 
} 
} 
 
getElements(arr, num);*/
//ans 2
/*let  str ="abcdabcdefgggh";
function getunique(str) {
    let ans ="";
    for (let i = 0; i < str.length; i++) {
        let currchar = str[i];
        if(ans.indexOf(currchar) == -1){
            ans += currchar;
        }
    }
    return ans;  // Moved inside the function
}

// Example usage:
console.log(getunique("abcgggghhhhiiikkkmlnmb"));*/
//ans3
/*let country = ["Australia", "German", "united state of amerca"];
function maxlength(country) {
    let maxIndex = 0;
    for (let i = 1; i < country.length; i++) {
        if (country[i].length > country[maxIndex].length) {
            maxIndex = i;
        }
    }
    return country[maxIndex];
}
console.log(maxlength(country));*/
//ans 4
/*let str ="abcedg";
function countvow(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let str1 = str[i];
        if(str1 == "a" || str1 == "e" || str1 == "i"|| str1 == "o"||str1 == "u"){
            count++;
        }
    }
    return count;
}
console.log(countvow(str),"is vowel number");*/
//ans 5
let start = prompt("enter the starting number");
let end = prompt("enter the ending number");
function generatenum(start,end) {
    //let diff =end-start;
    let num =Math.floor(Math.random()*end)+1;
    return num;
}
console.log(generatenum(start,end));