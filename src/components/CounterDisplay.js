import React from "react";

const CounterDisplay = React.memo(({ count, goal }) => {
  console.log("CounterDisplay Rendered");

  return (
    <h3>
      {count} / {goal} glasses completed
    </h3>
  );
});

export default CounterDisplay;