import FunctionProps from "./FunctionProps";
import ClassProps from "./ClassProps";
import ChildrenProps from "./ChildrenProps";

function App() {
  const user = {
    name: "vijay",
    age: 23,
    gender: "male",
  };

  return (
    <>
      <FunctionProps props={user} />
      <ClassProps props ={user} />
      <ChildrenProps data = {"my name is khan"}/>
      <ChildrenProps>
{"hello Jsiper"}
{2000}
{"happy Diwali"}

      </ChildrenProps>
    </>
  );
}

export default App;
