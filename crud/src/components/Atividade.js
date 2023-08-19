import React from 'react';

function Atividade({
  atividade,
  modoEdicao,
  editarAtividade,
  deletarAtividade
}) {
  return (
    <div key={atividade.id} className="card mb-2 shadow-sm">
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <h5 className='card-title'>
            <span className="badge badge-dark me-2">
              {atividade.id}
            </span>
            {atividade.titulo}
          </h5>
          <h6>
            {atividade.prioridade !== '0' && (
              <>
                Prioridade:{' '}
                {atividade.prioridade === '1' ? (
                  <span className='ms-1 text-black'>
                    <i className="me-1 fa-regular fa-grin"></i>
                  </span>
                ) : atividade.prioridade === '2' ? (
                  <span className='ms-1 text-black'>
                    <i className="me-1 fa-regular fa-smile"></i>
                  </span>
                ) : (
                  <span className='ms-1 text-black'>
                    <i className="me-1 fa-regular fa-face-frown"></i>
                  </span>
                )}
                {atividade.prioridade === '1' ? 'Baixa' : atividade.prioridade === '2' ? 'Normal' : 'Alta'}
              </>
            )}
          </h6>
        </div>
        <p className="card-text">{atividade.descricao}
          <div className="d-flex justify-content-end align-items-center border-top py-2">
            {!modoEdicao ? (
              <>
                <button className="btn btn-outline-primary me-2" onClick={() => editarAtividade(atividade.id)}>
                  <i className='fas fa-pen me-2'></i>
                  editar
                </button>
                <button className="btn btn-outline-danger" onClick={() => deletarAtividade(atividade.id)}>
                  <i className='fas fa-trash me-2'></i>
                  deletar
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </p>
      </div>
    </div>
  );
}

export default Atividade;
