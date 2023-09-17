import React, {useState, useEffect} from "react";
const URL = "https://jsonplaceholder.typicode.com/users";
export const Index = () => {
    const [userData, setUserdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [iserror, setIserror] = useState({state:false,msg:""});
    const fetchUserdata = async (url) => {
        setLoading(true)
        setIserror({state:false,msg:''});
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUserdata(data);
            setLoading(false);  
            setIserror({state:false,msg:''});
        } catch (error) {
            setLoading(false);
            setIserror({state:true,msg:'Something wrong!'});
            
        }
    };
    useEffect(() => {
        fetchUserdata(URL)
    }, []); 
    if(loading) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    if(iserror?.state) {
        return <div>
            <h3>{iserror?.msg}</h3>
        </div>
    }
  return (
    <div className='useEffectex-1'>
        <h1>API Fetching</h1>
        <ul>
            {
                userData.map((eachUser) => {
                    const {id, name, email} = eachUser;
                    return (
                        <li key={id}>
                            <div>{name}</div>
                            <div>{email}</div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
export default Index;
