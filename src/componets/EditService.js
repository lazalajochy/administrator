import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios";

const EditService  = () => {
    const navigate  = useNavigate()
    const {id} = useParams()
    const [serviceName, setServiceName] = useState(''),
          [servicePrice, setServicePrice] = useState(''),
          [serviceDescription, setServiceDescription] = useState('')
    
    useEffect(() => {
        getService()
    },[])

    const getService = async() => {
        const res = await axios.get(`https://barberbackend-production.up.railway.app/getService/${id}`)
        setServiceName(res.data[0].serviceName);
        setServicePrice(res.data[0].servicePrice);
        setServiceDescription(res.data[0].serviceDescription)
    }
    const updateService = async (e) => {
        e.preventDefault();
        await axios.put(`https://barberbackend-production.up.railway.app/editService/${id}`, {
            serviceName:serviceName,
            servicePrice: servicePrice,
            serviceDescription: serviceDescription
        })
        navigate('/')
    }

    return(
        <div className="edit-Form-container col-md-12">
            <h4>Editar Servicio</h4>
            <form onSubmit={updateService}>
                <div className="mb-3 row">
                    <label>Nombre</label>
                    <input
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className="form-control"
                    />
                </div>
                <div className="mb-3 row">
                    <label>Precio</label>
                    <input
                    value={servicePrice}
                    onChange={(e) => setServicePrice(e.target.value)}
                    type="number"
                    className="form-control"
                    />
                </div>
                <div className="mb-3 row">
                    <label>Descripcion</label>
                    <textarea
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
                    className="form-control"
                    />
                </div>
                <div className='mb-3 row'>
                    <button type='submit' className='btn btn-primary' >Submit</button>
                </div>
            </form>
        </div>
    )
}
export default EditService;