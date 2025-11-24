import { render, screen} from "@testing-library/react";
import Post from "..";

describe('Testes para o componente Post', () => {
    test('Deve renderizar o componente Post corretamente', () => {
        render(
            <Post imageUrl="https://example.com/image.jpg">
                teste.
            </Post>
        );
        expect(screen.getByText('teste.')).toBeInTheDocument();
    }); 
})