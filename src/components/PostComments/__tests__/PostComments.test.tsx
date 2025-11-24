import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('commenta-textarea'), {
            target: {
                value: 'Comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('commenta-button'));
    
        fireEvent.change(screen.getByTestId('commenta-textarea'), {
            target: {
                value: 'Segundo comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('commenta-button'));

        expect(screen.getAllByTestId('commenta-elementos')).toHaveLength(2);
    });
});