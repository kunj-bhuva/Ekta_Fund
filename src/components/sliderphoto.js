// // data.js
// export default [
//     '/images/slidebar/p1.png',
//     '/images/slidebar/p2.png',
//     '/images/slidebar/p3.png',
//     '/images/slidebar/p1 copy.png',
//     // Add more image paths as needed
//   ];
  
// import p1 from '../images/slidebar/p1.png';
// import p2 from '../images/slidebar/p2.png';
// import p3 from '../images/slidebar/p3.png';

// export default [p1, p2, p3];
// sliderphoto.js
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images/slidebar', false, /\.(png|jpe?g|svg)$/));
export default images;
