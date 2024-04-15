import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const tituloDocumento = document.getElementById("titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem título";

const botaoExcluir = document.getElementById("excluir-documento");
botaoExcluir.addEventListener("click", () => {
   emitirExcluirDocumento(nomeDocumento);
});

selecionarDocumento(nomeDocumento);

const textoEditor = document.getElementById("editor-texto");
textoEditor.addEventListener("keyup", () => {
   emitirTextoEditor({
      texto: textoEditor.value,
      nomeDocumento
   });
});

function atualizarTextoEditor(texto) {
   textoEditor.value = texto;
}

function alertarERedirecionar(nome) {
   if (nome === nomeDocumento) {
      alert(`Documento ${nome} excluido!`);
      window.location.href = "/";
   }
}

export { atualizarTextoEditor, alertarERedirecionar }