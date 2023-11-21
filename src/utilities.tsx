export const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

export const randomRange = (min: number, max: number) => {
  return (Math.random() * (max - min) + min);
}