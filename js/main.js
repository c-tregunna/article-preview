const socialShare = document.querySelector('.article_social_share');
const socialButtons = document.querySelector('.article_social_share_buttons');
const socialIcon = document.querySelector('#path');
const socialIconWrap = document.querySelector('.article_social_share');

let screenWidth = window.innerWidth;
console.log(screenWidth);

socialShare.addEventListener('click', () => {
    if(screenWidth < 768) {
        socialButtons.classList.toggle('show');
        socialIcon.classList.toggle('invert_svg');
        socialIconWrap.classList.toggle('social_change');
    }
});
