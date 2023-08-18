import { render, screen } from '@testing-library/vue'
import A_Button from '../components/atomos/A_Button.vue'

describe('Button Component', () => {
    it('Verificando se a renderização foi realizada corretamente', () => {
        render(
            <A_Button title={'Cadastrar'} />,
        )

        expect(screen.getByText('AdiciCadastraronar')).toBeInTheDocument()
    })
})
