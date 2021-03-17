import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas del componente <Navbar />', () => {

    const historyMock = {
        replace: jest.fn(),
        location: {},
        createHref: jest.fn(),
        listen: jest.fn()
    }
    
    const context = {
        dispatch: jest.fn(),
        user: {
            name: 'Isai',
            logged: true
        }
    }
    
    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={ context } >
                <Router history={ historyMock } >
                    <Navbar />
                </Router>
            </AuthContext.Provider>
        </MemoryRouter>
    );

    afterEach( () => {
        jest.clearAllMocks();
    });
    
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Isai' );
    });
    
    test('debe de llamar el logout y usar history', () => {
        wrapper.find('button').simulate('click');
        expect( historyMock.replace ).toHaveBeenCalledWith( '/login' );
        expect( context.dispatch ).toHaveBeenCalledWith( { type: types.logout } ); 
    });
});
