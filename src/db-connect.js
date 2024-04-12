import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://felipeembersisc:EETxGn5anOtGIk7a@aluracluster.no2uqhq.mongodb.net/?retryWrites=true&w=majority&appName=AluraCluster");

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso");
} catch (error) {
  console.error(error);
}

export { documentosColecao };
