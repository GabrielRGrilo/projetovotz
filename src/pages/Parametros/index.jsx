import {
    Container,
    Form,
    Row,
    InputGroup,
    RadioGroup,
    CheckboxGroup,
} from "./styles";
import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

const enviarDadosParaBackend = async (formData) => {
    try {
        const response = await api.post("/elections", formData);

        console.log("Resposta do servidor:", response.data);

        if (response.status < 200 || response.status >= 300) {
            console.error("Erro na resposta do servidor:", response.data);
            throw new Error("Erro ao enviar dados para o backend");
        }

        const result = response.data;

        if (result.id) {
            sessionStorage.setItem("electionId", result.id);
            console.log("Election ID salvo no session storage:", result.id);
        }

        return result;
    } catch (error) {
        console.error("Erro ao enviar dados:", error.message);
        throw error;
    }
};

    const Parametro = ({ setActiveTab }) => {
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [startDate, setStartDate] = useState("");
        const [endDate, setEndDate] = useState("");
        const [imageFile, setImageFile] = useState(null);
        const [docFiles, setDocFiles] = useState([]);
        const [voteType, setVoteType] = useState("");
        const [allowBlankVote, setAllowBlankVote] = useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!title || !description || !startDate || !endDate) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            // Obtém a data atual
            const currentDate = new Date();
            const currentDateString = currentDate.toISOString(); // Usa o formato ISO completo para comparação

            // Verifica se a data de início é maior que a data de fim
            if (new Date(startDate) > new Date(endDate)) {
                alert("A data de fim não pode ser anterior à data de início.");
                return;
            }

            // Verifica se a data de início ou fim é menor que a data atual
            if (new Date(startDate) < currentDate) {
                alert("A data de início não pode ser anterior à data atual.");
                return;
            }

            if (new Date(endDate) < currentDate) {
                alert("A data de fim não pode ser anterior à data atual.");
                return;
            }

            // Verifica se pelo menos uma opção de voto foi selecionada
            if (!voteType) {
                alert("Por favor, selecione um tipo de voto.");
                return;
            }

            const status = "Cadastrada";
            const adminId =
                sessionStorage.getItem("adminId") || "66df9db67729208ccf6db1ba";
            const formData = new FormData();
            formData.append("adminId", adminId);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("startDate", startDate);
            formData.append("endDate", endDate);
            formData.append("status", status);
            formData.append("voteType", voteType);
            formData.append("allowBlankVote", allowBlankVote);

            if (imageFile) {
                formData.append("coverImage", imageFile);
            }

            if (docFiles.length > 0) {
                console.log(docFiles);
                docFiles.forEach((file) => formData.append("docPath", file));
            }

            // log
            for (const pair of formData.entries()) {
                console.log(
                    `${pair[0]}: ${pair[1] instanceof File ? pair[1].name : pair[1]}`
                );
            }

            try {
                const result = await enviarDadosParaBackend(formData);
                console.log("Resultado da chamada ao backend:", result);
                if (result.id) {
                    sessionStorage.setItem("electionId", result.id);
                    console.log("Election ID salvo no local storage:", result.id);
                }
                setActiveTab("eleitores"); // Chame a função para mudar a guia
            } catch (error) {
                console.error("Erro ao salvar os dados:", error.message);
            }
        };

        const handleImageChange = (e) => {
            if (e.target.files && e.target.files[0]) {
                setImageFile(e.target.files[0]);
            }
        };

        const handleDocsChange = (e) => {
            if (e.target.files) {
                setDocFiles(Array.from(e.target.files));
            }
        };

        const handleVoteTypeChange = (e) => {
            setVoteType(e.target.value);
        };

        const handleAllowBlankVoteChange = (e) => {
            setAllowBlankVote(e.target.checked);
        };

        return (
            <Container>
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Row>
                        <div>
                            <label htmlFor="title">
                                Título<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <label htmlFor="description">
                                Descrição<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <label htmlFor="startDate">
                                Data início<span className="required">*</span>
                            </label>
                            <input
                                type="datetime-local"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate">
                                Data Fim<span className="required">*</span>
                            </label>
                            <input
                                type="datetime-local"
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </div>
                    </Row>
                    <Row>
                        <InputGroup>
                            <label htmlFor="coverImage">Imagem de capa</label>
                            <input type="file" id="coverImage" onChange={handleImageChange} />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="docPath">Documentos associados</label>
                            <input
                                type="file"
                                id="docs"
                                onChange={handleDocsChange}
                                multiple
                                required
                            />
                        </InputGroup>
                    </Row>
                    <Row>
                        <p>
                            Opções de voto<span className="required">*</span>
                        </p>
                    </Row>
                    <Row>
                        <RadioGroup>
                            <label>
                                <input
                                    type="radio"
                                    name="voteType"
                                    value="multiple"
                                    checked={voteType === "multiple"}
                                    onChange={handleVoteTypeChange}
                                />
                                voto múltiplo &nbsp;&nbsp;
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="voteType"
                                    value="single"
                                    checked={voteType === "single"}
                                    onChange={handleVoteTypeChange}
                                />
                                voto único &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                        </RadioGroup>
                        <RadioGroup>
                            <label>
                                <input
                                    type="radio"
                                    name="voteType"
                                    value="optional"
                                    checked={voteType === "optional"}
                                    onChange={handleVoteTypeChange}
                                />
                                voto opcional &nbsp;&nbsp;&nbsp;
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="voteType"
                                    value="mandatory"
                                    checked={voteType === "mandatory"}
                                    onChange={handleVoteTypeChange}
                                />
                                voto obrigatório
                            </label>
                        </RadioGroup>
                    </Row>
                    <Row>
                        <CheckboxGroup>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={allowBlankVote}
                                    onChange={handleAllowBlankVoteChange}
                                />
                                voto branco/nulo
                            </label>
                        </CheckboxGroup>
                    </Row>
                    <Row>
                        <div className="button-container">
                            <Button type="submit" title="Próxima" className="no-hover" />
                        </div>
                    </Row>
                </Form>
            </Container>
        );
    };

    Parametro.propTypes = {
        onSubmit: PropTypes.func,
        setActiveTab: PropTypes.func.isRequired,
    };

    export default Parametro;
