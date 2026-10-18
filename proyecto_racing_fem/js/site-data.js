/* DATOS GLOBALES DEL PROYECTO RACING FEM */
const INITIAL_DATA = {
  squad: [
    { id: 1, name: "Inés", fullName: "Inés García Augustin", origin: "Granada (Granada) - España", age: "23 años", category: "PORTERAS", pos: "Portera" },
    { id: 2, name: "Paula", fullName: "Paula Muñoz Álvarez", origin: "Santander (Cantabria) - España", age: "22 años", category: "PORTERAS", pos: "Portera" },
    { id: 3, name: "Ali", fullName: "Alicia Ruiz Pascua", origin: "Santander (Cantabria) - España", age: "28 años", category: "DEFENSAS", pos: "Defensa" },
    { id: 4, name: "Arantxa", fullName: "Arantxa Pérez Ochando", origin: "Elche (Alacant) - España", age: "20 años", category: "DEFENSAS", pos: "Defensa" },
    { id: 5, name: "Corbacho", fullName: "María Corbacho Carrero", origin: "Cáceres (Cáceres) - España", age: "24 años", category: "DEFENSAS", pos: "Defensa" },
    { id: 6, name: "Domi", fullName: "Ana María Domínguez Velázquez", origin: "Las Palmas de Gran Canaria (Las Palmas) - España", age: "19 años", category: "DEFENSAS", pos: "Defensa" },
    { id: 7, name: "Esther", fullName: "Esther Calderón Moreno", origin: "Valdemoro (Madrid) - España", age: "25 años", category: "DEFENSAS", pos: "Defensa" },
    { id: 8, name: "Naroa", fullName: "Naroa Flores Egurrola", origin: "Leioa (Bizkaia) - Euskal Herria", age: "20 años", category: "DEFENSAS", pos: "Defensa" },
    { id: 9, name: "Aitana", fullName: "Aitana García Etxeberria", origin: "No especificado", age: "18 años", category: "CENTROCAMPISTAS", pos: "Centrocampista" },
    { id: 10, name: "Claudia", fullName: "Claudia Gómez Villagrá", origin: "Palencia (Palencia) - España", age: "18 años", category: "CENTROCAMPISTAS", pos: "Centrocampista" },
    { id: 11, name: "Miriam", fullName: "Miriam Valladolid Sánchez", origin: "Getafe (Madrid) - España", age: "25 años", category: "CENTROCAMPISTAS", pos: "Centrocampista" },
    { id: 12, name: "Noa", fullName: "Noa Ruiz Álvarez", origin: "Barakaldo (Bizkaia) - Euskal Herria", age: "23 años", category: "CENTROCAMPISTAS", pos: "Centrocampista" },
    { id: 13, name: "Paulita", fullName: "Paula García Hontañón", origin: "No especificado", age: "18 años", category: "CENTROCAMPISTAS", pos: "Centrocampista" },
    { id: 14, name: "Rubia", fullName: "Ángela Fernández Fraile", origin: "No especificado", age: "19 años", category: "CENTROCAMPISTAS", pos: "Centrocampista" },
    { id: 15, name: "Valen", fullName: "Valentina Lucumi Montoya", origin: "Santoña (Cantabria) - España", age: "20 años", category: "CENTROCAMPISTAS", pos: "Centrocampista" },
    { id: 16, name: "Xesca", fullName: "Xesca Carbó Pascual", origin: "Barcelona (Barcelona) - España", age: "22 años", category: "CENTROCAMPISTAS", pos: "Centrocampista" },
    { id: 17, name: "Jimena", fullName: "Jimena Cabrero de la Llama", origin: "Santander (Cantabria) - España", age: "25 años", category: "DELANTERAS", pos: "Delantera" },
    { id: 18, name: "Karol", fullName: "Karolina Sarasua García", origin: "Iruña - Pamplona (Nafarroa) - Euskal Herria", age: "22 años", category: "DELANTERAS", pos: "Delantera" },
    { id: 19, name: "Mariajo", fullName: "María José Gutiérrez Díaz", origin: "Santander (Cantabria) - España", age: "23 años", category: "DELANTERAS", pos: "Delantera" },
    { id: 20, name: "Naiara", fullName: "Naiara Ordax Ibañez", origin: "Santander (Cantabria) - España", age: "20 años", category: "DELANTERAS", pos: "Delantera" },
    { id: 21, name: "Nerea", fullName: "Nerea De Diego Álvarez", origin: "Castro Urdiales (Cantabria) - España", age: "23 años", category: "DELANTERAS", pos: "Delantera" },
    { id: 22, name: "Rabasco", fullName: "Claudia Rabasco Campello", origin: "Elche (Alacant) - España", age: "20 años", category: "DELANTERAS", pos: "Delantera" }
  ],
  matches: [
    { id: 1, round: "Jornada 1", competition: "2ª Fed. (G1)", home: "Bizkerre F.T.", away: "Racing Fem", score: "1 - 0", status: "Finalizado", date: "Disputado", resultInfo: "1 - 0 (Derrota)" },
    { id: 101, round: "1ª Eliminatoria", competition: "Copa de la Reina", home: "Racing Fem", away: "C.A. Osasuna", score: "2 - 4", status: "Finalizado", date: "Disputado", resultInfo: "2 - 4 (Eliminación)" },
    { id: 2, round: "Jornada 2", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Madrid C.F.F. 'B'", score: "3 - 2", status: "Finalizado", date: "Disputado", resultInfo: "3 - 2 (Victoria)" },
    { id: 3, round: "Jornada 3", competition: "2ª Fed. (G1)", home: "Deportivo Abanca 'B'", away: "Racing Fem", score: "4 - 0", status: "Finalizado", date: "Disputado", resultInfo: "4 - 0 (Derrota)" },
    { id: 4, round: "Jornada 4", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Real Oviedo", score: "1 - 1", status: "Finalizado", date: "Disputado", resultInfo: "1 - 1 (Empate)" },
    { id: 5, round: "Jornada 5", competition: "2ª Fed. (G1)", home: "Victoria C.F.", away: "Racing Fem", score: "3 - 1", status: "Finalizado", date: "Disputado", resultInfo: "3 - 1 (Derrota)" },
    { id: 6, round: "Jornada 6", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Real Sporting de Gijón", score: "0 - 0", status: "Finalizado", date: "Disputado", resultInfo: "0 - 0 (Empate)" },
    { id: 7, round: "Jornada 7", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Rayo Vallecano", score: "-", status: "Pendiente", date: "25 de octubre · 12:00" },
    { id: 8, round: "Jornada 8", competition: "2ª Fed. (G1)", home: "Burgos C.F.", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 9, round: "Jornada 9", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "S.D. Eibar 'B'", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 10, round: "Jornada 10", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "As Celtas", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 11, round: "Jornada 11", competition: "2ª Fed. (G1)", home: "C.D. Arratia", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 12, round: "Jornada 12", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "C.A. Osasuna 'B'", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 13, round: "Jornada 13", competition: "2ª Fed. (G1)", home: "Real Avilés C.F.", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 14, round: "Jornada 14", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Victoria C.F.", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 15, round: "Jornada 15", competition: "2ª Fed. (G1)", home: "Madrid C.F.F. 'B'", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 16, round: "Jornada 16", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Bizkerre F.T.", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 17, round: "Jornada 17", competition: "2ª Fed. (G1)", home: "S.D. Eibar 'B'", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 18, round: "Jornada 18", competition: "2ª Fed. (G1)", home: "Real Sporting de Gijón", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 19, round: "Jornada 19", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Deportivo Abanca 'B'", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 20, round: "Jornada 20", competition: "2ª Fed. (G1)", home: "C.A. Osasuna 'B'", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 21, round: "Jornada 21", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Real Avilés C.F.", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 22, round: "Jornada 22", competition: "2ª Fed. (G1)", home: "Real Oviedo", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 23, round: "Jornada 23", competition: "2ª Fed. (G1)", home: "Rayo Vallecano", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 24, round: "Jornada 24", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "C.D. Arratia", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 25, round: "Jornada 25", competition: "2ª Fed. (G1)", home: "As Celtas", away: "Racing Fem", score: "-", status: "Pendiente", date: "Por definir" },
    { id: 26, round: "Jornada 26", competition: "2ª Fed. (G1)", home: "Racing Fem", away: "Burgos C.F.", score: "-", status: "Pendiente", date: "Por definir" }
  ],
  standings: [
    { pos: 1, team: "Deportivo Abanca B Fem", pts: 15, pj: 6, pg: 5, pe: 0, pp: 1, gf: 20, gc: 3, dg: "+17" },
    { pos: 2, team: "Real Oviedo Fem", pts: 14, pj: 6, pg: 4, pe: 2, pp: 0, gf: 15, gc: 1, dg: "+14" },
    { pos: 3, team: "Eibar B Fem", pts: 12, pj: 6, pg: 3, pe: 3, pp: 0, gf: 6, gc: 2, dg: "+4" },
    { pos: 4, team: "Real Sporting Fem", pts: 11, pj: 6, pg: 3, pe: 2, pp: 1, gf: 11, gc: 7, dg: "+4" },
    { pos: 5, team: "Real Avilés Fem", pts: 10, pj: 6, pg: 3, pe: 1, pp: 2, gf: 7, gc: 8, dg: "-1" },
    { pos: 6, team: "CD Arratia Fem", pts: 9, pj: 6, pg: 3, pe: 0, pp: 3, gf: 6, gc: 8, dg: "-2" },
    { pos: 7, team: "AS Celtas Fem", pts: 8, pj: 6, pg: 2, pe: 2, pp: 2, gf: 9, gc: 11, dg: "-2" },
    { pos: 8, team: "Burgos CF Fem", pts: 7, pj: 6, pg: 2, pe: 1, pp: 3, gf: 13, gc: 5, dg: "+8" },
    { pos: 9, team: "Victoria CF Fem", pts: 7, pj: 6, pg: 2, pe: 1, pp: 3, gf: 10, gc: 11, dg: "-1" },
    { pos: 10, team: "Club Bizkerre Fem", pts: 7, pj: 6, pg: 2, pe: 1, pp: 3, gf: 8, gc: 13, dg: "-5" },
    { pos: 11, team: "Rayo Vallecano Fem", pts: 7, pj: 6, pg: 2, pe: 1, pp: 3, gf: 6, gc: 17, dg: "-11" },
    { pos: 12, team: "Racing Fem", pts: 5, pj: 6, pg: 1, pe: 2, pp: 3, gf: 5, gc: 11, dg: "-6" },
    { pos: 13, team: "Osasuna B Fem", pts: 3, pj: 6, pg: 1, pe: 0, pp: 5, gf: 2, gc: 16, dg: "-14" },
    { pos: 14, team: "Madrid CFF B Fem", pts: 2, pj: 6, pg: 0, pe: 2, pp: 4, gf: 7, gc: 12, dg: "-5" }
  ],
  news: [
    {
      id: 1,
      title: "Preparando la Jornada 7 ante el Rayo Vallecano",
      date: "20 de octubre, 2026",
      summary: "El equipo vuelve a los entrenamientos en las Instalaciones Nando Yosu centradas en la visita del conjunto valcano el próximo 25 de octubre.",
      content: "Las verdiblancas buscan reencontrarse con la victoria en casa. El equipo técnico ha programado sesiones dobles tácticas."
    }
  ],
  polls: [
    {
      id: 1,
      question: "¿Cómo crees que va a quedar en la jornada 7?",
      active: true,
      options: [
        { id: 1, text: "Gana", votes: 15 },
        { id: 2, text: "Empata", votes: 28 },
        { id: 3, text: "Pierde", votes: 45 }
      ]
    }
  ],
  voteLogs: [
    { pollId: 1, voterName: "Carlos Gómez", optionText: "Pierde", date: "18/10/2026 10:15", location: "Santander, España 🇪🇸" },
    { pollId: 1, voterName: "Lucía Fernández", optionText: "Empata", date: "18/10/2026 11:30", location: "Madrid, España 🇪🇸" },
    { pollId: 1, voterName: "Manuel Rivas", optionText: "Gana", date: "18/10/2026 12:05", location: "Buenos Aires, Argentina 🇦🇷" },
    { pollId: 1, voterName: "Elena Sanchis", optionText: "Pierde", date: "18/10/2026 13:22", location: "Barcelona, España 🇪🇸" }
  ],
  visitLogs: [
    { id: 1, page: "inicio.html", date: "18/10/2026 13:45:12", country: "España 🇪🇸", city: "Santander", ip: "83.54.120.14" },
    { id: 2, page: "encuestas.html", date: "18/10/2026 13:46:01", country: "España 🇪🇸", city: "Madrid", ip: "212.128.4.55" },
    { id: 3, page: "inicio.html", date: "18/10/2026 13:46:30", country: "México 🇲🇽", city: "Ciudad de México", ip: "187.210.32.11" },
    { id: 4, page: "clasificacion.html", date: "18/10/2026 13:47:00", country: "Argentina 🇦🇷", city: "Buenos Aires", ip: "190.19.88.23" },
    { id: 5, page: "plantilla.html", date: "18/10/2026 13:47:15", country: "Francia 🇫🇷", city: "París", ip: "81.250.140.2" }
  ]
};

function getSiteData() {
  const data = localStorage.getItem('racing_fem_db');
  if (!data) {
    localStorage.setItem('racing_fem_db', JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }
  return JSON.parse(data);
}

function saveSiteData(data) {
  localStorage.setItem('racing_fem_db', JSON.stringify(data));
}

// Registrar visita automáticamente
(function trackVisit() {
  const db = getSiteData();
  if (!db.visitLogs) db.visitLogs = [];
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage !== 'login.html' && currentPage !== 'dashboard.html') {
    const locations = [
      { country: "España 🇪🇸", city: "Santander", ip: "83.54.120." + Math.floor(Math.random() * 250) },
      { country: "España 🇪🇸", city: "Torrelavega", ip: "88.12.90." + Math.floor(Math.random() * 250) },
      { country: "España 🇪🇸", city: "Madrid", ip: "212.128.4." + Math.floor(Math.random() * 250) },
      { country: "México 🇲🇽", city: "Guadalajara", ip: "187.210.15." + Math.floor(Math.random() * 250) },
      { country: "Argentina 🇦🇷", city: "Córdoba", ip: "190.19.45." + Math.floor(Math.random() * 250) },
      { country: "Colombia 🇨🇴", city: "Bogotá", ip: "181.60.12." + Math.floor(Math.random() * 250) }
    ];
    const loc = locations[Math.floor(Math.random() * locations.length)];
    const now = new Date();
    const dateStr = now.toLocaleDateString('es-ES') + ' ' + now.toLocaleTimeString('es-ES');
    
    db.visitLogs.unshift({
      id: Date.now(),
      page: currentPage,
      date: dateStr,
      country: loc.country,
      city: loc.city,
      ip: loc.ip
    });
    
    // Mantener máximo 50 registros de visitas
    if (db.visitLogs.length > 50) db.visitLogs.pop();
    saveSiteData(db);
  }
})();
