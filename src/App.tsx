import * as React from "react";
import "./styles.css";
import {
  useTrail,
  animated,
  useTransition,
  useSpring,
  useSprings
} from "react-spring";
import { useState } from "react";

export default function App() {
  const [trail, setTrail, stop] = useTrail(1, () => ({
    height: 50,
    from: { height: 0 }
  }));
  const [toggle, setToggle] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" }
  });
  const propsSpring = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" }
    ],
    from: { opacity: 0, color: "red" },
    config: {
      duration: 3000
    }
  });
  const massageArr = ["I", "love", "you"];
  const [springs, setSprings] = useSprings(massageArr.length, ind => ({
    opacity: 1
  }));
  return (
    <div className="App">
      {trail.map((props, index) => (
        <animated.div style={props}>hahahhahahahah</animated.div>
      ))}
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props}>😄</animated.div>
        ) : (
          <animated.div style={props}>🤪</animated.div>
        )
      )}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        click transition
      </button>
      <animated.div style={propsSpring}>I will fade in and out</animated.div>
      {springs.map((props, index) => (
        <animated.div
          style={props}
          onClick={() => {
            setSprings(index1 => {
              if (index === index1) return { opacity: 0 };
            });
          }}
        >
          {massageArr[index]}
        </animated.div>
      ))}
    </div>
  );
}
