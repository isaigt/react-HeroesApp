import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas del componente <DasboardRoutes />', () => {
    const context = {
        dispatch: jest.fn(),
        user: {
            name: 'Isai',
            logged: false
        }
    }

    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={ context }>
                    <DashboardRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
    });
});
