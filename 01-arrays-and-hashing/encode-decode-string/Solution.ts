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
      // find the separator '#'
      let j = i;
      while (str[j] !== "#") {
        j++;
      }

      // length of the string
      const length = parseInt(str.slice(i, j));

      // extract the string
      const st = str.slice(j + 1, j + 1 + length);
      result.push(st);

      // move pointer
      i = j + 1 + length;
    }

    return result;
  }
}

const solution = new Solution();
//console.log(solution.encode(["Hello", "World"])); // "#5Hello#5World"
console.log("decode", solution.decode("#5Hello#5World")); // ["Hello", "World"]
