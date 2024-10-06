let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // 모든 슬라이드를 숨김
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    slideIndex++;
    
    // 슬라이드 인덱스가 마지막을 넘으면 첫 번째로 돌아감
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }
    
    // 현재 슬라이드를 활성화
    slides[slideIndex - 1].classList.add("active");

    // 5초마다 슬라이드 전환
    setTimeout(showSlides, 3000); 
}

window.onload = function() {
    showSlides();
}
