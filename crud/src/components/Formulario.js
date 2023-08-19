import React from 'react';

function Formulario({
  calcularProximoId,
  prioridadeSelecionada,
  setPrioridadeSelecionada,
  novaAtividade,
  setNovaAtividade,
  addAtividade,
  modoEdicao,
  salvarEdicao,
  cancelarEdicao
}) {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label className='form-label'>ID</label>
        <input
          id="id"
          type="text"
          className="form-control disabled"
          placeholder="ID"
          value={calcularProximoId()}
          readOnly
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Prioridade</label>
        <select
          id="prioridade"
          className="form-control"
          value={prioridadeSelecionada}
          onChange={(e) => setPrioridadeSelecionada(e.target.value)}
        >
          <option value="0">Selecionar...</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className='form-label'>Título</label>
        <input
          id="titulo"
          type="text"
          className="form-control"
          placeholder="Título"
          value={novaAtividade.titulo}
          onChange={(e) => setNovaAtividade({ ...novaAtividade, titulo: e.target.value })}
        />
      </div>
      <div className="col-md-6">
        <label className='form-label'>Descrição</label>
        <input
          id="descricao"
          type="text"
          className="form-control"
          placeholder="Descrição"
          value={novaAtividade.descricao}
          onChange={(e) => setNovaAtividade({ ...novaAtividade, descricao: e.target.value })}
        />
      </div>
      <br />
      <div className='col-12'>
        {!modoEdicao ? (
          <button className="btn btn-outline-dark" onClick={addAtividade}>
            + Atividade
          </button>
        ) : (
          <div>
            <button className="btn btn-outline-primary me-2" onClick={salvarEdicao}>
              Salvar
            </button>
            <button className="btn btn-outline-secondary" onClick={cancelarEdicao}>
              Cancelar
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default Formulario;
