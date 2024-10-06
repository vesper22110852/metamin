let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // 모든 슬라이드를 숨김
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // 'active' 클래스를 제거하여 숨김
    }

    slideIndex++; // 다음 슬라이드로 인덱스 증가

    // 슬라이드 인덱스가 마지막을 넘으면 첫 번째로 돌아감
    if (slideIndex >= slides.length) { 
        slideIndex = 0; // 인덱스가 0부터 시작하기 때문에 0으로 리셋
    }

    // 현재 슬라이드를 활성화
    slides[slideIndex].classList.add("active"); // 'active' 클래스를 추가하여 보이게 함

    // 3초마다 슬라이드 전환
    setTimeout(showSlides, 3000); 
}

window.onload = function() {
    showSlides(); // 페이지 로드 시 슬라이드쇼 시작
}
