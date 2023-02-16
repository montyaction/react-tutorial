import React from "react";

function Inline() {
  const heading = {
    color: "red",
    fontSize: "46px",
  };

  return (
    <div>
      {/* <h1 className={Style.success}>Green</h1> */}
      <h1 className="error">Error</h1>
      <h1 style={heading}>Hello Inline Styling</h1>
    </div>
  );
}

export default Inline;
