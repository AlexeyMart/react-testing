import { useState, useEffect, FC } from "react";

interface Props {
  skills: string[];
}

export const Skills: FC<Props> = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoggedIn(true);
  //     }, 1001);
  //   }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>

      {/* {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </>
  );
};
