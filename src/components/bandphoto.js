const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../images/NGOs', false, /\.(png|jpe?g|svg)$/));
export default images;
