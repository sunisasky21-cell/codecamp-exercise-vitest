import { describe, it, expect, test } from "vitest";
import { add, subtract, multiply, divide } from "../math";

describe("math", () => {
  describe("add", () => {
    test("บวกเลขบวกสองตัวต้องถูกต้อง", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("บวกเลขติดลบต้องถูกต้อง", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test("บวกด้วยศูนย์ต้องได้ค่าเดิม", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    test("ลบเลขปกติควรได้ผลลัพธ์ที่ถูกต้อง", () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test("ลบแล้วผลลัพธ์ติดลบได้ถูกต้อง", () => {
      expect(subtract(2, 5)).toBe(-3);
    });

    test("ลบด้วยเลขติดลบ (ลบเจอลบเป็นบวก) ต้องถูกต้อง", () => {
      expect(subtract(5, -2)).toBe(7);
    });
  });

  describe("multiply", () => {
    test("คูณเลขปกติควรได้ผลลัพธ์ที่ถูกต้อง", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test("คูณด้วยเลขติดลบต้องได้ผลลัพธ์ติดลบ", () => {
      expect(multiply(5, -2)).toBe(-10);
    });

    test("อะไรก็ตามคูณด้วยศูนย์ต้องได้ศูนย์", () => {
      expect(multiply(7, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    test("หารเลขลงตัวปกติควรได้ผลลัพธ์ที่ถูกต้อง", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("หารแล้วได้ทศนิยมต้องถูกต้อง", () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test("ถ้าหารด้วยศูนย์ (Division by zero) ต้องโยน Error ออกมา", () => {
      expect(() => divide(10, 0)).toThrow();
    });
  });
});
