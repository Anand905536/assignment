const Second = ({ totalCar }) => {
  console.log(totalCar.length);
  return (
    <>
      <div>Total Cars are:-</div>
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-evenly",
            marginLeft: "30%"
          }}
        >
          <h6>Name</h6>
          <h6>Model</h6>
          <h6>Quantity</h6>
        </div>

        {totalCar.length > 0 ? (
          totalCar.map((data, idx) => {
            return (
              <div style={{ display: "flex", marginLeft: "30%" }}>
                <li>{data.name}</li>
                <li>{data.model}</li>
                <li>{data.quantity}</li>
              </div>
            );
          })
        ) : (
          <h4>No Cars Avaialbale Now:-</h4>
        )}
      </div>
    </>
  );
};

export default Second;
