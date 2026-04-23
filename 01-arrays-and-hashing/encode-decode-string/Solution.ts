class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]) {
    let res = "";
    for (const s of strs) {
      res += `${s.length}#${s}`;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string) {
    const result: string[] = [];
    let i = 0;

    while (i < str.length) {
      const lengthStart = i + 1; // Skip the '#' character
      let lengthEnd = lengthStart;

      // Find the end of the length number
      while (
        lengthEnd < str.length &&
        str[lengthEnd] >= "0" &&
        str[lengthEnd] <= "9"
      ) {
        lengthEnd++;
      }

      const length = parseInt(str.slice(lengthStart, lengthEnd), 10);
      const stringStart = lengthEnd;
      const stringEnd = stringStart + length;

      result.push(str.slice(stringStart, stringEnd));
      i = stringEnd; // Move to the next encoded string
    }
    return result;
  }
}

const solution = new Solution();
//console.log(solution.encode(["Hello", "World"])); // "#5Hello#5World"
console.log("decode", solution.decode("#5Hello#5World")); // ["Hello", "World"]
