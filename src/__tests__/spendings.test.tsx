import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Spendings from "../Components/budged-list/Spendings";

describe("Spendings component", () => {
  test("it renders correclty to the page", () => {
    const setData = vi.fn();

    render(
      <Spendings
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
        setData={setData}
      />
    );

    expect(screen.getByText("Income")).toBeInTheDocument();
    expect(screen.getByText("Spendings")).toBeInTheDocument();
    expect(screen.getByText("job")).toBeInTheDocument();
    expect(screen.getByText("bills")).toBeInTheDocument();
  });

  test("it prevents from delete entries in history budget", () => {
    const setData = vi.fn();

    render(
      <Spendings
        data={{
          "2022": [
            {
              month: "Feb",
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
        year="2022"
        month="Feb"
        setData={setData}
      />
    );

    const deleteBtns = screen.getAllByTestId("delete");

    for (const deleteBtn of deleteBtns) {
      expect(deleteBtn).toBeDisabled();
    }
  });
});
