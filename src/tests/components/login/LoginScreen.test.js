import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas del <LoginScreen />', () => {
    const historyMock = {
        replace: jest.fn()
    }
    const contextMock = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={ contextMock } >
            <LoginScreen history={ historyMock } />
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegacion', () => {
        wrapper.find('button').simulate('click');
        
        expect( contextMock.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Isai'
            }
        });
        expect( historyMock.replace ).toHaveBeenCalledWith('/');
    });
});
