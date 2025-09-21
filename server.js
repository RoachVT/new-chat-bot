import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get("/so", (req, res) => {
  const user = req.query.user;
  if (!user) return res.send("Falta ?user=nombre");

  res.send(`¡Vayan a seguir a ${user} en https://twitch.tv/${user} 💜`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
