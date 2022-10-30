const coverBallAnime=()=>{
    const animeWrapper = document.querySelector(".d-ball-anime-wrap");
    const animeBall = document.querySelector(".d-ball-sm");
    const animeBallShadow = document.querySelector(".d-ball-sm-shadow");
    const animeWrapperBounds = animeWrapper.getBoundingClientRect();
    const topBuffer = animeWrapperBounds.top;
    const leftBuffer = animeWrapperBounds.left;
    const maxTopValue = animeWrapperBounds.height;
 
    animeWrapper.addEventListener("mouseenter", e=>{
        let leftValue = e.pageX-leftBuffer;
        let topValue = e.pageY-topBuffer;
        let opacityValue = topValue/maxTopValue;
        let scaleValue = (1.5-opacityValue)*2;

        animeBall.classList.remove("d-ball-sm-anime");
        animeBallShadow.classList.remove("d-ball-sm-shadow-anime");

        animeBall.style.top = `${topValue}px`;
        animeBall.style.left = `${leftValue}px`;
        animeBallShadow.style.transform = `translateX(-50%) rotateX(90deg) scale(${scaleValue})`;
        animeBallShadow.style.opacity = `${opacityValue}`;
        animeBallShadow.style.left = `${leftValue}px`;

        animeBall.style.transition = `0.1s linear`;
        animeBallShadow.style.transition = `0.1s linear`;
    });

    animeWrapper.addEventListener("mousemove", e=>{
        let leftValue = e.pageX-leftBuffer;
        let topValue = e.pageY-topBuffer;
        let opacityValue = topValue/maxTopValue;
        let scaleValue = (1.5-opacityValue)*2;

        animeBall.style.top = `${topValue}px`;
        animeBall.style.left = `${leftValue}px`;
        animeBallShadow.style.transform = `translateX(-50%) rotateX(90deg) scale(${scaleValue})`;
        animeBallShadow.style.opacity = `${opacityValue}`;
        animeBallShadow.style.left = `${leftValue}px`;
    });

    animeWrapper.addEventListener("mouseleave", ()=>{
        animeBall.style.transition = `0.3s ease-in`;
        animeBallShadow.style.transition = `0.3s ease-in`;
        animeBall.classList.add("d-ball-sm-anime");
        animeBallShadow.classList.add("d-ball-sm-shadow-anime");
    });
}

coverBallAnime();