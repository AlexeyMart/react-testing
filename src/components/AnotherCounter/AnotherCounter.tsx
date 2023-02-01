import { FC } from "react";
import { Typography, Button } from "@mui/material";
import { content } from "../../content";

interface Props {
  count: number;
  handleIncrement?: VoidFunction;
  handleDecrement?: VoidFunction;
}

export const AnotherCounter: FC<Props> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => {
  const {
    AnotherCounter: { title, incrementButtonText, decrementButtonText },
  } = content;
  return (
    <div>
      <Typography component="h1">{title}</Typography>

      <Typography component="p">{count}</Typography>

      {handleIncrement && (
        <Button onClick={handleIncrement} type="button">
          {incrementButtonText}
        </Button>
      )}

      {handleDecrement && (
        <Button onClick={handleDecrement} type="button">
          {decrementButtonText}
        </Button>
      )}
    </div>
  );
};
