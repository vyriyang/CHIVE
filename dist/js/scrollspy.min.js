const links = document.querySelectorAll(".scrollspy-link");
const sections = document.querySelectorAll(".scrollspy-section");
const indicator = document.querySelector(".scrollspy-indicator");

const defaultTarget = "Name"; // 預設的目標 section id

// 點擊事件設定
links.forEach((link) => {
  link.onclick = () => {
    sections.forEach((section) => {
      if (link.dataset.target === section.id) {
        document.documentElement.scrollTop = section.offsetTop;
      }
    });
  };
});

// 初始 indicator 設定
const initIndicator = () => {
  const activeLink = document.querySelector(
    `.scrollspy-link[data-target="${defaultTarget}"]`
  );
  if (activeLink) {
    indicator.style.left = `${activeLink.offsetLeft}px`;
    indicator.style.width = `${activeLink.offsetWidth}px`;
  }
};

// scrollspy 功能
const scrollspy = () => {
  const pageYPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  let currentSectionId = defaultTarget;

  sections.forEach((section) => {
    const sectionYPosition = section.offsetTop;
    if (pageYPosition >= sectionYPosition - 60) {
      currentSectionId = section.id;
    }
  });

  links.forEach((link) => {
    if (link.dataset.target === currentSectionId) {
      indicator.style.left = `${link.offsetLeft}px`;
      indicator.style.width = `${link.offsetWidth}px`;
    }
  });
};

// 初始與事件綁定
window.onload = () => {
  initIndicator(); // 初始定位
  scrollspy();     // 同步滾動狀態
};
window.onscroll = scrollspy;
window.onresize = scrollspy;




