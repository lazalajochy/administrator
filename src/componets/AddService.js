import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddService = () => {
    const navigate = useNavigate();
    const [serviceName, setServiceName] = useState(''),
        [servicePrice, setServicePrice] = useState(''),
        [serviceDescription, setServiceDescription] = useState('');

    const addService = async (e) => {
        e.preventDefault()
        await axios.post('https://barberbackend-production.up.railway.app/', { serviceName: serviceName, servicePrice: servicePrice, serviceDescription: serviceDescription })
        navigate('/')
    }
    return (
        <div className="add-Form-container col-md-12">
            <h4>Agregar Servicio</h4>
            <form onSubmit={addService}>
                <div className="mb-3 row">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 row">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        value={servicePrice}
                        onChange={(e) => setServicePrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 row">
                    <label>Descripcion</label>
                    <textarea
                        className="form-control"
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)}
                    />
                </div>
                <div className='mb-3 row'>
                    <button type='submit' className='btn btn-primary' >Submit</button>
                </div>
            </form>
        </div>
    )

}

export default AddService