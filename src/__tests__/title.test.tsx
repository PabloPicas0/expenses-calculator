import { describe, expect, test, vi } from "vitest";
import Title from "../Components/Header/Title";
import { render, screen } from "@testing-library/react";

describe("Title component", () => {
  test("it shows correct currency format", () => {
    render(
      <Title
        data={{
          "2023": [
            {
              month: "Dec",
              income: [
                {
                  descritpiton: "job",
                  income: 6000,
                },
              ],
              spendings: [
                {
                  descritpiton: "bills",
                  income: 1345,
                },
              ],
            },
          ],
        }}
        year="2023"
        month="Dec"
      />
    );

    screen.debug();

    expect(screen.getByText("+ $6,000.00")).toBeInTheDocument();
    expect(screen.getByText("- $1,345.00")).toBeInTheDocument();
  });
});
