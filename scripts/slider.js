let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("banner-slide");
    let dots = document.getElementsByClassName("dot");

    // 모든 슬라이드와 도트 비활성화
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // 슬라이드 인덱스 업데이트
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // 현재 슬라이드와 도트 활성화
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // 3초마다 슬라이드 전환
    setTimeout(showSlides, 3000); 
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(); // 페이지가 로드된 후 슬라이드 쇼 시작
});
