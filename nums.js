<script>

function segregate(arr,size)
{
     let j = 0, i;
        for (i = 0; i < size; i++) {
            if (arr[i] <= 0) {
                let temp;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                // increment count of non-positive
                // integers
                j++;
            }
        }
 
        return j;
}

 /* Find the smallest positive missing
       number in an array that contains
       all positive integers */
function findMissingPositive(arr,size)
{
    let i;
 
        // Mark arr[i] as visited by making
        // arr[arr[i] - 1] negative. Note that
        // 1 is subtracted because index start
        // from 0 and positive numbers start from 1
        for (i = 0; i < size; i++) {
            let x = Math.abs(arr[i]);
            if (x - 1 < size && arr[x - 1] > 0)
                arr[x - 1] = -arr[x - 1];
        }
 
        // Return the first index value at which
        // is positive
        for (i = 0; i < size; i++)
            if (arr[i] > 0)
                return i + 1; // 1 is added because indexes
        // start from 0
 
        return size + 1;
}

/* Find the smallest positive missing
       number in an array that contains
       both positive and negative integers */
function findMissing(arr,size)
{

    // First separate positive and
        // negative numbers
        let shift = segregate(arr, size);
        let arr2 = new Array(size - shift);
        let j = 0;
        for (let i = shift; i < size; i++) {
            arr2[j] = arr[i];
            j++;
        }
        
        // Shift the array and call
        // findMissingPositive for
        // positive part
        return findMissingPositive(arr2, j);
}

// Driver code
let arr = [7, 8, 9, 11, 12];
let arr_size = arr.length;
let  missing = findMissing(arr, arr_size);

document.getElementById("demo").innerHTML =
"The smallest positive missing number is " + missing;

// This code is contributed by rag2127
</script>