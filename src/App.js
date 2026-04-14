import "./App.css";
import Employee from "./componets/Employee";
import { useState } from "react";

function App() {
  //useState how to set it
  const [role, setRole] = useState("dev");

  //let role = "Dev";
  const showEmployees = true;

  return (
    <div className="App ">
      {showEmployees ? (
        <>
          <input
            type="text "
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
              // role = e.target.value;
            }}
          />

          {
            // Passing Employee props
          }
          <Employee name="Humphrey Maluleke" role="Intern" />
          <Employee name="Tronix Maluleke" role={role} />
          <Employee name="Ntalo Maluleke" role="Developer" />
          <p>Hello!</p>
        </>
      ) : (
        <p> You cannot see the employee</p>
      )}
    </div>
  );
}

export default App;
