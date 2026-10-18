/* LOGICA PAGINAS PUBLICAS - RACING FEM */
document.addEventListener('DOMContentLoaded', () => {
  const db = getSiteData();

  // 1. CARROUSEL PRINCIPAL (inicio.html)
  const carouselContainer = document.getElementById('hero-carousel');
  if (carouselContainer) {
    initHeroCarousel();
  }

  // 2. CARROUSEL HORIZONTAL DE PARTIDOS (inicio.html)
  const matchesContainer = document.getElementById('home-matches-carousel');
  if (matchesContainer) {
    renderHomeMatches(db.matches, matchesContainer);
    initMatchesScrollButtons();
  }

  // 3. PLANTILLA (plantilla.html)
  const squadContainer = document.getElementById('squad-container');
  if (squadContainer) {
    renderSquad(db.squad, squadContainer);
  }

  // 4. CALENDARIO PARTIDOS (partidos.html)
  const matchesGrid = document.getElementById('all-matches-grid');
  if (matchesGrid) {
    renderAllMatches(db.matches, matchesGrid);
  }

  // 5. RESULTADOS (resultados.html)
  const resultsGrid = document.getElementById('results-grid');
  if (resultsGrid) {
    renderResults(db.matches, resultsGrid);
  }

  // 6. CLASIFICACION (clasificacion.html)
  const standingsBody = document.getElementById('standings-body');
  if (standingsBody) {
    renderStandings(db.standings, standingsBody);
  }

  // 7. NOTICIAS (noticias.html)
  const newsContainer = document.getElementById('news-container');
  if (newsContainer) {
    renderNews(db.news, newsContainer);
  }

  // 8. ENCUESTAS (encuestas.html)
  const pollsContainer = document.getElementById('polls-container');
  if (pollsContainer) {
    renderPolls(db.polls, pollsContainer);
  }
});

// FUNCIONES DE RENDERIZADO

function initHeroCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const indicatorsContainer = document.getElementById('carousel-indicators');
  let currentIndex = 0;
  let timer = null;

  if (slides.length === 0) return;

  // Crear indicadores
  slides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.classList.add('indicator');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(idx));
    indicatorsContainer.appendChild(dot);
  });

  const indicators = document.querySelectorAll('.indicator');

  function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function startAutoPlay() {
    timer = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (timer) clearInterval(timer);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); goToSlide(currentIndex - 1); startAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); goToSlide(currentIndex + 1); startAutoPlay(); });

  const carousel = document.getElementById('hero-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}

function renderHomeMatches(matches, container) {
  container.innerHTML = '';
  matches.forEach(m => {
    const isFinished = m.status === 'Finalizado';
    const card = document.createElement('div');
    card.className = 'match-card';
    card.innerHTML = `
      <div class="match-header">
        <span>${m.competition}</span>
        <span>${m.round}</span>
      </div>
      <div class="match-body">
        <div class="match-team">
          <div class="team-badge">${getTeamBadgeText(m.home)}</div>
          <span class="team-name">${m.home}</span>
        </div>
        <div class="match-score-badge">
          ${isFinished ? m.score.replace(/ /g, '&nbsp;') : 'VS'}
        </div>
        <div class="match-team">
          <div class="team-badge">${getTeamBadgeText(m.away)}</div>
          <span class="team-name">${m.away}</span>
        </div>
      </div>
      <div class="match-footer">
        ${isFinished ? m.resultInfo : m.date}
      </div>
    `;
    container.appendChild(card);
  });
}

function initMatchesScrollButtons() {
  const container = document.getElementById('home-matches-carousel');
  const leftBtn = document.getElementById('match-scroll-left');
  const rightBtn = document.getElementById('match-scroll-right');

  if (container && leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', () => {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
}

function renderSquad(squad, container) {
  container.innerHTML = '';
  const categories = ['PORTERAS', 'DEFENSAS', 'CENTROCAMPISTAS', 'DELANTERAS'];

  categories.forEach(cat => {
    const players = squad.filter(p => p.category === cat);
    if (players.length > 0) {
      const section = document.createElement('div');
      section.className = 'squad-category';
      
      let gridHtml = `<div class="squad-grid">`;
      players.forEach(p => {
        gridHtml += `
          <div class="player-card">
            <div class="player-photo-placeholder">⚽</div>
            <div class="player-info">
              <div class="player-name">${p.name}</div>
              <div class="player-position">${p.pos}</div>
              <div style="margin-top: 10px;">
                <button class="btn-primary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="openPlayerModal('${p.fullName}', '${p.age}', '${p.origin}', '${p.pos}')">Ver Ficha</button>
              </div>
            </div>
          </div>
        `;
      });
      gridHtml += `</div>`;

      section.innerHTML = `<h3>${cat}</h3>` + gridHtml;
      container.appendChild(section);
    }
  });

  // Inject modal HTML if not present
  if (!document.getElementById('player-modal')) {
    const modalHtml = `
      <div id="player-modal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.7); z-index:2000; justify-content:center; align-items:center;">
        <div style="background:var(--crema-fondo); padding:2rem; border-radius:10px; max-width:400px; width:90%; border:3px solid var(--dorado); text-align:center; position:relative;">
          <h3 id="modal-name" style="color:var(--verde-oscuro); margin-bottom:0.5rem; font-size:1.5rem;"></h3>
          <p id="modal-pos" style="color:var(--dorado); font-weight:bold; margin-bottom:1rem; text-transform:uppercase;"></p>
          <hr style="border:0; border-top:1px solid #ddd; margin:1rem 0;">
          <p style="margin:0.5rem 0; font-size:1.1rem;"><strong>Edad:</strong> <span id="modal-age"></span></p>
          <p style="margin:0.5rem 0; font-size:1.1rem;"><strong>Lugar de procedencia:</strong> <span id="modal-origin"></span></p>
          <button class="btn-primary" style="margin-top:1.5rem;" onclick="closePlayerModal()">Cerrar Ficha</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }
}

window.openPlayerModal = function(fullName, age, origin, pos) {
  document.getElementById('modal-name').innerText = fullName;
  document.getElementById('modal-pos').innerText = pos;
  document.getElementById('modal-age').innerText = age;
  document.getElementById('modal-origin').innerText = origin;
  document.getElementById('player-modal').style.display = 'flex';
}

window.closePlayerModal = function() {
  document.getElementById('player-modal').style.display = 'none';
}


function renderAllMatches(matches, container) {
  container.innerHTML = '';
  matches.forEach(m => {
    const isFinished = m.status === 'Finalizado';
    const card = document.createElement('div');
    card.className = 'match-card';
    card.style.maxWidth = '100%';
    card.innerHTML = `
      <div class="match-header">
        <span>${m.competition}</span>
        <span>${m.round}</span>
      </div>
      <div class="match-body">
        <div class="match-team">
          <div class="team-badge">${getTeamBadgeText(m.home)}</div>
          <span class="team-name">${m.home}</span>
        </div>
        <div class="match-score-badge">
          ${isFinished ? m.score.replace(/ /g, '&nbsp;') : 'VS'}
        </div>
        <div class="match-team">
          <div class="team-badge">${getTeamBadgeText(m.away)}</div>
          <span class="team-name">${m.away}</span>
        </div>
      </div>
      <div class="match-footer">
        ${isFinished ? m.resultInfo : m.date}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderResults(matches, container) {
  container.innerHTML = '';
  const finished = matches.filter(m => m.status === 'Finalizado');
  if (finished.length === 0) {
    container.innerHTML = '<p>No hay resultados disputados registrados.</p>';
    return;
  }
  finished.forEach(m => {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.style.maxWidth = '100%';
    card.innerHTML = `
      <div class="match-header">
        <span>${m.competition}</span>
        <span>${m.round}</span>
      </div>
      <div class="match-body">
        <div class="match-team">
          <div class="team-badge">${getTeamBadgeText(m.home)}</div>
          <span class="team-name">${m.home}</span>
        </div>
        <div class="match-score-badge">${m.score}</div>
        <div class="match-team">
          <div class="team-badge">${getTeamBadgeText(m.away)}</div>
          <span class="team-name">${m.away}</span>
        </div>
      </div>
      <div class="match-footer">
        Resultado indicado: <strong>${m.resultInfo}</strong>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderStandings(standings, container) {
  container.innerHTML = '';
  standings.forEach(s => {
    const tr = document.createElement('tr');
    if (s.team.includes('Racing')) {
      tr.className = 'row-highlight';
    }
    tr.innerHTML = `
      <td>${s.pos}</td>
      <td style="text-align: left; font-weight: 600;">${s.team}</td>
      <td><strong>${s.pts}</strong></td>
      <td>${s.pj}</td>
      <td>${s.pg}</td>
      <td>${s.pe}</td>
      <td>${s.pp}</td>
      <td>${s.gf}</td>
      <td>${s.gc}</td>
      <td>${s.dg}</td>
    `;
    container.appendChild(tr);
  });
}

function renderNews(news, container) {
  container.innerHTML = '';
  if (!news || news.length === 0) {
    container.innerHTML = '<p style="font-size: 1.1rem; color: #666;">Próximamente publicaremos novedades del equipo.</p>';
    return;
  }
  news.forEach(n => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <div class="news-body">
        <div class="news-date">${n.date}</div>
        <h3 class="news-title">${n.title}</h3>
        <p>${n.summary}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPolls(polls, container) {
  container.innerHTML = '';
  const activePolls = polls.filter(p => p.active);
  if (activePolls.length === 0) {
    container.innerHTML = '<p style="color: #666;">No hay encuestas activas en este momento.</p>';
    return;
  }

  activePolls.forEach(p => {
    const card = document.createElement('div');
    card.className = 'poll-card';

    const votedKey = 'voted_poll_' + p.id;
    const hasVoted = localStorage.getItem(votedKey);
    const totalVotes = p.options.reduce((sum, opt) => sum + opt.votes, 0);

    let optionsHtml = '';
    p.options.forEach(opt => {
      // Cálculo de porcentaje real exacto redondeado
      const pct = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
      if (!hasVoted) {
        optionsHtml += `
          <div class="poll-option">
            <input type="radio" name="poll_${p.id}" id="opt_${p.id}_${opt.id}" value="${opt.id}">
            <label for="opt_${p.id}_${opt.id}"><strong>${opt.text}</strong></label>
          </div>
        `;
      } else {
        optionsHtml += `
          <div style="margin-bottom: 0.8rem;">
            <div style="display:flex; justify-content:space-between; font-size:0.95rem; margin-bottom: 4px;">
              <span><em>${opt.text}</em></span>
              <span><strong>${opt.votes} votos (${pct}%)</strong></span>
            </div>
            <div class="poll-progress">
              <div class="poll-bar" style="width: ${pct}%"></div>
            </div>
          </div>
        `;
      }
    });

    let actionBtn = '';
    if (!hasVoted) {
      actionBtn = `
        <div style="margin-top: 1.2rem; background: var(--crema-tarjeta); padding: 1rem; border-radius: 8px; border: 1px solid var(--dorado);">
          <label style="display:block; font-weight:bold; color:var(--verde-oscuro); margin-bottom: 0.4rem;">Tu Nombre o Nickname:</label>
          <input type="text" id="voter_name_${p.id}" placeholder="Escribe tu nombre para votar..." style="width:100%; padding:0.6rem; border-radius:6px; border:1px solid #CCC; margin-bottom: 0.8rem;">
          <button class="btn-primary" onclick="votePoll(${p.id})">Emitir Voto</button>
        </div>
      `;
    } else {
      actionBtn = `<p style="color:var(--verde-oscuro); font-weight:bold; margin-top:0.8rem;">¡Gracias por tu voto! (Resultados reales calculados en tiempo real)</p>`;
    }

    card.innerHTML = `
      <h3 style="color: var(--verde-oscuro); margin-bottom: 1rem; font-size: 1.3rem;">${p.question}</h3>
      <div id="poll-options-${p.id}">${optionsHtml}</div>
      <div>${actionBtn}</div>
      <p style="font-size: 0.75rem; color: #777; margin-top: 0.8rem;">* Porcentajes calculados en tiempo real sobre ${totalVotes} votos totales registrados.</p>
    `;
    container.appendChild(card);
  });
}

function votePoll(pollId) {
  const selected = document.querySelector(`input[name="poll_${pollId}"]:checked`);
  if (!selected) {
    alert("Por favor, selecciona una opción para votar.");
    return;
  }

  const voterInput = document.getElementById('voter_name_' + pollId);
  const voterName = voterInput ? voterInput.value.trim() : '';

  if (!voterName) {
    alert("Por favor, escribe tu nombre o alias para registrar tu voto.");
    return;
  }

  const optionId = parseInt(selected.value);
  const db = getSiteData();
  const poll = db.polls.find(p => p.id === pollId);

  if (poll) {
    const opt = poll.options.find(o => o.id === optionId);
    if (opt) {
      opt.votes += 1;
      
      if (!db.voteLogs) db.voteLogs = [];
      const now = new Date();
      const dateStr = now.toLocaleDateString('es-ES') + ' ' + now.toLocaleTimeString('es-ES', {hour: '2-digit', minute:'2-digit'});
      
      db.voteLogs.unshift({
        pollId: pollId,
        voterName: voterName,
        optionText: opt.text,
        date: dateStr,
        location: "Santander, España 🇪🇸"
      });

      saveSiteData(db);
      localStorage.setItem('voted_poll_' + pollId, 'true');
      alert("¡Voto de " + voterName + " registrado con éxito!");
      location.reload();
    }
  }
}
