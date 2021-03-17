import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas del componente <AppRouter />', () => {

    const context = {
        dispatch: jest.fn(),
        user: {
            name: 'Isai',
            logged: false
        }
    }
    
    test('debe de mostrar el login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ context } >
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el componente marvel si esta autenticado', () => {
        const context = {
            dispatch: jest.fn(),
            user: {
                name: 'Isai',
                logged: true
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={ context } >
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe( true );
    });
});
