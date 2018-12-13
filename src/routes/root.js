const root = {
  method: "GET",
  path: "/",
  handler: (request, reply) => ({
    version: "0.0.1",
    title: "API do App de Lista de Tarefas"
  })
};

export default root;
