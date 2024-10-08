import FunctionProps from "./FunctionProps";
import ClassProps from "./ClassProps";
// import ChildrenProps from "./ChildrenProps";
import ChiltToParent from "./ChiltToParent";
import Child1 from "./Child1";
import Child2 from "./Child2";

function App() {
  const user = {
    name: "vijay",
    age: 23,
    gender: "male",
  };
let name  = "iRONMAN"
function sendData(x){
  console.log(x)
}
  return (
    <>
      <FunctionProps props={user} />
      <ClassProps props={user} />
      {/* <ChildrenProps data={"my name is khan"} /> */}
      {/* <ChildrenProps data={"Some Random Data"}>
        {"hello Jsiper"}
        {2000}
        {"happy Diwali"}
      </ChildrenProps> */}
      <ChiltToParent  name = {name} sendData = {sendData}/>
      <Child1 />
      <Child2 />
      
      
    </>
  );
}

export default App;
