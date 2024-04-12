import { documentosColecao } from "./db-connect.js";

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome
  });

  return documento;
}

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({
    nome
  }, {
    $set: {
      texto
    }
  });

  return atualizacao;
}

export { encontrarDocumento, atualizaDocumento }