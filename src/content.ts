export const content = {
  Greet: {
    text: 'Hello',
  },
  Skills: {
    list: ['JavaScript', 'Typescript', 'React'],
    loginButtonText: 'Login',
    learningButtonText: 'Start learning',
    title: 'Skills',
  },
  Counter: {
    incrementButtonText: 'Increment',
    setButtonText: 'Set',
  },
  AnotherCounter: {
    title: 'AnotherCounter',
    incrementButtonText: 'Increment',
    decrementButtonText: 'Decrement',
  },
  Users: {
    title: 'Users',
    errorText: 'Error fetching users',
  },
};

export const numberWithSpaces = (value: number) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
