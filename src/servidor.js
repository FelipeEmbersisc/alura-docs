import express from "express";
import http from "node:http";
import url from "node:url";
import path from "node:path";
import { Server } from "socket.io";

const porta = process.env.PORTA || 3000;

const app = express();

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);
servidorHttp.listen(porta,() => console.log(`Servidor escutando na porta ${porta}`));

const io = new Server(servidorHttp);

export default io;