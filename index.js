const author = document.getElementById("author");
const socialLinks = document.getElementById("socialLinks");
const shareLink = document.querySelector("#footer a");

socialLinks.classList.add('hidden');

function toggleDivs() {
    if (window.innerWidth <= 1020) { //event listener for mobile view
        if(socialLinks.classList.contains('hidden')) {
            author.classList.add('hidden');
            socialLinks.classList.remove('hidden');
            socialLinks.classList.add('socialLinksStyle');
        }
        else {
            author.classList.remove('hidden');
            socialLinks.classList.remove('socialLinksStyle');
            socialLinks.classList.add('hidden');
        }
    }
    else { //event listener for desktop view
        if(socialLinks.classList.contains('hidden')) {
            socialLinks.classList.remove('hidden');
            socialLinks.classList.add('socialLinksStyle');
        }
        else {
            socialLinks.classList.remove('socialLinksStyle');
            socialLinks.classList.add('hidden');
        }
    }
}

shareLink.addEventListener('click', toggleDivs);