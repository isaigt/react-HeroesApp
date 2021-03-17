import React, { useMemo } from 'react'
import { getHeroesbyPublisher } from '../../selectors/getHeroesbyPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesbyPublisher( publisher ), [ publisher ]);
    
    return (
        <div className="card-columns">
            {
                heroes.map( heroe => (
                    <HeroeCard
                        key={ heroe.id }
                        { ...heroe }
                    />
                ))
            }
        </div>
    )
}
