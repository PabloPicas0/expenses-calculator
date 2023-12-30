import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Components/Options/Options";

describe("Options component", () => {
  test("it renders correctly", () => {
    const setYear = vi.fn();
    const setMonth = vi.fn();
    const setData = vi.fn();

    render(
      <Options
        data={{
          "2023": [
            {
              month: "Dec",
              income: [],
              spendings: [],
            },
          ],
        }}
        setData={setData}
        setMonth={setMonth}
        setYear={setYear}
        year="2023"
        month="Dec"
      />
    );

    const inputs = screen.getAllByTestId("inputs");

    for (const input of inputs) {
      expect(input).toBeInTheDocument();
    }
  });

  test("it prevent from loading new entries to history entries", async () => {
    const setYear = vi.fn();
    const setMonth = vi.fn();
    const setData = vi.fn();

    render(
      <Options
        data={{
          "2022": [
            {
              month: "Feb",
              income: [
                {
                  descritpiton: "job",
                  income: 6000,
                },
                {
                  descritpiton: "lotto",
                  income: 100,
                },
              ],
              spendings: [
                {
                  descritpiton: "bills",
                  income: 1345,
                },
                {
                  descritpiton: "cat",
                  income: 0.78,
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
                {
                  descritpiton: "lotto",
                  income: 100,
                },
              ],
              spendings: [
                {
                  descritpiton: "bills",
                  income: 1345,
                },
                {
                  descritpiton: "cat",
                  income: 0.78,
                },
              ],
            },
          ],
        }}
        setData={setData}
        setMonth={setMonth}
        setYear={setYear}
        year="2023"
        month="Dec"
      />
    );
    const user = userEvent.setup();

    const history = screen.getByText("History");
    const description = screen.getByPlaceholderText("Description") as HTMLInputElement;
    const ammount = screen.getByPlaceholderText("Ammount") as HTMLInputElement;
    const submit = screen.getByLabelText("submit", { selector: "button" }) as HTMLButtonElement;

    // Options are initialized with correct values
    expect(description.value).toBe("");
    expect(ammount.value).toBe("");
    expect(submit).toBeDisabled();

    // User change entries to historical one
    await user.click(history);
    await user.click(screen.getByText("2022"));
    await user.click(screen.getByText("Feb"));

    // User tries add something to history
    fireEvent.change(description, { target: { value: "Ticket to disney land" } });
    fireEvent.change(ammount, { target: { value: "5.99" } });
    fireEvent.click(submit);

    expect(submit).toBeDisabled();
  });

  test("it loads new entries correctly", () => {
    const setYear = vi.fn();
    const setMonth = vi.fn();
    const setData = vi.fn();

    render(
      <Options
        data={{
          "2023": [
            {
              month: "Dec",
              income: [
                {
                  descritpiton: "job",
                  income: 6000,
                },
                {
                  descritpiton: "lotto",
                  income: 100,
                },
              ],
              spendings: [
                {
                  descritpiton: "bills",
                  income: 1345,
                },
                {
                  descritpiton: "cat",
                  income: 0.78,
                },
              ],
            },
          ],
        }}
        setData={setData}
        setMonth={setMonth}
        setYear={setYear}
        year="2023"
        month="Dec"
      />
    );

    const description = screen.getByPlaceholderText("Description") as HTMLInputElement;
    const ammount = screen.getByPlaceholderText("Ammount") as HTMLInputElement;
    const submit = screen.getByLabelText("submit", { selector: "button" }) as HTMLButtonElement;

    // Options are initialized with correct values
    expect(description.value).toBe("");
    expect(ammount.value).toBe("");
    expect(submit).toBeDisabled();

    // User fills inputs and can add them
    fireEvent.change(description, { target: { value: "Ticket to disney land" } });
    fireEvent.change(ammount, { target: { value: "5.99" } });

    expect(submit).not.toBeDisabled();

    fireEvent.click(submit);

    // Values are reseted after successful submit
    expect(submit).toBeDisabled();
    expect(description.value).toBe("");
    expect(ammount.value).toBe("");
  });
});
