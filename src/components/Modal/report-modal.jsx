// src/frontend/src/components/ReportModal/index.jsx
import React, { useEffect, useState } from 'react';
import {api} from '../../services/api';
import './report-modal.css'; // Estilos para o modal

const ReportModal = ({ isOpen, onClose, electionId }) => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    if (isOpen && electionId) {
      console.log("relatorio")
      const fetchReportData = async () => {
        try {
          const response = await api.get(`/reports/${electionId}`);
          setReportData(response.data);
        } catch (error) {
          console.error("Erro ao buscar dados do relatório:", error);
        }
      };
      fetchReportData();
    }
  }, [isOpen, electionId]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{reportData ? reportData.title : 'Carregando...'}</h2>
        {reportData && (
          <>
            <h3>Eleição para o cargo de presidente do Sindicato</h3>
            <p><strong>ENCERRADA</strong></p>
            <p>Número Total de Votos: {reportData.totalVotes}</p>
            <p>Taxa de Participação dos Eleitores: {reportData.participationRate}%</p>

            <h4>Número de Votos por Candidato:</h4>
            <ul>
              {reportData.votesPerCandidate.map(candidate => (
                <li key={candidate.candidateId}>
                  {candidate.name}: {candidate.votes} votos ({candidate.percentage.toFixed(2)}%)
                </li>
              ))}
            </ul>

            <h4>Percentual de Votos:</h4>
            <p>Votos Válidos: {reportData.validVotesPercentage.toFixed(2)}%</p>
            <p>Votos Brancos/Nulos: {reportData.blankVotesPercentage.toFixed(2)}%</p>
            <p>Total de Eleitores Votantes: {reportData.totalVoters}</p>
            <p>Total de Eleitores Não Votantes: {reportData.totalNonVoters}</p>

            <button onClick={onClose}>Fechar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ReportModal;
