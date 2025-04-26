const xdevImages = [
    { src: "image/img1.jpg", caption: 'الصورة الأولى' },
    { src: "image/img2.jpg", caption: 'الصورة الثانية' },
    { src: "image/img3.jpg", caption: 'الصورة الثالثة' },
    { src: "image/img4.jpg", caption: 'الصورة الرابعة' }
  ];
  
  const xdevSlider = document.getElementById('xdev-slider');
  let xdevCurrentIndex = xdevImages.length;
  
  function xdevBuildSlides() {
    const xdevFullList = [...xdevImages, ...xdevImages, ...xdevImages];
  
    xdevFullList.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.className = 'xdev-slide';
      slide.innerHTML = `
        <img src="${img.src}" alt="">
        <div class="xdev-caption">${img.caption}</div>
      `;
      xdevSlider.appendChild(slide);
    });
  }
  
  function xdevUpdatePosition(index, animated = true) {
    const slideWidth = xdevSlider.children[0].offsetWidth + 20;
    const offset = (xdevSlider.offsetWidth - slideWidth) / 2;
    xdevSlider.style.transition = animated ? 'transform 0.4s ease' : 'none';
    xdevSlider.style.transform = `translateX(${-index * slideWidth + offset}px)`;
  
    Array.from(xdevSlider.children).forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  document.getElementById('xdev-nextBtn').onclick = () => {
    xdevCurrentIndex++;
    xdevUpdatePosition(xdevCurrentIndex);
    if (xdevCurrentIndex >= xdevImages.length * 2) {
      setTimeout(() => {
        xdevCurrentIndex = xdevImages.length;
        xdevUpdatePosition(xdevCurrentIndex, false);
      }, 400);
    }
  };
  
  document.getElementById('xdev-prevBtn').onclick = () => {
    xdevCurrentIndex--;
    xdevUpdatePosition(xdevCurrentIndex);
    if (xdevCurrentIndex < xdevImages.length) {
      setTimeout(() => {
        xdevCurrentIndex = xdevImages.length * 2 - 1;
        xdevUpdatePosition(xdevCurrentIndex, false);
      }, 400);
    }
  };
  
  window.addEventListener('load', () => {
    xdevBuildSlides();
    setTimeout(() => xdevUpdatePosition(xdevCurrentIndex, false), 10);
  });
  
  window.addEventListener('resize', () => {
    xdevUpdatePosition(xdevCurrentIndex, false);
  });
  