import { describe, expect, test } from "vitest";
import { capitalize, slugify, truncate, countWords } from "../strings";

describe("strings", () => {
  describe("capitalize", () => {
    test("should capitalize normal string", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    test("should handle empty string", () => {
      expect(capitalize("")).toBe("");
    });

    test("should capitalize single character", () => {
      expect(capitalize("a")).toBe("A");
    });
  });

  describe("slugify", () => {
    test("should slugify normal string", () => {
      expect(slugify("Hello World")).toBe("hello-world");
    });

    test("should remove special characters", () => {
      expect(slugify("Hello World!")).toBe("hello-world");
    });

    test("should collapse multiple spaces", () => {
      expect(slugify("hello   world")).toBe("hello-world");
    });
  });

  describe("truncate", () => {
    test("should not truncate short string", () => {
      expect(truncate("hello", 10)).toBe("hello");
    });

    test("should truncate long string and append dots", () => {
      expect(truncate("hello world", 5)).toBe("he...");
    });

    test("should handle exact length string", () => {
      expect(truncate("hello", 5)).toBe("hello");
    });
  });

  describe("countWords", () => {
    test("should count words in normal string", () => {
      expect(countWords("hello world inside")).toBe(3);
    });

    test("should return zero for empty string", () => {
      expect(countWords("")).toBe(0);
    });

    test("should ignore multiple spaces", () => {
      expect(countWords("  hello   world  ")).toBe(2);
    });
  });
});