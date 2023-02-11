import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsTrashFill } from 'react-icons/bs'
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

const ListCustomer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers()
    }, []);

    const getCustomers = async () => {
        const res = await axios.get('https://barberbackend-production.up.railway.app/getCustomerService');
        setCustomers(res.data)
    }
    const deleteService = async(id) => {
        confirmAlert({
            message:"Seguro que deseas eliminar este cliente?",
            buttons:[
                {
                    label:'Si',
                    onClick: () => {
                        axios.delete(`https://barberbackend-production.up.railway.app/deleteCustomer/${id}`)
                        .then((res) =>{
                            window.location.reload()
                        }).catch((err) => {
                            console.log(err)
                        })
                    }
                },
                {
                    label:'No',
                    onClick: () => {}
                }
            ]
        })        

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 listService">
                    <h4>Lista de clientes</h4>
                    <table className="table">
                        <thead className="table-responsive">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Opción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.servicePrice}</td>
                                    <td>{customer.serviceDescription}</td>
                                    <td>
                                    <button onClick={() => deleteService(customer.id)} className="btn btn-danger">< BsTrashFill /></button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default ListCustomer;