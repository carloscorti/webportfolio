const parralaxMove = () => {
  // const bg = document.getElementById('bg');
  const cloud = document.getElementById('cloud');
  const centralthunder = document.getElementById('centralthunder');
  const city = document.getElementById('city');
  const text = document.getElementById('text');

  return window.addEventListener('scroll', () => {
    const valueY = window.scrollY;

    cloud.style.left = `${valueY * 0.8}px`;
    cloud.style.top = `${valueY * 0.3}px`;
    centralthunder.style.top = `${valueY * 0.9}px`;
    city.style.top = `${valueY * 0.3}px`;
    text.style.top = `${valueY * 0.6}px`;
  });
};
export default parralaxMove;
