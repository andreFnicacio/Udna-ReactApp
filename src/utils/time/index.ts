export const time = {
  wait: (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  },
};
