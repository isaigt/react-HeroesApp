import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Pruebas del componente <HeroScreen />', () => {
    test('debe de mostrarse el componente <Redirect />', () => {
        const historyMock = {
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero'] }>
                <HeroScreen history={ historyMock } />
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBe( true );
    });

    test('debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/heroes/flash'] }>
                <Route path="/heroes/:heroId" component={ HeroScreen } />
            </MemoryRouter>
        );
        expect( wrapper.find('.list-group-item').exists() ).toBeTruthy();
    });

    test('debe de regresar a la pantalla anterior PUSH', () => {
        const historyMock = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/heroes/flash'] } >
                <Route 
                    path="/heroes/:heroId" 
                    component={ () => <HeroScreen history={ historyMock } /> }

                />
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click');
        
        expect( historyMock.push ).toHaveBeenCalledWith( '/' );
        expect( historyMock.goBack ).not.toHaveBeenCalled();
    });
    test('debe de regresar a la pantalla anterior GOBACK', () => {
        const historyMock = {
            length: 10,
            goBack: jest.fn(),
            push: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/heroes/flash'] } >
                <Route 
                    path="/heroes/:heroId" 
                    component={ () => <HeroScreen history={ historyMock } /> }

                />
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click');
        
        expect( historyMock.goBack ).toHaveBeenCalled();
        expect( historyMock.push ).not.toHaveBeenCalled();
    });
});
