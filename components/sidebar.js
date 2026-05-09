// components/sidebar.js
// Call renderSidebar('pageName') on each page to inject + hydrate the sidebar

export function renderSidebar(activePage) {
  const el = document.getElementById('sidebar');
  if (!el) return;

  el.innerHTML = `
    <div class="sidebar-logo">
      <div class="logo-icon"><i class="ti ti-chart-line"></i></div>
      <span class="logo-name">FinLens</span>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Main</div>
      <a href="./dashboard.html" class="nav-item ${activePage==='dashboard'?'active':''}" id="nav-dashboard">
        <i class="ti ti-layout-dashboard"></i> Dashboard
      </a>
      <a href="./upload.html" class="nav-item ${activePage==='upload'?'active':''}" id="nav-upload">
        <i class="ti ti-upload"></i> Upload document
      </a>
      <a href="./analysis.html" class="nav-item ${activePage==='analysis'?'active':''}" id="nav-analysis">
        <i class="ti ti-file-analytics"></i> Analysis
      </a>
      <a href="./visualizer.html" class="nav-item ${activePage==='visualizer'?'active':''}" id="nav-visualizer">
        <i class="ti ti-chart-arrows-vertical"></i> Future impact
      </a>
      <div class="nav-section-label" style="margin-top:8px;">Learn</div>
      <a href="#" class="nav-item" id="nav-glossary">
        <i class="ti ti-book"></i> Glossary
      </a>
      <a href="#" class="nav-item" id="nav-history">
        <i class="ti ti-history"></i> Past documents
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
      if (user) {
        const nameEl = document.getElementById('userNameEl');
        const emailEl = document.getElementById('userEmailEl');
        const avatarEl = document.getElementById('userAvatarEl');
        if (nameEl) nameEl.textContent = user.displayName || 'User';
        if (emailEl) emailEl.textContent = user.email || '';
        if (avatarEl) {
          if (user.photoURL) {
            avatarEl.innerHTML = `<img src="${user.photoURL}" alt="${user.displayName}">`;
          } else {
            avatarEl.textContent = (user.displayName || 'U').charAt(0).toUpperCase();
          }
        }
      } else {
        // Demo mode
        const nameEl = document.getElementById('userNameEl');
        const emailEl = document.getElementById('userEmailEl');
        if (nameEl) nameEl.textContent = 'Demo User';
        if (emailEl) emailEl.textContent = 'demo mode';
      }
    });
    window.handleLogout = logOut;
  } catch {
    // Firebase not configured — graceful fallback
    const nameEl = document.getElementById('userNameEl');
    const emailEl = document.getElementById('userEmailEl');
    if (nameEl) nameEl.textContent = 'Demo User';
    if (emailEl) emailEl.textContent = 'demo mode';
    window.handleLogout = () => { window.location.href = './landing.html'; };
  }
}
