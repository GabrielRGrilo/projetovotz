import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { Container, Content, MainResults } from './styles'

export function Resultado() {
  const { id } = useParams()
  const [election, setElection] = useState({
    title: '',
    candidates: [],
    status: ''
  })
  const [totalVotes, setTotalVotes] = useState(0)

  useEffect(() => {
    const fetchElectionResults = async () => {
      console.log('OPAAAAAAA')
      try {
        // Busca os detalhes da eleição
        const responseElection = await api.get(`/elections/${id}`)
        const responseCandidates = await api.get(`/candidates/elections/${id}`)
        const responseVotings = await api.get(`/votings/elections/${id}`)

        const fetchedElection = responseElection.data
        const fetchedCandidates = responseCandidates.data

        console.log('feaefawef', fetchedCandidates)
        console.log('responseVotings', responseVotings)

        const candidates = fetchedCandidates
        candidates.forEach(cand => {
          cand.votes =
            responseVotings?.data?.[0]?.candidates?.find(
              c => c.candidateId === cand._id
            )?.votes || 0
        })

        console.log(candidates)

        setElection({
          title: fetchedElection.title,
          candidates: fetchedCandidates,
          status: fetchedElection.status
        })

        const total = fetchedCandidates.reduce(
          (sum, candidate) => sum + candidate.votes,
          0
        )
        setTotalVotes(total)
      } catch (error) {
        console.error('Erro ao buscar os resultados da eleição:', error)
      }
    }

    fetchElectionResults()
  }, [id])

  const sortedCandidates = [...election.candidates].sort(
    (a, b) => b.votes - a.votes
  )

  return (
    <Container>
      <Content>
        <MainResults>
          <div className="resultsHeader">
            <span className="columnHeader">Candidatos</span>
            <span className="columnHeader">
              {election.status === 'Encerrada'
                ? `Total de votos: ${totalVotes} votos`
                : 'Total de Votos: Aguarde Finalização'}
            </span>
          </div>
          <div className="candidatesList">
            {sortedCandidates.map((candidate, index) => {
              const percentage =
                totalVotes > 0
                  ? ((candidate.votes / totalVotes) * 100).toFixed(2)
                  : 0
              return (
                <div className="candidateItem" key={candidate._id}>
                  <span className="name">
                    {candidate.name}
                    {index === 0 && election.status === 'Encerrada' && (
                      <span style={{ color: '#57708c', marginLeft: '8px' }}>
                        (vencedor)
                      </span>
                    )}
                  </span>
                  <div className="progressBarContainer">
                    <div
                      className="progressBar"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor:
                          election.status === 'Encerrada'
                            ? '#007BFF'
                            : '#6C757D'
                      }}
                    />
                  </div>
                  <span className="votes">
                    {election.status === 'Encerrada'
                      ? `${candidate.votes} votos (${percentage}%)`
                      : 'Aguarde'}
                  </span>
                </div>
              )
            })}
          </div>
        </MainResults>
      </Content>
    </Container>
  )
}
