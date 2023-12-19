module.exports = {
  plugins: [
    require("imagemin-mozjpeg")(),
    require("imagemin-pngquant")({ quality: [0.6, 0.8] }),
    require("imagemin-gifsicle")(),
    require("imagemin-webp")({ quality: 75 }),
  ],
};
