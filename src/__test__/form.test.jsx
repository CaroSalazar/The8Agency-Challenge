import { Form } from "../components/main/form/Form";
import { render, screen } from "@testing-library/react";

describe("Form", () => {
    describe("when rendering default form", () => {
      it("should render the heading", () => {
        render(<Form />);
        const heading = screen.getByRole("heading", {
          name: /¡Inscríbete y reserva tu lugar ahora!/i,
        });
        expect(heading).toBeInTheDocument();
      });
      it("should render the submit button", () => {
        render(<Form />);
        const submitButton = screen.getByRole("button", { name: /Inscríbete/i });
  
        expect(submitButton).toBeInTheDocument();
      });
    })
  })