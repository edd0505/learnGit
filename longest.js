<script>
let x = 5;
let y = 6;
let z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;
</script>

<script>
 
// JavaScript program for the above approach
 
// Function to find and print longest
// substring without repeating characters.
function findLongestSubstring(str)
{
    var i;
    var n = str.length;
    var string;
 
    // starting point of current substring.
    var st = 0;
 
    // length of current substring.
    var currlen;
 
    // maximum length substring without repeating
    // characters.
    var maxlen = 0;
 
    // starting index of maximum length substring.
    var start;
 
    // Hash Map to store last occurrence of each
    // already visited character.
    var pos = new Map();
 
    // Last occurrence of first character is index 0;
    pos.set(str[0], 0);
 
    for (var i = 1; i < n; i++) {
 
        // If this character is not present in hash,
        // then this is first occurrence of this
        // character, store this in hash.
        if (!pos.has(str[i]))
            pos.set(str[i],i) ;
 
        else {
            // If this character is present in hash then
            // this character has previous occurrence,
            // check if that occurrence is before or after
            // starting point of current substring.
            if (pos.get(str[i]) >= st) {
 
                // find length of current substring and
                // update maxlen and start accordingly.
                currlen = i - st;
                if (maxlen < currlen) {
                    maxlen = currlen;
                    start = st;
                }
 
                // Next substring will start after the last
                // occurrence of current character to avoid
                // its repetition.
                st = pos.get(str[i]) + 1;
            }
 
            // Update last occurrence of
            // current character.
            pos.set(str[i], i);
        }
    }
 
    // Compare length of last substring with maxlen and
    // update maxlen and start accordingly.
    if (maxlen < i - st) {
        maxlen = i - st;
        start = st;
    }
 
    // The required longest substring without
    // repeating characters is from str[start]
    // to str[start+maxlen-1].
    
    return str.substr(start,maxlen).length;
}
 
var str = "abcabcbb";

document.getElementById("demo").innerHTML =
"string: " + findLongestSubstring(str);
 
// This code is contributed by SoumikMondal
 
</script>