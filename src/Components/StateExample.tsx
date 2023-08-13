import React, { useState } from "react";

function StateExample() {
  const [name, setName] = useState<string>(""); // string example
  const [age, setAge] = useState<number | null>(); //  example  with null value

  return <div>Hi There I am TS</div>;
}

export default StateExample;
