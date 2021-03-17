import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className="animate__animated animate__bounceInLeft">Marvel</h1>
            <hr/>
            <HeroesList publisher="Marvel Comics" />
        </div>
    )
}
