import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import {BsFillPencilFill, BsTrashFill} from 'react-icons/bs'

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        getServices();
    },[]);

    const getServices = async() => {
        const res = await axios.get('https://barberbackend-production.up.railway.app/')
        setServices(res.data)
    }

    const deleteService = async (id) => {
        axios.delete(`https://barberbackend-production.up.railway.app/deleteService/${id}`)
        getServices()
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 listService">
                    <h4>Lista de servicios</h4>
                    <table className="table">
                        <thead className="table-responsive">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) =>(
                                <tr key={service.id}>
                                    <td>{service.serviceName}</td>
                                    <td>{service.servicePrice}</td>
                                    <td>{service.serviceDescription}</td>
                                    <td>
                                            <Link to={`/editService/${service.id}`} className="btn btn-info"><  BsFillPencilFill /></Link>
                                            <button onClick={() => deleteService(service.id)} className="btn btn-danger">< BsTrashFill/></button>

                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </>
    )
}

export default Service;