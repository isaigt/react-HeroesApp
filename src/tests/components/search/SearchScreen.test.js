import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas del componente <Search />', () => {
    test('debe de mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] } >
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').exists() ).toBeTruthy();
    });

    test('debe de mostrarse a Batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=flash'] } >
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe( 'flash' );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar un error si no se encuentra el Heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=error'] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        ); 

        expect( wrapper.find('.alert-danger').exists() ).toBeTruthy();
    });

    test('debe de llamar el HISTORY.PUSH', () => {

        const history = {
            push: jest.fn()
        }
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=error'] }>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={ history } /> }
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'search',
                value: 'flash'
            }
        });
        
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith( '?q=flash' );
        
    });    
});
