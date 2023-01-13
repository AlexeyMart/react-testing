import { useState, useEffect, FC } from "react";
import { content } from "../../content";
import "./Skills.css";

interface Props {
  skills: string[];
}

export const Skills: FC<Props> = ({ skills }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  }, []);

  const {
    Skills: { learningButtonText, loginButtonText, title },
  } = content;

  return (
    <>
      <h1 className="skills__title">{title}</h1>

      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>

      {isLoggedIn ? (
        <button>{learningButtonText}</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>{loginButtonText}</button>
      )}
    </>
  );
};
