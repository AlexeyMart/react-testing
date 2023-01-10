export const content = {
  Greet: {
    text: "Hello",
  },
};

export const numberWithSpaces = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
