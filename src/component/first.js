import { useState, useEffect } from "react";
import Second from "./second";

const First = () => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalCar, setTotalCar] = useState([]);

  // function to adding car
  const addCar = () => {
    let bool = false;
    // for updating the last functionality
    if (totalCar.length > 0) {
      totalCar.map((data) => {
        if (data.name === name && data.model === model) {
          bool = true;
          data.quantity = parseInt(data.quantity) + parseInt(quantity);
        }
      });
    }

    if (!bool) {
      let obj = {
        name: name,
        model: model,
        quantity: quantity
      };
      setTotalCar([...totalCar, obj]);
    }

    setName("");
    setModel("");
    setQuantity("");
  };

  // useEffect(()=>{
  //   if(totalCar.length>0){
  //     console.log(totalCar)
  //   }
  // },[totalCar])

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
      </div>
      <button onClick={addCar}>Add Car</button>
      <Second totalCar={totalCar} />
    </>
  );
};

export default First;

// Create a component to add a car into a list of Cars.
// Fields that are required as attributes of
// a car are  Name, Model and Quantity.
