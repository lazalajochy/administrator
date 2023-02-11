import { useEffect, useState } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useParams, useNavigate } from "react-router-dom";
const EditService = () => {

    const navigate = useNavigate;
    const { id } = useParams();

    const [serviceName, setServiceName] = useState(''),
        [servicePrice, setServicePrice] = useState(''),
        [serviceDescription, setServiceDescription] = useState('');

    useEffect(() => {
        getService()
        //eslint-disable-next-line
    }, [])

    const getService = async () => {
        await axios.get(`https://barberbackend-production.up.railway.app/getService/${id}`)
            .then((res) => {
                setServiceName(res.data[0].serviceName)
                setServicePrice(res.data[0].servicePrice)
                setServiceDescription(res.data[0].serviceDescription)

            }).catch((err) => {
                console.log(err)
            })
    }

    const updateService = async (e) => {
        e.preventDefault()
        confirmAlert({
            message: "Seguro que deseas actualizar?",
            buttons: [
                {
                    label: 'Si',
                    onClick: async () => {
                        await axios.put(`https://barberbackend-production.up.railway.app/editService/${id}`, {
                            serviceName: serviceName,
                            servicePrice: servicePrice,
                            serviceDescription: serviceDescription
                        })
                        navigate('/')

                    },
                },
                {
                    label:'No',
                    onClick: () => {}
                }
            ]
        })

    }

    return (
        <div className="add-Form-container col-md-12">
            <h4>Actualizar servicio</h4>
            <form onSubmit={updateService}>
                <div className="mb-3 row">
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={serviceName}
                        className="form-control"
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </div>
                <div className="mb-3 row">
                    <label>Precio</label>
                    <input
                        type="number"
                        value={servicePrice}
                        className="form-control"
                        onChange={(e) => setServicePrice(e.target.value)}
                    />
                </div>
                <div className="mb-3 row">
                    <label>Descripcion</label>
                    <textarea
                        value={serviceDescription}
                        className="form-control"
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
export default EditService;