import "./App.css";
import Employee from "./componets/Employee";
import { useState } from "react";

function App() {
  //useState how to set the role for the title role.
  const [role, setRole] = useState("Dev");

  //useState to setup an array of employee
  const [employees, setEmployees] = useState([
    {
      name: "Humphrey Maluleke",
      role: "Intern Dev",
      img: "https://images.pexels.com/photos/7053404/pexels-photo-7053404.jpeg",
    },
    {
      name: "Tronix Ndhopfu",
      role: "Manager",
      img: "https://images.pexels.com/photos/30484693/pexels-photo-30484693.jpeg",
    },
    {
      name: "Ntalo Maluleke",
      role: "Doctor",
      img: "https://images.pexels.com/photos/31454884/pexels-photo-31454884.jpeg",
    },
    {
      name: "Bless Maluleke",
      role: "Police",
      img: "https://images.pexels.com/photos/29625100/pexels-photo-29625100.jpeg",
    },
    {
      name: "Magreth Maluleke",
      role: "Cleaner",
      img: "https://images.pexels.com/photos/3205230/pexels-photo-3205230.jpeg",
    },
    {
      name: "Kokwani Maluleke",
      role: "CEO",
      img: "https://images.pexels.com/photos/12410074/pexels-photo-12410074.jpeg",
    },
  ]);

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
          <div className="container mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-4 justify">
              {employees.map((employee) => {
                return (
                  <Employee
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <p> You cannot see the employee</p>
      )}
    </div>
  );
}

export default App;
