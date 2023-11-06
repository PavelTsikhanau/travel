let offset = 0,
    index = 1;

const wrapper = document.querySelector('.destinations-wrapper'),
      indicator = document.querySelectorAll('.destinations-indicator'),
      slide = document.querySelectorAll('.destinations-slide');

//окрашиваем индикатор 
indicator[index].style.background = '#F2785C';

function turnTheSlideRight () {
  offset += 860;
  indicator[index].style.background = 'rgba(242, 120, 92, 0.5)';
  indicator[index + 1].style.background = '#F2785C';
  index += 1;
  if (offset >= 860) {
    document.querySelector('.destination-click-right').removeEventListener('click', turnTheSlideRight);
    document.querySelector('.destination-click-left').addEventListener('click', turnTheSlideLeft);
  } 
  wrapper.style.left = -offset + 'px';
}

function turnTheSlideLeft () {
  offset -= 860;
  indicator[index].style.background = 'rgba(242, 120, 92, 0.5)';
  indicator[index - 1].style.background = '#F2785C';
  index -= 1;
  if (offset <= -860) {
    document.querySelector('.destination-click-left').removeEventListener('click', turnTheSlideLeft);
    document.querySelector('.destination-click-right').addEventListener('click', turnTheSlideRight);
  } 
  wrapper.style.left = -offset + 'px';
}

document.querySelector('.destination-click-right').addEventListener('click', turnTheSlideRight);
document.querySelector('.destination-click-left').addEventListener('click', turnTheSlideLeft);

console.log(indicator[index], slide[index+1]);


const loginBtn = document.querySelector('.header-button');
loginBtn.addEventListener('click', function () {
  document.querySelector('.popup').classList.remove('hidden');
});

document.querySelector('.popup').addEventListener('click', function () {
  document.querySelector('.popup').classList.add('hidden');
});

