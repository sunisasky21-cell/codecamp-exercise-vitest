import { describe, it, expect, test } from "vitest";
import { isValidEmail, isStrongPassword, isInRange } from "../validators";

describe("validators", () => {
  describe("isValidEmail", () => {
    test("ถ้าอีเมลถูกต้องตามโครงสร้างปกติ ต้องได้ true", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
    });

    test("ถ้าอีเมลไม่มีเครื่องหมาย @ ต้องได้ false", () => {
      expect(isValidEmail("testexample.com")).toBe(false);
    });

    test("ถ้าอีเมลไม่มีชื่อโดเมนต่อท้าย ต้องได้ false", () => {
      expect(isValidEmail("test@")).toBe(false);
    });
  });

  describe("isStrongPassword", () => {
    test("ถ้ารหัสผ่านผ่านเกณฑ์ความปลอดภัยครบถ้วน ต้องได้ true", () => {
      expect(isStrongPassword("Password123!")).toBe(true);
    });

    test("ถ้ารหัสผ่านสั้นเกินไป ต้องได้ false", () => {
      expect(isStrongPassword("P1!")).toBe(false);
    });

    test("ถ้ารหัสผ่านไม่มีตัวพิมพ์ใหญ่เลย ต้องได้ false", () => {
      expect(isStrongPassword("password123!")).toBe(false);
    });
  });

  describe("isInRange", () => {
    test("ถ้าตัวเลขอยู่ระหว่างกลางช่วงพอดี ต้องได้ true", () => {
      expect(isInRange(5, 1, 10)).toBe(true);
    });

    test("ถ้าตัวเลขอยู่ตรงเส้นขอบพอดี (เช่น ค่าสูงสุดหรือต่ำสุด) ต้องได้ true", () => {
      expect(isInRange(1, 1, 10)).toBe(true);
      expect(isInRange(10, 1, 10)).toBe(true);
    });

    test("ถ้าตัวเลขอยู่นอกช่วงที่กำหนด ต้องได้ false", () => {
      expect(isInRange(15, 1, 10)).toBe(false);
    });
  });
});
