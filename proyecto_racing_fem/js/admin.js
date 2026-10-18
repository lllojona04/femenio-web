/* LOGICA PANEL DE ADMINISTRACION - RACING FEM */
document.addEventListener('DOMContentLoaded', () => {
  // Verificar sesión
  if (localStorage.getItem('admin_logged') !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  const db = getSiteData();

  // Renderizar secciones
  renderAdminVisits(db.visitLogs || []);
  renderAdminVoters(db.voteLogs || []);
  renderAdminSquad(db.squad);
  renderAdminMatches(db.matches);
  renderAdminNews(db.news);
  renderAdminPolls(db.polls);

  // Logout
  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.removeItem('admin_logged');
    window.location.href = '../index.html';
  });

  // Formularios
  document.getElementById('form-add-player').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('player-name').value;
    const fullName = document.getElementById('player-fullname').value;
    const age = document.getElementById('player-age').value;
    const origin = document.getElementById('player-origin').value;
    const cat = document.getElementById('player-cat').value;
    const pos = document.getElementById('player-pos').value;

    const newPlayer = {
      id: Date.now(),
      name,
      fullName,
      age,
      origin,
      category: cat,
      pos
    };

    db.squad.push(newPlayer);
    saveSiteData(db);
    alert('Jugadora añadida correctamente.');
    location.reload();
  });

  document.getElementById('form-add-news').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('news-title-input').value;
    const summary = document.getElementById('news-summary-input').value;

    const newNews = {
      id: Date.now(),
      title,
      summary,
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    db.news.push(newNews);
    saveSiteData(db);
    alert('Noticia publicada.');
    location.reload();
  });

  document.getElementById('btn-export-data').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "racing_fem_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });
});

function renderAdminVisits(visits) {
  const tbody = document.getElementById('admin-visits-table');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (visits.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5">No hay registro de visitas recientes.</td></tr>';
    return;
  }

  visits.forEach(v => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${v.country}</strong></td>
      <td>${v.city}</td>
      <td><code>${v.ip}</code></td>
      <td><span style="background:var(--crema-tarjeta); padding:2px 8px; border-radius:4px; font-size:0.85rem;">${v.page}</span></td>
      <td>${v.date}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAdminVoters(voters) {
  const tbody = document.getElementById('admin-voters-table');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (voters.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4">No hay registro de votantes aún.</td></tr>';
    return;
  }

  voters.forEach(v => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${v.voterName}</strong></td>
      <td><span style="color:var(--verde-oscuro); font-weight:bold;">${v.optionText}</span></td>
      <td>${v.location}</td>
      <td>${v.date}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAdminSquad(squad) {
  const tbody = document.getElementById('admin-squad-table');
  if (!tbody) return;
  tbody.innerHTML = '';
  squad.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${p.name}</strong></td>
      <td>${p.fullName || p.name}</td>
      <td>${p.age || '-'}</td>
      <td>${p.origin || '-'}</td>
      <td>${p.category}</td>
      <td><button onclick="deletePlayer(${p.id})" style="background:#C0392B; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function deletePlayer(id) {
  if (confirm('¿Eliminar esta jugadora?')) {
    const db = getSiteData();
    db.squad = db.squad.filter(p => p.id !== id);
    saveSiteData(db);
    location.reload();
  }
}

function renderAdminMatches(matches) {
  const tbody = document.getElementById('admin-matches-table');
  if (!tbody) return;
  tbody.innerHTML = '';
  matches.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${m.round}</td>
      <td>${m.home} vs ${m.away}</td>
      <td>${m.score}</td>
      <td>${m.status}</td>
      <td><button onclick="editMatchScore(${m.id})" style="background:var(--verde-oscuro); color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Editar Marcador</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function editMatchScore(id) {
  const newScore = prompt('Introduce el nuevo marcador (ej: 2 - 1):');
  if (newScore !== null) {
    const db = getSiteData();
    const match = db.matches.find(m => m.id === id);
    if (match) {
      match.score = newScore;
      match.status = 'Finalizado';
      match.resultInfo = newScore + ' (Actualizado)';
      saveSiteData(db);
      location.reload();
    }
  }
}

function renderAdminNews(news) {
  const tbody = document.getElementById('admin-news-table');
  if (!tbody) return;
  tbody.innerHTML = '';
  news.forEach(n => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${n.title}</td>
      <td>${n.date}</td>
      <td><button onclick="deleteNews(${n.id})" style="background:#C0392B; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Eliminar</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteNews(id) {
  if (confirm('¿Eliminar noticia?')) {
    const db = getSiteData();
    db.news = db.news.filter(n => n.id !== id);
    saveSiteData(db);
    location.reload();
  }
}

function renderAdminPolls(polls) {
  const tbody = document.getElementById('admin-polls-table');
  if (!tbody) return;
  tbody.innerHTML = '';
  polls.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.question}</td>
      <td>${p.active ? 'Activa' : 'Inactiva'}</td>
      <td><button onclick="togglePoll(${p.id})" style="background:var(--dorado); color:var(--verde-oscuro); font-weight:bold; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Cambiar Estado</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function togglePoll(id) {
  const db = getSiteData();
  const poll = db.polls.find(p => p.id === id);
  if (poll) {
    poll.active = !poll.active;
    saveSiteData(db);
    location.reload();
  }
}
