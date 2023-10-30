let offset = 0;
const wrapper = document.querySelector('.wrapper');

document.querySelector('.destinations-button').addEventListener('click', function() {
  offset += 860;
  if (offset > 1600) {
    offset = 0;
  }
  wrapper.style.left = -offset + 'px';

})
