import { authReducer, types } from "../../../src/auth/index";


describe( 'Pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {} );
        expect( state ).toEqual( { logged: false } );

    });

    test('debe de (login) llamar el login authenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Martí',
                id: '123'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('debe de (logout) borrar el name del susuario y logged false', () => {

        const state = {
            logged: true,
            user: {
                id: '123',
                name: ' Martí'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        expect( newState ).toEqual({
            logged: false
        })

    });

});