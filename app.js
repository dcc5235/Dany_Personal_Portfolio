function scrollAppear(){
  var projectsImg = document.querySelector('.projects__img');
  var projectsPosition = projectsImg.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if(projectsPosition < screenPosition){
    projectsImg.classList.add('img--appear');
  } 
}

window.addEventListener('scroll', scrollAppear);

