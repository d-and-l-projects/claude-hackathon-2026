// components/sidebar.js
export function renderSidebar(activePage) {
  const el = document.getElementById('sidebar');
  if (!el) return;
  el.innerHTML = `
    <div class="sidebar-logo" style="cursor:pointer;" onclick="window.location.href='./dashboard.html'">
      <div class="logo-icon"><img src="../images/bear.png" alt=""></div>
      <span class="logo-name">FirstAdvisor</span>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Main</div>
      <a href="./dashboard.html" class="nav-item ${activePage==='dashboard'?'active':''}">
        <i class="ti ti-layout-dashboard"></i> Dashboard
      </a>
      <a href="./upload.html" class="nav-item ${activePage==='upload'?'active':''}">
        <i class="ti ti-upload"></i> Upload document
      </a>
      <a href="./analysis.html" class="nav-item ${activePage==='analysis'?'active':''}">
        <i class="ti ti-file-analytics"></i> Analysis
      </a>
      <a href="./visualizer.html" class="nav-item ${activePage==='visualizer'?'active':''}">
        <i class="ti ti-chart-arrows-vertical"></i> Future impact
      </a>
      <div class="nav-section-label" style="margin-top:8px;">Learn</div>
      <a href="./glossary.html" class="nav-item ${activePage==='glossary'?'active':''}">
        <i class="ti ti-book"></i> Glossary
      </a>
    </nav>
    <div class="sidebar-user" id="sidebarUser">
      <div class="user-avatar" id="userAvatarEl">?</div>
      <div class="user-info">
        <div class="user-name" id="userNameEl">Loading...</div>
        <div class="user-email" id="userEmailEl"></div>
      </div>
      <i class="ti ti-logout user-logout" onclick="handleLogout()" title="Sign out"></i>
    </div>
  `;
  hydrateUser();
}

async function hydrateUser() {
  try {
    const { onAuth, logOut } = await import('../firebase.js');
    onAuth((user) => {
      const nameEl = document.getElementById('userNameEl');
      const emailEl = document.getElementById('userEmailEl');
      const avatarEl = document.getElementById('userAvatarEl');
      if (user) {
        if (nameEl) nameEl.textContent = user.displayName || 'User';
        if (emailEl) emailEl.textContent = user.email || '';
        if (avatarEl) {
          avatarEl.innerHTML = user.photoURL
            ? `<img src="${user.photoURL}" alt="${user.displayName}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`
            : (user.displayName||'U').charAt(0).toUpperCase();
        }
      } else {
        if (nameEl) nameEl.textContent = sessionStorage.getItem('demoMode') ? 'Demo User' : 'Guest';
        if (emailEl) emailEl.textContent = 'demo mode';
        if (avatarEl) avatarEl.textContent = 'D';
      }
    });
    window.handleLogout = logOut;
  } catch {
    const nameEl = document.getElementById('userNameEl');
    const emailEl = document.getElementById('userEmailEl');
    if (nameEl) nameEl.textContent = 'Demo User';
    if (emailEl) emailEl.textContent = 'demo mode';
    window.handleLogout = () => { sessionStorage.clear(); window.location.href = './landing.html'; };
  }
}
