import { describe, expect, test } from "vitest";
import { unique, chunk, flatten, groupBy } from "../array-utils";

describe("array-utils", () => {
  describe("unique", () => {
    test("should remove duplicate values", () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test("should return the same array if no duplicates", () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("should return an empty array when input is empty", () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe("chunk", () => {
    test("should split array evenly", () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    test("should split array with remaining elements", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test("should return original array in single chunk if size > length", () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test("should throw error if size is invalid", () => {
      expect(() => chunk([1, 2], 0)).toThrow();
    });
  });

  describe("flatten", () => {
    test("should flatten nested arrays shallowly", () => {
      expect(flatten([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, [5]]);
    });

    test("should return same array if already flat", () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("should return empty array if input is empty", () => {
      expect(flatten([])).toEqual([]);
    });
  });

  describe("groupBy", () => {
    test("should group objects by a key", () => {
      const employees = [
        { name: "Anna", department: "IT" },
        { name: "John", department: "HR" },
        { name: "Jack", department: "IT" }
      ];
      const result = groupBy(employees, "department");
      expect(result).toEqual({
        IT: [{ name: "Anna", department: "IT" }, { name: "Jack", department: "IT" }],
        HR: [{ name: "John", department: "HR" }]
      });
    });
  });
});