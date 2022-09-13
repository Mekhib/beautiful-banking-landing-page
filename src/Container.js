import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Container({children}) {
  return (
   <main role="main" class="container">
        {children}
    </main>   
  )

  
}

export default Container;
