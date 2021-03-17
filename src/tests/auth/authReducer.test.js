import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas del authReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = { 
            name: 'Isai',
            logged: true
        };
        const resp = authReducer( state, { type: 'test' } );
        expect( resp ).toEqual( state );
    });

    test('debe autenticar y colocar el name del usuario', () => {
        const state = { 
            name: 'Isai'
        };
        const resp = authReducer( {}, { type: types.login, payload: state } );
        expect( resp ).toEqual( { ...state, logged: true } );
    });

    test('debe de borrar el name del usuario y logged en false', () => {
        const state = { 
            name: 'Isai',
            logged: true
        };
        const resp = authReducer( {}, { type: types.logout, payload: state } );
        expect( resp ).toEqual( { logged: false } );
    });
});
