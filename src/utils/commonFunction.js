export const debounceAction = (func, waitTime) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, waitTime);
  };
};
