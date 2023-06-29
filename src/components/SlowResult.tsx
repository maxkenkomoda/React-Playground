export const SlowResult: React.FC = () => {
  const getResultAfterDelay = (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("10 sec has passed");
      }, 5000);
    });
  };

  throw getResultAfterDelay();
};
