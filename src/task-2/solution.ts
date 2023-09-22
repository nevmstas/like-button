class Solution {
    public solution(S: string): number {
      const n: number = S.length;
      const charCount: number[] = new Array(26).fill(0); // Count of each character in the string
      let left: number = 0; // Left pointer of the sliding window
      let maxBlocks: number = 0; // Maximum number of blocks
      let maxLen: number = 0; // Maximum length of the word
  
      for (let right: number = 0; right < n; right++) {
        const currentChar: string = S.charAt(right);
        charCount[currentChar.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  
        // If the number of distinct characters in the window exceeds 3, move the left pointer
        while (this.countDistinctChars(charCount) > 3) {
          const leftChar: string = S.charAt(left);
          charCount[leftChar.charCodeAt(0) - 'a'.charCodeAt(0)]--;
          left++;
        }
  
        // Calculate the maximum length and update if needed
        const windowLen: number = right - left + 1;
        if (windowLen > maxLen) {
          maxLen = windowLen;
          maxBlocks = this.countDistinctChars(charCount);
        } else if (windowLen === maxLen) {
          maxBlocks = Math.min(maxBlocks, this.countDistinctChars(charCount));
        }
      }
  
      return maxLen;
    }
  
    private countDistinctChars(charCount: number[]): number {
      let count: number = 0;
      for (const i of charCount) {
        if (i > 0) {
          count++;
        }
      }
      return count;
    }
  }
  
  const solution = new Solution();
  console.log(solution.solution("aabacbba"));     // Output: 6
  console.log(solution.solution("aabxbaba"));     // Output: 6
  console.log(solution.solution("xxxyxxyyyxyyy"));// Output: 11
  console.log(solution.solution("atheaxbtheb"));  // Output: 5