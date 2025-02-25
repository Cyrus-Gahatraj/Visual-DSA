// The initial count
let initial_count = 4;

const setInitialCount = (num) => {
  initial_count = num;
};

const getInitialCount = () => {
  return initial_count;
};

export { setInitialCount, getInitialCount };
