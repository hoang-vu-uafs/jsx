import React from "react";

const Hello = (props) => {
  return (
    <div className="App">
      <h1 style={styles.hello}>{props.message}</h1>
      <h1 style={styles.hello}>{props.hello}</h1>
      <h1>{props.children}</h1>
    </div>
  );
};

const styles = {
  hello: {
    color: "green",
    backgroundColor: "red",
  },
};

export default Hello;
