/**
 * Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {

    return s.split("") // transform to array
            .filter( (ch , i) => !(s.substring(i+1, s.length).split('')
            .includes(ch)))//end filter
            .length // length of filter result
}

console.log(lengthOfLongestSubstring("abbdbb"));