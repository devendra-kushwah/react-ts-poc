import React, { FC } from "react";

interface Props {
    name?: string,
    age?: number,
    email?: string
}

// Example one of destructuring

// const PropsExample = (props : Props) => {
//     const { name, age, email } = props;
//    return (
//     <div>
//       {name }, {age} , {email}
//     </div>
//    )
// }

// Example Two of destructuring

const PropsExample = ({ name, age, email }  : Props) => {
  
   return (
    <div>
      {name }, {age} , {email}
    </div>
   )
}

export default PropsExample;