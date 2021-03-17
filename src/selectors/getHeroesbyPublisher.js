import { heroes } from '../data/heroes';

export const getHeroesbyPublisher = ( publisher ) => {
    const validos = [ 'DC Comics', 'Marvel Comics' ];

    if( !validos.includes( publisher ) ){
        throw new Error(`Publisher "${ publisher } no valido."`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}
