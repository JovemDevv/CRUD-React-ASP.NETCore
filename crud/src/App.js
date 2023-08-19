import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Formulario from './components/Formulario';
import ListaAtividades from './components/ListaAtividades';

function App() {
  const [atividades, setAtividades] = useState([]);
  const [novaAtividade, setNovaAtividade] = useState({ id: '', titulo: '', descricao: '' });
  const [prioridadeSelecionada, setPrioridadeSelecionada] = useState('0');
  const [modoEdicao, setModoEdicao] = useState(false);
  const [idEdicao, setIdEdicao] = useState(null);

  useEffect(() => {
    fetchAtividades(); // Fetch activities when the component mounts
  }, []);

  async function fetchAtividades() {
    try {
      const response = await axios.get('http://localhost:5000/atividades'); // Corrected endpoint
      setAtividades(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  }

  function calcularProximoId() {
    if (atividades.length === 0) {
      return 1;
    } else {
      const maxId = Math.max(...atividades.map(atividade => atividade.id));
      return maxId + 1;
    }
  }

  function addAtividade(e) {
    e.preventDefault();

    if (prioridadeSelecionada !== '0') {
      const novoId = calcularProximoId();

      const atividade = {
        id: novoId,
        titulo: novaAtividade.titulo,
        descricao: novaAtividade.descricao,
        prioridade: prioridadeSelecionada
      };

      setAtividades([...atividades, { ...atividade }]);
      setNovaAtividade({ id: '', titulo: '', descricao: '' });
      setPrioridadeSelecionada('0');
    }
  }

  function editarAtividade(id) {
    const atividadeSelecionada = atividades.find(atividade => atividade.id === id);
    setModoEdicao(true);
    setIdEdicao(id);
    setNovaAtividade({ ...atividadeSelecionada });
    setPrioridadeSelecionada(atividadeSelecionada.prioridade);
  }

  function salvarEdicao() {
    const novasAtividades = atividades.map(atividade =>
      atividade.id === idEdicao
        ? { ...novaAtividade, prioridade: prioridadeSelecionada, id: idEdicao }
        : atividade
    );

    setAtividades(novasAtividades);
    setModoEdicao(false);
    setIdEdicao(null);
    setNovaAtividade({ id: '', titulo: '', descricao: '' });
    setPrioridadeSelecionada('0');
  }

  function cancelarEdicao() {
    setModoEdicao(false);
    setIdEdicao(null);
    setNovaAtividade({ id: '', titulo: '', descricao: '' });
    setPrioridadeSelecionada('0');
  }

  function deletarAtividade(id) {
    const novaListaAtividades = atividades.filter(atividade => atividade.id !== id);
    setAtividades(novaListaAtividades);
  }

  return (
    <div>
      <Formulario
        calcularProximoId={calcularProximoId}
        prioridadeSelecionada={prioridadeSelecionada}
        setPrioridadeSelecionada={setPrioridadeSelecionada}
        novaAtividade={novaAtividade}
        setNovaAtividade={setNovaAtividade}
        addAtividade={addAtividade}
        modoEdicao={modoEdicao}
        salvarEdicao={salvarEdicao}
        cancelarEdicao={cancelarEdicao}
      />
      <br />
      <ListaAtividades
        atividades={atividades}
        modoEdicao={modoEdicao}
        editarAtividade={editarAtividade}
        deletarAtividade={deletarAtividade}
      />
    </div>
  );
}

export default App;
