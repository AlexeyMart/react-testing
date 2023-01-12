export const content = {
  Greet: {
    text: "Hello",
  },
  Skills: {
    list: ["JavaScript", "Typescript", "React"],
  },
};

export const numberWithSpaces = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
