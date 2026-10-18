/* JS GENERAL - RACING FEM */
document.addEventListener('DOMContentLoaded', () => {
  // Menú hamburguesa
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links-menu');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});

// Helper para generar iniciales de equipos
function getTeamBadgeText(teamName) {
  if (teamName.includes('Racing')) return 'RAC';
  if (teamName.includes('Bizkerre')) return 'BIZ';
  if (teamName.includes('Osasuna')) return 'OSA';
  if (teamName.includes('Madrid')) return 'MAD';
  if (teamName.includes('Deportivo')) return 'DEP';
  if (teamName.includes('Oviedo')) return 'OVI';
  if (teamName.includes('Victoria')) return 'VIC';
  if (teamName.includes('Sporting')) return 'SPO';
  if (teamName.includes('Rayo')) return 'RAY';
  if (teamName.includes('Burgos')) return 'BUR';
  if (teamName.includes('Eibar')) return 'EIB';
  if (teamName.includes('Celtas')) return 'CEL';
  if (teamName.includes('Arratia')) return 'ARR';
  if (teamName.includes('Avilés')) return 'AVI';
  return teamName.substring(0, 3).toUpperCase();
}
