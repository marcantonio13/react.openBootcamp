import React, { useState} from 'react';
import PropTypes from 'prop-types';




const CompoenenteB = ({status}) => {

    const [connected,setConnected] = useState(status);

    return (
        <div>
                {(connected) ? `Contacto En Línea` : `Contacto No Disponible`}
                <button onClick={() => setConnected(!connected)}>{connected === false ? 'Conectado' : 'Desconectado'}</button>

            
        </div>
    );
};


CompoenenteB.propTypes = {

    status: PropTypes.bool,

};


export default CompoenenteB;
