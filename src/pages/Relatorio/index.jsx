import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { FaFilter, FaSearch } from 'react-icons/fa'
import {
  Container,
  Content,
  Header,
  TitleSection,
  SearchSection,
  SearchInput,
  VotingList,
  DropdownMenu // Certifique-se de que este styled component está definido
} from './styles'

import logo from '../../assets/logomarca.png';
import {api} from '../../services/api';

export function Relatorio() {
  const adminId = sessionStorage.getItem('adminId') // Pegamos o adminId da URL
  const [elections, setElections] = useState([])
  const [searchTerm, setSearchTerm] = useState('') // Estado para o texto de pesquisa
  const [statusFilter, setStatusFilter] = useState('') // Estado para o filtro de status
  const [isDropdownVisible, setDropdownVisible] = useState(false) // Estado para controlar a visibilidade do dropdown

  // Função para buscar as eleições do backend
  const fetchElections = async () => {
    try {
      const response = await api.get(
        `/elections/admin/${adminId}`
      );
      setElections(response.data); // Salvamos as eleições na variável de estado
    } catch (error) {
      console.error('Erro ao buscar eleições:', error)
    }
  }

  // useEffect para buscar as eleições quando o componente for montado
  useEffect(() => {
    if (adminId) {
      fetchElections()
    }
  }, [adminId])

  // Função para abrir o PDF do relatório
  const openReport = (electionId) => {
    const reportUrl = `/reports/${electionId}/export`;
    window.open(reportUrl, '_blank'); // Abre o PDF em uma nova aba
  };

  // Função para filtrar as eleições com base no termo de pesquisa e status
  const filteredElections = elections.filter(election => {
    const matchesSearch = election.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === '' || election.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  // Função para alternar a visibilidade do dropdown de status
  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev)
  }

  // Função para selecionar um status do filtro
  const selectStatusFilter = status => {
    setStatusFilter(status)
    setDropdownVisible(false) // Fecha o dropdown após a seleção
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <Header>
          <div className="header-container">
            <div className="logo-container">
              <img src={logo} alt="Votz logo" className="logo" />
              <p>Vote online com segurança.</p>
            </div>
          </div>
        </Header>

        <TitleSection>
          <h2>Relatório de Votação</h2>
          <SearchSection>
            <FaFilter className="filter-icon" onClick={toggleDropdown} />
            {isDropdownVisible && (
              <DropdownMenu>
                <div onClick={() => selectStatusFilter('')}>Todos</div>
                <div onClick={() => selectStatusFilter('ativa')}>Ativa</div>
                <div onClick={() => selectStatusFilter('cadastrada')}>
                  Cadastrada
                </div>
                <div onClick={() => selectStatusFilter('encerrada')}>
                  Encerrada
                </div>
              </DropdownMenu>
            )}
            <SearchInput
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </SearchSection>
        </TitleSection>

        <VotingList>
          {filteredElections.length > 0 ? (
            filteredElections.map(election => (
              <div key={election._id} className="voting-item">
                <div className="voting-info">
                  <img
                    src={election.imagePath || 'link_da_imagem.jpg'}
                    alt="Capa da votação"
                    className="voting-image"
                  />
                  <div className="voting-details">
                    <span className="voting-title">{election.title}</span>
                    <span
                      className={`voting-status ${election.status.toLowerCase()}`}
                    >
                      {election.status}
                    </span>
                  </div>
                </div>
                <button
                  className="view-button"
                  onClick={() => openReport(election._id)}
                >
                  Visualizar
                </button>
              </div>
            ))
          ) : (
            <p>Nenhuma eleição encontrada para este administrador.</p>
          )}
        </VotingList>
      </Content>
    </Container>
  )
}
