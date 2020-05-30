export const mockResponse = response => new Promise(resolve => {
  setTimeout(() => {
    resolve(response);
  }, 1000)
});
