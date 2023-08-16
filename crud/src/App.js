import React, { useState } from 'react';
import './App.css';

function App() {
  const [atividades, setAtividades] = useState([]);

  const [novaAtividade, setNovaAtividade] = useState({ id: '', descricao: '' });

  function addAtividade(e) {
    e.preventDefault();

    const novoId = atividades.length > 0 ? atividades[atividades.length - 1].id + 1 : 1;

    const atividade = {
      id: novoId,
      descricao: novaAtividade.descricao
    };

    setAtividades([...atividades, { ...atividade}]);

    // Limpar campos
    setNovaAtividade({ id: '', descricao: '' });
    console.log(atividades)
  }

  return (
    <div>
      <form className="row g-3">
      <div className="form-group col-md-5">
        <label htmlFor="inputEmail4">ID</label>
        <input id="id"
        type="text"  
        className="form-control" 
        placeholder="ID"
            value={novaAtividade.id}
            onChange={(e) => setNovaAtividade({ ...novaAtividade, id: e.target.value })} />
      </div>

      <div className="form-group col-md-5">
        <label htmlFor="inputEmail4">Descrição</label>
        <input
              id="descricao"
              type="text"
              className="form-control" 
              placeholder="Descrição"
              value={novaAtividade.descricao}
              onChange={(e) => 
              setNovaAtividade({ ...novaAtividade, 
                descricao: e.target.value })}
            />
      </div>
        <br />
        <div className='col-12'>
          <button 
            className="btn btn-outline-dark"
            onClick={addAtividade}>
              + Atividade
          </button>
        </div>
      </form>
      <br />
      <div className="nt-3">
        
          {atividades.map((ativ) => (
            //style={{width: "18rem"}}
            <div key={ativ.id} class="card mb-2 shadow-sm" >              
              <div className="card-body">
                <div className='d-flex justify-content-between'>
                  <h5 className='card-title'>
                  <span  className="badge  badge-dark me-2">
            
                      {ativ.id}
                      </span>
                      - título
                  </h5>
                  <h6>
                    Prioridade: Normal
                  </h6>
                </div>
                <p className="card-text">{ativ.id} - {ativ.descricao}
                </p>
            </div>
          </div>
          ))}
        
      </div>
    </div>
  );
}

export default App;
