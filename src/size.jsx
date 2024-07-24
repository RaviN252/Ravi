import React, { useEffect } from "react";
import "./size.css";

function Size() {
  // useEffect(() => {
  //   const updateSize = () => {
  //     const width = document.getElementById("box").clientWidth;
  //     document.getElementById("size").innerHTML = width + " px";
  //   };
  //   window.onresize = updateSize;
  //   updateSize();
  //   return () => {
  //     window.onresize = null;
  //   };
  // }, []);

  return (
    <div className="body">
      {/* <h1>hello</h1> */}
      {/* <div id="box">
        <h5 id="size"></h5>
      </div> */}
    </div>
  );
}

export default Size;
