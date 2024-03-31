import { heroes } from "../data/heroes";


export const getHeroesByName = ( name = '' ) => {

    name = name.toLowerCase().trim(); // limpiar el strign que viene del input search

    if( name.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    );

}