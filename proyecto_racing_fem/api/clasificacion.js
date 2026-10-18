module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  return res.status(200).json({
    ok: true,
    mensaje: "La API de Racing Fem funciona",
    fuente: "pendiente de conectar",
    clasificacion: []
  });
};

