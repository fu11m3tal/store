/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
*/




function diagonalDifference(arr) {
    return Math.abs(arr.reduce((accumulator, value, i, array) => {
        return accumulator += (arr[i][i] - arr[i][(array.length -1) - i]);
    }, 0))
  }
  
function diagonalDifference(arr) {
    var rows = arr.length-1;
    var columns = arr[0].length-1;
    var set1 = [];
    var set2 = [];
    for(var i = 0; i <= rows; i++) {
        set1.push(arr[i][i]);
        set2.push(arr[i][columns - i]);
    }
    var result = 0;
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i <= rows; i++) {
        sum1 += set1[i];
    }

    for(var i = 0; i <= rows; i++) {
        sum2 += set2[i];
    }
    return Math.abs(sum1 - sum2);
}