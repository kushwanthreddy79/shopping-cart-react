import { describe, it, expect } from "vitest";
import { calculateBill } from "../utils/offers";

describe("calculateBill", () => {
  it("should return zero for an empty basket", () => {
    const result = calculateBill([]);

    expect(result.subtotal).toBe(0);
    expect(result.savings).toBe(0);
    expect(result.total).toBe(0);
  });
});
//Bread only
describe("calculateBill", () => {

  it("should return zero for an empty basket", () => {

    const result = calculateBill([]);

    expect(result.subtotal).toBe(0);
    expect(result.savings).toBe(0);
    expect(result.total).toBe(0);

  });

  it("should calculate Bread without any offer", () => {

    const result = calculateBill([
      {
        id: 1,
        name: "Bread",
        price: 1.10,
        quantity: 2,
      },
    ]);

    expect(result.subtotal).toBe(2.20);
    expect(result.savings).toBe(0);
    expect(result.total).toBe(2.20);

  });

});

//cheese offer
it("should apply Buy One Get One Free for Cheese", () => {

  const result = calculateBill([
    {
      id: 3,
      name: "Cheese",
      price: 0.90,
      quantity: 2,
    },
  ]);

  expect(result.subtotal).toBe(1.80);

  expect(result.savings).toBe(0.90);

  expect(result.total).toBe(0.90);

});

//soup and bread offer
it("should apply Soup + Bread offer", () => {
  const result = calculateBill([
    {
      id: 4,
      name: "Soup",
      price: 0.60,
      quantity: 1,
    },
    {
      id: 1,
      name: "Bread",
      price: 1.10,
      quantity: 1,
    },
  ]);

  expect(result.subtotal).toBeCloseTo(1.70, 2);
  expect(result.savings).toBeCloseTo(0.55, 2);
  expect(result.total).toBeCloseTo(1.15, 2);
});

//multiple offers
it("should apply multiple offers together", () => {
  const result = calculateBill([
    {
      id: 1,
      name: "Bread",
      price: 1.10,
      quantity: 2,
    },
    {
      id: 4,
      name: "Soup",
      price: 0.60,
      quantity: 2,
    },
    {
      id: 3,
      name: "Cheese",
      price: 0.90,
      quantity: 2,
    },
    {
      id: 5,
      name: "Butter",
      price: 1.20,
      quantity: 1,
    },
  ]);

  expect(result.subtotal).toBeCloseTo(6.40);
  expect(result.savings).toBeCloseTo(2.40);
  expect(result.total).toBeCloseTo(4.00);
});