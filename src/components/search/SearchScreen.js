import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroebyName } from '../../selectors/getHeroebyName';

export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q='' } = queryString.parse( location.search );

    const [ { search }, handleInputChange ] = useForm({
        search: q
    });
    
    const heroesFiltrados = useMemo(() => getHeroebyName( q ), [ q ]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push( `?q=${ search }` );
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5" >
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit } >
                        <input
                            name="search"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            value={ search }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        ( q === '' )
                        && <div className="alert alert-info animate__animated animate__fadeIn" >Search for a hero</div>
                    }
                    {
                        ( q !== '' && heroesFiltrados.length === 0 )
                        && <div className="alert alert-danger animate__animated animate__shakeX" >No results for "{ q }"</div>
                    }
                    
                    {
                        heroesFiltrados.map( heroe => (
                            <HeroeCard
                                key={ heroe.id }
                                { ...heroe }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
