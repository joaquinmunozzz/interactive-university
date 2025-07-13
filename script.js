/* estilos.css */
body {
  font-family: Arial, sans-serif;
  background-color: #ffe6f0;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #d63384;
}

.malla {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

.ramo {
  background-color: #ff66b2;
  border: none;
  padding: 20px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.ramo:hover {
  background-color: #e055a1;
}

.ramo.locked {
  background-color: #ffcce5;
  cursor: not-allowed;
  opacity: 0.6;
}

.ramo.approved {
  background-color: #c2185b;
  opacity: 1;
}
