import { describe, expect, test } from "bun:test";

describe("part 1", () => {
  function isPalindrome(str: string) {
    const length = str.length;
    if (length % 2 === 1) {
      return false;
    }

    const mid = length / 2;

    const left = str.substring(0, mid);
    const right = str.substring(mid, length);

    return left === right;
  }

  function solve(input: string, debug = false) {
    const ranges = input.split(",");

    let answer = 0;

    for (const range of ranges) {
      const [begin, end] = range.split("-").map(Number) as [number, number];

      let current = begin;
      while (current <= end) {
        if (isPalindrome(current.toString())) {
          answer += current;
        }

        current++;
      }

      if (debug) {
        console.log({ range, begin, end });
      }
    }

    return answer;
  }

  test("example", () => {
    const answer = solve(
      "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"
    );

    expect(answer).toBe(1227775554);
  });

  test("exam", () => {
    const answer = solve(
      "16100064-16192119,2117697596-2117933551,1-21,9999936269-10000072423,1770-2452,389429-427594,46633-66991,877764826-877930156,880869-991984,18943-26512,7216-9427,825-1162,581490-647864,2736-3909,39327886-39455605,430759-454012,1178-1741,219779-244138,77641-97923,1975994465-1976192503,3486612-3602532,277-378,418-690,74704280-74781349,3915-5717,665312-740273,69386294-69487574,2176846-2268755,26-45,372340114-372408052,7996502103-7996658803,7762107-7787125,48-64,4432420-4462711,130854-178173,87-115,244511-360206,69-86"
    );

    console.log("day 2 part 1 answer", answer);

    expect(answer).toBeDefined();
  });
});

describe("part 2", () => {
  function isAnswer(str: string) {
    let index = 0;
    let current = str[index]!;

    while (current != str) {
      const result = str.replaceAll(current, "");

      if (result === "") {
        // console.log({ current, str });
        return true;
      }

      index++;
      current += str[index]!;
    }

    return false;
  }

  function solvePart2(input: string) {
    const ranges = input.split(",");

    let answer = 0;

    for (const range of ranges) {
      const [begin, end] = range.split("-").map(Number) as [number, number];

      let current = begin;
      while (current <= end) {
        if (isAnswer(current.toString())) {
          // console.log({ range, begin, end, current });
          answer += current;
        }

        current++;
      }
    }

    return answer;
  }

  test("example", () => {
    const answer = solvePart2(
      "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"
    );

    expect(answer).toBe(4174379265);
  });

  test("exam", () => {
    const answer = solvePart2(
      "16100064-16192119,2117697596-2117933551,1-21,9999936269-10000072423,1770-2452,389429-427594,46633-66991,877764826-877930156,880869-991984,18943-26512,7216-9427,825-1162,581490-647864,2736-3909,39327886-39455605,430759-454012,1178-1741,219779-244138,77641-97923,1975994465-1976192503,3486612-3602532,277-378,418-690,74704280-74781349,3915-5717,665312-740273,69386294-69487574,2176846-2268755,26-45,372340114-372408052,7996502103-7996658803,7762107-7787125,48-64,4432420-4462711,130854-178173,87-115,244511-360206,69-86"
    );

    console.log("day 2 part 2 answer", answer);

    expect(answer).toBeDefined();
  });
});
