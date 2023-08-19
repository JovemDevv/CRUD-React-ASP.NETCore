import React from 'react';
import Atividade from './Atividade';

function ListaAtividades({
  atividades,
  modoEdicao,
  editarAtividade,
  deletarAtividade
}) {
  return (
    <div className="nt-3">
      {atividades.map((ativ) => (
        <Atividade
          key={ativ.id}
          atividade={ativ}
          modoEdicao={modoEdicao}
          editarAtividade={editarAtividade}
          deletarAtividade={deletarAtividade}
        />
      ))}
    </div>
  );
}

export default ListaAtividades;
