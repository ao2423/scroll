document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');

  // どのセクションにいるかを計算
  if (scrollPosition < windowHeight) {
    image1.classList.add('active');
    image2.classList.remove('active');
    image3.classList.remove('active');
  } else if (scrollPosition < 2 * windowHeight) {
    image1.classList.remove('active');
    image2.classList.add('active');
    image3.classList.remove('active');
  } else {
    image1.classList.remove('active');
    image2.classList.remove('active');
    image3.classList.add('active');
  }
});
