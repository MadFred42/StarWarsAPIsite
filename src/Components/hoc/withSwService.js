import React from 'react';
import StarWarsServiceContext from '../service-context';

const WithStarWarsService = () => (Wrapper) => {
    return (props) => {
        return (
            <StarWarsServiceContext.Consumer>
                {
                    (starWarsService) => {
                        return <Wrapper {...props} service={starWarsService} />
                    }
                }
            </StarWarsServiceContext.Consumer>
        )
    }
}

export default WithStarWarsService;