/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex("livros").del()
    .then(function(){
      return knex("livros").insert([{
        titulo: "Web Design Responsivo", autor: "Mauricio", ano: 2014, preco: 73.0,
        foto: "https://s3.novatec.com.br/capas/9788575223925.jpg"
      },
      {
        titulo: "Proteção MOderna de Dados", autor: "W. Curtis Preston", ano: 2021, preco: 97.0,
        foto: "https://s3.novatec.com.br/capas/9788575223925.jpg"
      },
      {
        titulo: "SQL em 10 min por dia", autor: "Ben Forta", ano: 2021, preco: 73.0,
        foto: "https://s3.novatec.com.br/capas/9788575223925.jpg"
      }
      ])
    })
};
