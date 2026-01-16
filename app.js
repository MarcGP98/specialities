const express = require("express");

const app = express();
const PORT = 3000;

const usersData = [
  { id: 1, name: "Alice", age: 28, specialty: "marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "developers" },
  { id: 3, name: "Charlie", age: 30, specialty: "developers" },
  { id: 4, name: "David", age: 25, specialty: "QAs" },
  { id: 5, name: "Emma", age: 32, specialty: "ventas" },
  { id: 6, name: "Frank", age: 28, specialty: "marketing" },
  { id: 7, name: "Grace", age: 34, specialty: "developers" },
  { id: 8, name: "Hank", age: 27, specialty: "QAs" },
  { id: 9, name: "Ivy", age: 31, specialty: "ventas" },
  { id: 10, name: "Jack", age: 29, specialty: "marketing" },
  { id: 11, name: "Karen", age: 36, specialty: "developers" },
  { id: 12, name: "Leo", age: 26, specialty: "QAs" },
  { id: 13, name: "Mia", age: 33, specialty: "ventas" },
  { id: 14, name: "Nathan", age: 30, specialty: "marketing" },
  { id: 15, name: "Olivia", age: 37, specialty: "developers" },
  { id: 16, name: "Paul", age: 24, specialty: "QAs" },
  { id: 17, name: "Quinn", age: 32, specialty: "ventas" },
  { id: 18, name: "Ryan", age: 28, specialty: "marketing" },
  { id: 19, name: "Sara", age: 35, specialty: "developers" },
  { id: 20, name: "Tom", age: 29, specialty: "QAs" },
  { id: 21, name: "Uma", age: 30, specialty: "ventas" },
  { id: 22, name: "Victor", age: 27, specialty: "marketing" },
  { id: 23, name: "Wendy", age: 34, specialty: "developers" },
  { id: 24, name: "Xander", age: 31, specialty: "QAs" },
  { id: 25, name: "Yara", age: 33, specialty: "ventas" },
  { id: 26, name: "Zack", age: 28, specialty: "marketing" },
  { id: 27, name: "Ava", age: 36, specialty: "developers" },
  { id: 28, name: "Bryan", age: 26, specialty: "QAs" },
  { id: 29, name: "Cynthia", age: 32, specialty: "ventas" },
  { id: 30, name: "Derek", age: 30, specialty: "marketing" },
];

function filterUsersBySpecialty(specialty) {
  const filtered = [];

  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].specialty === specialty) {
      filtered.push(usersData[i]);
    }
  }

  return filtered;
}

const specialties = ["marketing", "developers", "QAs", "ventas"];

function renderNav() {
  let links = "";
  for (let i = 0; i < specialties.length; i++) {
    links += `<a href="/${specialties[i]}">${specialties[i]}</a><br>`;
  }

  return `
    <nav>
      <a href="/">Home</a><br>
      ${links}
    </nav>
    <hr>
  `;
}

app.get("/", (req, res) => {
  res.send(`
    <h1>Home - Listado de usuarios por especialidad</h1>
    <p>Elige una especialidad:</p>
    ${renderNav()}
  `);
});

app.get("/marketing", (req, res) => {
  const users = filterUsersBySpecialty("marketing");

  res.send(`
    ${renderNav()}
    <h1>Especialidad: marketing</h1>
    <p>Numero de personas: ${users.length}</p>
    <ul>
      ${users
        .map((u) => `<li>ID: ${u.id} - ${u.name} (${u.age} años)</li>`)
        .join("")}
    </ul>
  `);
});

app.get("/developers", (req, res) => {
  const users = filterUsersBySpecialty("developers");

  res.send(`
    ${renderNav()}
    <h1>Especialidad: developers</h1>
    <p>Numero de personas: ${users.length}</p>
    <ul>
      ${users
        .map((u) => `<li>ID: ${u.id} - ${u.name} (${u.age} años)</li>`)
        .join("")}
    </ul>
  `);
});

app.get("/QAs", (req, res) => {
  const users = filterUsersBySpecialty("QAs");

  res.send(`
    ${renderNav()}
    <h1>Especialidad: QAs</h1>
    <p>Numero de personas: ${users.length}</p>
    <ul>
      ${users
        .map((u) => `<li>ID: ${u.id} - ${u.name} (${u.age} años)</li>`)
        .join("")}
    </ul>
  `);
});

app.get("/ventas", (req, res) => {
  const users = filterUsersBySpecialty("ventas");

  res.send(`
    ${renderNav()}
    <h1>Especialidad: ventas</h1>
    <p>Numero de personas: ${users.length}</p>
    <ul>
      ${users
        .map((u) => `<li>ID: ${u.id} - ${u.name} (${u.age} años)</li>`)
        .join("")}
    </ul>
  `);
});

app.use((req, res) => {
  res.status(404).send(`
    ${renderNav()}
    <h1>404 - Página no encontrada</h1>
    <p>La ruta <b>${req.path}</b> no existe.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});