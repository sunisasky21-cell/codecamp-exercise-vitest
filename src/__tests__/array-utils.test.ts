import { describe, it, expect , test} from "vitest";
import { unique, chunk, flatten, groupBy } from "../array-utils";

describe("array-utils", () => {
  describe("unique", () => {
    test("กรณีมีตัวซ้ำ ต้องลบออกให้เหลือตัวเดียว", () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test("กรณีไม่มีตัวซ้ำ ต้องได้ค่าเดิม", () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("กรณีเป็นอาเรย์ว่าง ต้องได้อาเรย์ว่าง", () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe("chunk", () => {
   test("หั่นอาเรย์แบบแบ่งกลุ่มได้ลงตัวพอดี", () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    test("หั่นอาเรย์แบบเหลือเศษกลุ่มสุดท้าย", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test("กำหนดขนาดใหญ่กว่าความยาวอาเรย์ ต้องได้อาเรย์เดิมซ้อนชั้นเดียว", () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test("ถ้าใส่ขนาดเป็น 0 หรือติดลบ ต้องแจ้งเตือน Error", () => {
      expect(() => chunk([1, 2], 0)).toThrow();
    });
  });

  describe("flatten", () => {
    test("ทุบอาเรย์ที่ซ้อนกันหลายชั้นให้แบนราบ", () => {
      expect(flatten([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, [5]]);
    });

    test("ถ้าอาเรย์แบนอยู่แล้ว ต้องได้ค่าเดิม", () => {
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("ถ้าเป็นอาเรย์ว่าง ต้องได้อาเรย์ว่าง", () => {
      expect(flatten([])).toEqual([]);
    });
  });

  describe("groupBy", () => {
   test("จัดกลุ่มวัตถุตามคีย์ที่กำหนด", () => {
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
