import { atualizarTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome);
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizarTextoEditor(texto);
});

export { emitirTextoEditor, selecionarDocumento }