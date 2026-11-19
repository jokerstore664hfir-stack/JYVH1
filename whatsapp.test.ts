import { describe, expect, it } from "vitest";
import { orderUrl, phones, phonesForService } from "@/lib/whatsapp";

describe("WhatsApp orders", () => {
  it("distributes orders across the four supplied Egyptian numbers", () => {
    expect([0, 0.25, 0.5, 0.75].map((value) => new URL(orderUrl("تصميم لوجو", value)).pathname)).toEqual([
      "/201027690446", "/201122645603", "/201145824898", "/201125869503",
    ]);
  });

  it("includes the selected service in the price enquiry", () => {
    expect(new URL(orderUrl("تطوير موقع ويب", 0)).searchParams.get("text")).toBe(
      "مرحباً JYVH، أنا مهتم بخدمة: *تطوير موقع ويب*، وأريد معرفة التفاصيل والأسعار.",
    );
  });

  it("sends web development orders to only the two supplied numbers", () => {
    expect(phonesForService("تطوير موقع ويب")).toEqual(["201027690446", "201122645603"]);
    const used = new Set(
      Array.from({ length: 40 }, (_, i) => new URL(orderUrl("تطوير موقع ويب", (i % 10) / 10)).pathname),
    );
    expect([...used].sort()).toEqual(["/201027690446", "/201122645603"]);
  });

  it("keeps every other service on all four numbers", () => {
    expect(phonesForService("تصميم لوجو")).toEqual(phones);
    expect(new URL(orderUrl("تصميم لوجو", 0.99)).pathname).toBe("/201125869503");
  });
});
