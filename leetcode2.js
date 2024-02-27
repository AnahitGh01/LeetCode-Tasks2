//Problem 1

// This function adds two 
// binary strings and return
// result as a third string
function addBinary(a, b)
{
     
    //Turn each string into array and reverse them
    let result = a.split("").reverse();
    let plus = b.split("").reverse();
    let carry = 0;      //initialize the carry
   


    /**We will continue looping until at least one of the conditions is true:

    1.Haven’t reached the end of the result array;
    2.Haven’t reached the end of the plus array;
    3.Carryover — r exists or more than 1 
    
    Once in the loop. we will add each item of the array together and add carryover to it. || is used to change any undefined to 0 in formula.*/
    for (let i = 0, j = 0; i <= result.length-1 || j<=plus.length-1 || carry > 0; i++, j++) {
        let sum = (parseInt(result[i])||0) + (parseInt(plus[j])||0) + carry


        /*Check if we have a carry-over (sum > 1), then we need to update "carry" to hold carry-over.
        Otherwise, we add our sum to the result array and reset "carry".*/
        if (sum>1) {
            result[i]=sum%2
            carry = 1;
        } else {
            result[i]=sum;
            carry=0;
        }
        
    }
    
    return result.reverse().join("")   //reverse resulting array and merge into string

}
 
//Driver code
var a = "1101", b="100";
 
console.log(addBinary(a, b)); //output: 10001



/*Problem 2

// Returns floor of square root of x
function floorSqrt(x)
{
      if (x == 0 || x == 1)
        return x;
 
    // Starting from 1, try all
    // numbers until i*i is
    // greater than or equal to x.
    let i = 1;
    let result = 1;
     
    while (result <= x)
    {
        i++;
        result = i * i;
    }
    return i - 1;   //The floor of the square root of the number 
}
 
// Driver Code
let x = 15;
console.log(floorSqrt(x));  //output: 3*/


/*Problem 3
// JavaScript program to count the number of ways to reach at top
// When a person climbing on stairs
 
function countWays(n) {
    // declaring  two variables to store the count
    let prev = 1;
    let prev2 = 1;
    // Running for loop to count all possible ways
    for (let i = 2; i <= n; i++) {
        let curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}
 
let n = 5;
console.log("Number of Ways: ", countWays(n)); //output: 8 */



/*Problem 4
function removeDuplicates (head) {
   
    let current = head        // sets current node to be head of list
   
    while (current !== null && current.next !== null) {       // runs until we are at the end of the list
      
        if (current.val === current.next.val){               // checks to see if the current value and the next value are the same
            
            current.next = current.next.next               // skips over the duplicate and the next value becomes 2x next
                                                          // current value and the next value are not the same
        } else {  
            current = current.next       // moves to the next node on the list to run through the while again
        }
    
    }
    
    return head    // returns the linked list with no duplicates
}; */


