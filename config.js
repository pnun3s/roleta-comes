// ============================================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================================
// Substitui os valores abaixo pelos que encontras na consola do
// Firebase, em: Definições do projeto -> Geral -> "As tuas apps"
// -> app Web -> "SDK setup and configuration" -> Config.
//
// Estes valores NÃO são secretos (são visíveis a qualquer pessoa
// que veja o código-fonte da página) — a segurança real vem das
// "regras" do Firestore (ficheiro firestore.rules), não de
// esconder esta configuração.
// ============================================================

export const firebaseConfig = {
  apiKey: "COLA_AQUI_A_TUA_API_KEY",
  authDomain: "COLA_AQUI_O_TEU_PROJETO.firebaseapp.com",
  projectId: "COLA_AQUI_O_TEU_PROJECT_ID",
  storageBucket: "COLA_AQUI_O_TEU_PROJETO.appspot.com",
  messagingSenderId: "COLA_AQUI_O_SENDER_ID",
  appId: "COLA_AQUI_O_APP_ID"
};
