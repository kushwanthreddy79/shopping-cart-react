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
        price: 30,
        quantity: 2,
      },
    ]);

    expect(result.subtotal).toBe(60);
    expect(result.savings).toBe(0);
    expect(result.total).toBe(60);

  });

});

//cheese offer
it("should apply Buy One Get One Free for Cheese", () => {

  const result = calculateBill([
    {
      id: 3,
      name: "Cheese",
      price: 30,
      quantity: 2,
    },
  ]);

  expect(result.subtotal).toBe(60);

  expect(result.savings).toBe(30 );

  expect(result.total).toBe(30);

});

//soup and bread offer
it("should apply Soup + Bread offer", () => {
  const result = calculateBill([
    {
      id: 4,
      name: "Soup",
      price: 80,
      quantity: 1,
    },
    {
      id: 1,
      name: "Bread",
      price: 30,
      quantity: 1,
    },
  ]);

  expect(result.subtotal).toBeCloseTo(110,120);
  expect(result.savings).toBeCloseTo(15,20);
  expect(result.total).toBeCloseTo(95,100);
});

//multiple offers
it("should apply multiple offers together", () => {
  const result = calculateBill([
    {
      id: 1,
      name: "Bread",
      price: 30,
      quantity: 2,
    },
    {
      id: 4,
      name: "Soup",
      price: 80,
      quantity: 2,
    },
    {
      id: 3,
      name: "Cheese",
      price: 30,
      quantity: 2,
    },
    {
      id: 5,
      name: "Butter",
      price: 60,
      quantity: 1,
    },
  ]);

  expect(result.subtotal).toBeCloseTo(340);
  expect(result.savings).toBeCloseTo(80);
  expect(result.total).toBeCloseTo(260);
});