function circularArrayRotation(a, k, queries) {
    // Write your code here


let newarr = [];
let resultarr = [];


//rotate array k number of times and add the last k time array ‘a’ to a new array ‘newarr’ 


for (let i = 0 ; i < k ; i++){
 a.unshift(a.pop()) ;
 newarr = a;
}


// Loop through the array of indexes ‘queries’ , match the ‘queries’ indexes to the array ‘newarr’ and add them to a new array ‘resultarr’ 


for(let i = 0; i < queries.length; i++){
  resultarr.push(newarr[queries[i]]);
  }


return resultarr


}

