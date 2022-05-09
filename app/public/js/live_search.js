document.querySelector('#elastic').oninput = function(){
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.product')
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else{
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}

let arr = [1, 3, 5, 7, 8, 9]; 

function iterativeFunction(arr, x) { 
   
    let start=0, end=arr.length-1; 
          
    // Iterate while start not meets end 
    while (start<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 
   
        // If element is present at mid, return True 
        if (arr[mid]===x) return mid; 
  
        // Else look in left or right half accordingly 
        else if (arr[mid] < x)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return false; 
} 
console.log(iterativeFunction(arr,5));

/*////////////////////////////////////////////////////////////////////////////*/





/*let arr = [1,20,30,40,50,60,77,89,91];

function binarySearch(arr, value) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    while(low <= high){
        mid = Math.floor((high + low) / 2)
        if(arr[mid] == value){
            return arr[mid];
        }else if(value > arr[mid]){
            low = mid +1;
        } else {
            high = mid -1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, 30));



/*let arr = [1,20,33,40,50,60,70,80,90];

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem && start <= end) {
        if(arr[middle] < elem) {
            start = middle + 1;
        } else {
            end = middle - 1;
        } middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}
console.log(binarySearch(arr, 2));

/*function binarySearch(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
       var guess;
       while(min<=max){
           guess = Math.floor((min + max)/2);
           if(array[guess]===targetValue){
               return guess;
           }else if(array[guess]<targetValue){
               min = guess+1;
           }else{
               max = guess -1;
           }// end of else
       }
    return -1;
   };
   console.log(binarySearch(array, 2)); */
   
   /*let arr = [12,20,35,40,55,66,78,83,90];

function binarySearch(arr, value) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    while(low <= high){
        mid = Math.floor((high + low) / 2)
        if(arr[mid] == value){
            return arr[mid];
        }else if(value > arr[mid]){
            low = mid +1;
        } else {
            high = mid -1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, 5));*/