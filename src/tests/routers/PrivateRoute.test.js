import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas del componente <PrivateRoute />', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    };
    Storage.prototype.setItem = jest.fn();

    test('debe de mostrarse si esta autenticado y guardar en localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', props.location.pathname );
    });

    test('debe de bloquear el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () => <span>Listo!</span> }
                    { ...props }
                />
            </MemoryRouter>
        );
        expect( wrapper.find('span').exists() ).toBeFalsy();
    });
});