const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  const files = await imagemin(['images/*.{JPG}'], {
    destination: 'build_images',
    plugins: [
      imageminMozjpeg()
    ]
  });
  console.log(files);
})();