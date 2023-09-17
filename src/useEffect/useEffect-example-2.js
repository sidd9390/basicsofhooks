import React, { useState, useEffect } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Index = () => {
  const [dirnksData, setDrinksdata] = useState([]);
  const [searchTerm, setSearchterm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIserror] = useState({ state: false, msg: "" });

  const fetchDrink = async (apiURL) => {
    setLoading(true);
    setIserror({ state: false, msg: "" });
    try {
      const response = await fetch(apiURL);
      const { drinks } = await response.json();
      setDrinksdata(drinks);
      setLoading(false);
      console.log(drinks);
      setIserror({ state: false, msg: "" });
      if (!drinks) {
        throw new Error("Data Not Found");
      }
    } catch (error) {
      setLoading(false);
      setIserror({
        state: true,
        msg: error.message || "something went wrong...",
      });
    }
  };

  useEffect(() => {
    let correcrURL = `${URL}${searchTerm}`;
    fetchDrink(correcrURL);
  }, [searchTerm]);
  return (
    <div className="cocktail">
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search some drink..."
          value={searchTerm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </form>
      {loading && !isError?.state && <h3>Loading....</h3>}
      {isError?.state && <h3 style={{ color: "red" }}>{isError.msg}</h3>}
      {!loading && !isError?.state && (
        <ul className="cocktail-ul">
          {dirnksData.map((eachDrink) => {
            const { idDrink, strDrink, strDrinkThumb } = eachDrink;
            return (
              <li key={idDrink}>
                <div className="drinkImg">
                  <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div className="drinkName">
                  <h3>{strDrink}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Index;
