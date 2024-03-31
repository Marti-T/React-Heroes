import {fireEvent, render, screen} from '@testing-library/react';
import { Navbar } from '../../../src/ui';
import { AuthContext } from '../../../src/auth';
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe( 'Pruebas en <NavBar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Martí Touriño'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario logueado', () => {

        render (
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug()

        expect( screen.getByText('Martí Touriño') ).toBeTruthy();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón logout', () => {


        render (
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});


    });

});