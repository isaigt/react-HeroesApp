import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroebyName } from '../../selectors/getHeroebyName';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const heroe = useMemo(() => getHeroebyName( heroId ), [ heroId ])
    
    if( heroe.length === 0 ){
        return <Redirect to="/" />
    }

    const {
        id,
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters
    } = heroe[0];

    const handleReturn = () => {
        if( history.length <=2 ){
            history.push( '/' );
        }else{
            history.goBack();
        }
    }
    
    return (
        <div className="row mt-5" >
            <div className="col-4" >
                <img
                    src={ `../assets/heroes/${ id }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeInRight">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item" > <b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item" > <b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item" > <b>First appearence: </b>{ first_appearance }</li>
                </ul>
                <h5>Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
