import React, { FC } from "react";

interface Props {
  name?: string;
  age?: number;
  email?: string;
}

//-------------------Optional props value ---------------
// ------------------------------------------------------

// interface Props {
//     name?: string,
//     age?: number,
//     email?: string
// }

//------------------- Example one ------------------------
// -------------------------------------------------------

// const PropsExample = (props : Props) => {
//     const { name, age, email } = props;
//    return (
//     <div>
//       {name }, {age} , {email}
//     </div>
//    )
// }

//------------------- Example two With destructuring ------------
// --------------------------------------------------------------

// const PropsExample = ({ name, age, email }  : Props) => {

//    return (
//     <div>
//       {name }, {age} , {email}
//     </div>
//    )
// }

//------------------- Example two With FC ( functional component ) ------
//------------------- With destructuring --------------------------------

// const PropsExample:FC<Props> = ({ name, age, email }) => {

//     return (
//      <div>
//        {name }, {age} , {email}
//      </div>
//     )
//  }

//------------------- Example Four ----------------------
// ------------------------------------------------------

const PropsExample: FC<Props> = (props) => {
  const { name, age, email } = props;
  return (
    <div>
      {name}, {age} , {email}
    </div>
  );
};

export default PropsExample;
