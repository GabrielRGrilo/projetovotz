import React, { useState, useEffect} from 'react';
import { Container, Content, ContentHeader, MainResults} from "./styles";
import { Header } from "../../components/Header";	
import Sidebar from '../../components/Sidebar';
import logo from "../../assets/logomarca.png";
import { useParams } from "react-router-dom";
import { Button } from '../../components/Button';
import { api } from '../../services/api';





export function Resultado ()  {
  const { id } = useParams(); // Pegamos o ID da eleição pela URL
  const [election, setElection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    try {
      const response = await api.get(`/elections/${id}`);
      setElection(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchResults();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Calcula a porcentagem de votos para cada candidato
  const totalVotes = election.candidates.reduce((total, candidate) => total + candidate.votes, 0);

  const winner = election.candidates.reduce((prev, current) => 
    prev.votes > current.votes ? prev : current
  );



    return (
        <Container>
            <Sidebar />

            <Content>
            <Header logo={logo}/>
            <ContentHeader>
                <h2>Resultado da Eleição: {election.title}</h2>
                <p>Encerramento da votação: {new Date(election.endDate).toLocaleString()}</p>
                <div className='status'>{election.status}</div>
                
            </ContentHeader> 
            <MainResults>
            <div className='mainResultsHeader'>
              <div><p>CANDIDATOS</p></div>
              <div className='totalVotes'>  <p>{totalVotes} votos totais</p></div>
            
        </div>
            <div>
            


      <div>
        {election.candidates.map((candidate) => {
          const percentage = ((candidate.votes / totalVotes) * 100).toFixed(2);
          return (
            <div className='candidatesVotes' key={candidate._id}>
              <div className='candidates'>
              
              {candidate.name = "João da Silva" ? "João da Silva" : "Maria da Silva"} 
                </div>
                <div className='votes'>
                {candidate.votes = "300"} votos ({percentage}%)
                </div>
            </div>
            
          );
        })}
      </div>
    </div>
          <button >Relatórios</button>  
            </MainResults>
                
            </Content>
        </Container>
    );
}


