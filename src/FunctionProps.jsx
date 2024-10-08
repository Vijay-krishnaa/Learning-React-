function FunctionProps({ props }) {
  const { name, age, gender } = props;
  return (
    <div>
      <h1>This is function props</h1>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Gender: {gender}</h1>
    </div>
  );
}

export default FunctionProps;
