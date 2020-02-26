import React, { useEffect, useState } from "react";
import Header from "../components/header";
import useGlobal from "../utils/context/store/global";

const Home = () => {
  // TODO: Create local state for first name which will change only on this page. It should also be able to update with global state.

  const [globalState, globalActions] = useGlobal();
  const {
    user: { name_first, name_last }
  } = globalState;
  const {
    user: { setUser, updateUser }
  } = globalActions;

  const [values, setValues] = useState({
    name_first,
    name_last
  });
  /** TODO: Change first or last name which should show across website.
   * i.e. Create text field that will change global state ALSO with local state on this page.
   *
   * This is a small example on how globalActions should be used.*/

  // const handleNameChange = (event) => {
  //   const value = event.target.value
  //   globalActions.user.updateUser({[event.target.name]:value});
  // }

  // TODO: Create useEffect to change the last name ONCE upon showing this page.

  const handleInputChange = label => event => {
    const value = event.target.value;
    setValues({ ...values, [label]: value });
    globalActions.user.updateUser({ [label]: value });
  };

  return (
    <>
      <Header />
      <h1>Hello World!</h1>
      <p>
        Name (GlobalState): {name_first}, {name_last}
      </p>
      <p>
        Name (LocalState): {values.name_first}, {values.name_last}
      </p>
      <hr />
      <div>
        <label>First Name</label>{" "}
        <input
          onChange={handleInputChange("name_first")}
          value={values.name_first}
          type="text"
        />
      </div>
      <div>
        <label>Last Name</label>{" "}
        <input
          onChange={handleInputChange("name_last")}
          value={values.name_last}
          type="text"
        />
      </div>
    </>
  );
};

export default Home;
