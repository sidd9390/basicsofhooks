import React, { useState } from "react";

export const Index = () => {
    const [showData, setShowData] =  useState(false);
    const handleChange = () => {
        setShowData(!showData);
    }
  return (
    <div>
        <button onClick={handleChange}>{showData ? "hide" : "show"}</button>
        {showData && (
            <div className="content">
                Hi my name is grandhi siddu and i am learning react from srikanth racharla youtube channel
            </div>
        )}
    </div>
  )
}

export default Index;
