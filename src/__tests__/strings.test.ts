import { describe, it, expect , test} from "vitest";
import { capitalize, slugify, truncate, countWords } from "../strings";

describe("strings", () => {
  describe("capitalize", () => {
    test("ข้อความปกติ ควรเปลี่ยนตัวแรกเป็นพิมพ์ใหญ่", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    test("ถ้าเป็นข้อความว่าง ควรได้ข้อความว่างกลับมา", () => {
      expect(capitalize("")).toBe("");
    });

    test("ถ้ามีตัวอักษรเดียว ควรเปลี่ยนเป็นพิมพ์ใหญ่ได้", () => {
      expect(capitalize("a")).toBe("A");
    });
  });

  describe("slugify", () => {
    test("ข้อความปกติ ควรแปลงเป็นพิมพ์เล็กและเชื่อมด้วยขีดกลาง", () => {
      expect(slugify("Hello World")).toBe("hello-world");
    });

    test("ถ้ามีตัวอักษรพิเศษหรือสัญลักษณ์ ควรจะลบออกหรือจัดการให้ถูกต้อง", () => {
      expect(slugify("Hello World!")).toBe("hello-world");
    });

    test("ถ้ามีช่องว่างหลายช่อง ควรจะยุบให้เหลือขีดเดียว", () => {
      expect(slugify("hello world")).toBe("hello-world");
    });
  });

  describe("truncate", () => {
    test("ถ้าข้อความสั้นกว่าขนาดที่กำหนด ไม่ควรโดนตัด", () => {
      expect(truncate("hello", 10)).toBe("hello");
    });

    test("ถ้าข้อความยาวเกินกำหนด ควรตัดให้เหลือตามขนาดแล้วต่อด้วย ...", () => {
      expect(truncate("hello world", 5)).toBe("he...");
    });

    test("ถ้าความยาวพอดีเป๊ะ ควรแสดงข้อความเต็มตามความยาวนั้น", () => {
      expect(truncate("hello", 5)).toBe("hello");
    });
  });

  describe("countWords", () => {
    test("ข้อความปกติ ควรรวมจำนวนคำได้ถูกต้อง", () => {
      expect(countWords("hello world inside")).toBe(3);
    });

    test("ถ้าเป็นข้อความว่าง ควรได้ 0 คำ", () => {
      expect(countWords("")).toBe(0);
    });

    test("ถ้ามีช่องว่างเยอะเกินไป ควรนับเฉพาะคำจริงๆ ไม่นับช่องว่าง", () => {
      expect(countWords("  hello   world  ")).toBe(2);
    });
  });
});
