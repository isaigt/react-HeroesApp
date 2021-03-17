import { heroes } from '../data/heroes';

export const getHeroebyName = ( name='' ) => {

    if ( name === '' ) {
        return [];
    }
    
    return heroes.filter( heroe => heroe.superhero.toLowerCase().includes( name.toLowerCase() ) );
}
