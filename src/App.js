import "./App.css";
import Employee from "./componets/Employee";

function App() {
  console.log("We are about to list the employee");
  const showEmployees = false;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee />
          <p>Hello!</p>
        </>
      ) : (
        <p> You cannot see the employee</p>
      )}
    </div>
  );
}

export default App;
