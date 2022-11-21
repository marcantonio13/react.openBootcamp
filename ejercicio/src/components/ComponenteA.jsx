import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contacto.class';
import CompoenenteB from './CompoenenteB';




const ComponenteA = (contact) => {
    return (
        <div>

            <h2>
                Contact: 
            </h2>
            <h3>
                nombre : {contact.nombre}
            </h3>
            <h4>
                apellido : {contact.apellido}
            </h4>

            <h5>
                email: {contact.email}
            </h5>

            <h6>
                <CompoenenteB status = {true} />
            </h6>
            
        </div>
    );
};


ComponenteA.propTypes = {
    contact: PropTypes.instanceOf(Contact)

};


export default ComponenteA;
