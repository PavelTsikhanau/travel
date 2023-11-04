let offset = 0;
const wrapper = document.querySelector('.destinations-wrapper');
let index = 0;


document.querySelector('.destinations-button').addEventListener('click', function() {
  offset += 860;
  if (offset > 1720) {
    offset = 0;
  }
  wrapper.style.left = -offset + 'px';
  // const slides = wrapper.children;
  // console.log(wrapper.children);

  // const firstSlide = wrapper.removeChild(slides[0]);
  // wrapper.appendChild(slides[index]);
  // index += 1;

  // console.log(wrapper.children);
});


  const loginBtn = document.querySelector('.header-button');
  loginBtn.addEventListener('click', function () {
    // document.querySelector('.popup').style.display = 'flex';
    document.querySelector('.popup').classList.remove('hidden');
  })

