import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios";
//        const res = await 

const EditService  = () => {
   
    const [service, setService] = useState([
       

    ])
   
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://barberbackend-production.up.railway.app/getService/${id}`).then((res) => {
         
        })
    },[]);
    
    return(
        <div>
            <h1></h1>
        </div>
    )
 
              
}
export default EditService;