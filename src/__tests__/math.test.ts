import { describe, expect, test } from "vitest";
import { add, subtract, multiply, divide } from "../math";

describe("math", () => {
  describe("add", () => {
    test("should add positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("should add negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test("should return same number when adding zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    test("should subtract positive numbers", () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test("should return negative result if subtrahend is larger", () => {
      expect(subtract(2, 5)).toBe(-3);
    });

    test("should handle negative numbers correctly", () => {
      expect(subtract(5, -2)).toBe(7);
    });
  });

  describe("multiply", () => {
    test("should multiply numbers correctly", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test("should return negative when multiplying with a negative number", () => {
      expect(multiply(5, -2)).toBe(-10);
    });

    test("should return zero when multiplying by zero", () => {
      expect(multiply(7, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    test("should divide numbers correctly", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("should return float result when necessary", () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test("should throw error on division by zero", () => {
      expect(() => divide(10, 0)).toThrow();
    });
  });
});