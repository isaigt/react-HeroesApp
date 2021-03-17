import { useState } from 'react';

export const useForm = ( initial={} ) => {
    const [formValues, setFormValues] = useState( initial );

    const reset = () => {
        setFormValues( initial );
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ] : target.value
        });
    }

    return [ formValues, handleInputChange, reset ];
}
