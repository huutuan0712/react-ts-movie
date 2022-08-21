const originalImage = (imgPath: string) =>
  `https://image.tmdb.org/t/p/original/${imgPath}`;

const w500Image = (imgPath: string) =>
  `https://image.tmdb.org/t/p/w500/${imgPath}`;

export { originalImage, w500Image };
