import { describe, expect, test } from "vitest";
import { isValidEmail, isStrongPassword, isInRange } from "../validators";

describe("validators", () => {
  describe("isValidEmail", () => {
    test("should return true for valid emails", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
    });

    test("should return false if email lacks @", () => {
      expect(isValidEmail("testexample.com")).toBe(false);
    });

    test("should return false if email lacks domain", () => {
      expect(isValidEmail("test@")).toBe(false);
    });
  });

  describe("isStrongPassword", () => {
    test("should return true for strong passwords", () => {
      expect(isStrongPassword("Password123!")).toBe(true);
    });

    test("should return false for short passwords", () => {
      expect(isStrongPassword("P1!")).toBe(false);
    });

    test("should return false if password lacks uppercase", () => {
      expect(isStrongPassword("password123!")).toBe(false);
    });
  });

  describe("isInRange", () => {
    test("should return true if number is within range", () => {
      expect(isInRange(5, 1, 10)).toBe(true);
    });

    test("should return true at boundaries", () => {
      expect(isInRange(1, 1, 10)).toBe(true);
      expect(isInRange(10, 1, 10)).toBe(true);
    });

    test("should return false if number is outside range", () => {
      expect(isInRange(15, 1, 10)).toBe(false);
    });
  });
});