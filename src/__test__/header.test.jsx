import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header"


describe("Header", () =>{
    describe("The header is rendered", () =>{
        it("should render the heading", () =>{
            render(<Header/>)
           expect(screen.getByText("El reto de humanizar el CX financiero en 2021.")).toBeInTheDocument();
           expect(screen.getByText("La experiencia de un Unicornio de Latam")).toBeInTheDocument();
            })
        });
    });


