import React, {useState } from 'react'

export const Index1 = () => {
    const initialObj = {
        firstName : "emma",
        lastName : "watson",
    };
    const [data, setData] = useState(initialObj);
    const changeFirstname = () => {
        setData(
            {
                ...data, //used for did not neglet unchanged obj values***
                firstName: "Siddu",
            }
        )
    }
  return (
    <div>
        <h1>my name is {data.firstName}</h1>
        <button onClick={changeFirstname}>change name</button>
        <h1>my last name is {data.lastName}</h1>
    </div>
  )
}

export default Index1;