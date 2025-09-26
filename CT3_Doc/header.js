function getPathPrefix() {
  const path = window.location.pathname;
  if (path.includes('/mdp/')) {
    return '../'; // 说明当前页面在 mdp 子目录下
  } else {
    return ''; // 说明当前页面在根目录
  }
}

const prefix = getPathPrefix();

document.querySelector('header').innerHTML = `
  <div class="content">
    <div class="logo">IRIS</div>
    <div class="menu-list">
      <div class="menu-item color-2" onclick="toPage('${prefix}index.html')">HOME</div>
      <div class="menu-item color-4" onclick="toPage('${prefix}about.html')">About Me</div>
      <div class="menu-item color-6" onclick="toPage('${prefix}mdp.html')">MDP Works</div>
      <div class="menu-item color-7" onclick="toPage('${prefix}writings.html')">Writings</div>
      <div class="menu-item color-5" onclick="toPage('${prefix}projects.html')">Projects</div>
      <div class="menu-item color-9" onclick="toPage('${prefix}artworks.html')">Artworks</div>
    </div>
  </div>
`;

function toPage(page) {
  window.location.href = page;
}
