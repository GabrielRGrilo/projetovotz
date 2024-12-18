import { Container, Form, Row } from "./styles";
import { Button } from "../../components/Button";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { api } from "../../services/api";

const Eleitor = ({ setActiveTab }) => {
  const [voters, setVoters] = useState([]);
  const [valid, setValid] = useState([]);
  const [invalid, setInvalid] = useState([]);
  const [error, setError] = useState(null);
  const electionId = sessionStorage.getItem("electionId");

  const modelFileUrl =
    api.defaults.baseURL.replace("/api", "") + "/public/model/voters_model.csv";

  // useEffect(() => {
  //   if (voters.length === 0) {
  //     fetchVoters();
  //   }
  // }, [voters]);

  const fetchVoters = async () => {
    try {
      const response = await api.get(`/voter?electionId=${electionId}`);
      setVoters(Array.isArray(response.data) ? response.data : []);
      // console.log(">>> Eleitores/index.js voters", voters);
    } catch (error) {
      console.error("Erro ao buscar eleitores:", error);
    }
  };

  const handleDataUpload = async (e) => {
    const file = e.target.files[0];
    setError(null);

    if (!isValidCSV(file)) {
      setError("Please upload a valid CSV file.");
      return;
    }

    try {
      const result = await uploadFile(file);
      console.log(">>> Eleitores/index.js handleDataUpload result", result);
      if (result) {
        setValid(result.validRows);
        setInvalid(result.invalidRows);
      } else {
        setError("Error processing the CSV file.");
      }
    } catch (err) {
      setError("Error uploading the file to the server.");
    }
  };

  // Validate if the selected file is a CSV
  const isValidCSV = (file) => {
    return file && file.name.endsWith(".csv");
  };

  // Upload the file to the server
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    // console.log(">>> Eleitores/index.js file", file);
    try {
      const response = await api.post("/voters/file", formData);
      console.log(">>> Eleitores/index.js uploadFile response", response);

      if (response.status === 200 && response.data) {
        return response.data; // Return parsed data directly
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Upload failed:", error.message || error.response);
      throw new Error("Failed to upload the file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validRowsWithElectionId = valid.map((row) => ({
      ...row,
      electionId,
    }));

    console.log(validRowsWithElectionId);

    try {
      const response = await api.post("/voters", validRowsWithElectionId);
      console.log(response.data);
    } catch (err) {
      console.error("Erro ao enviar os dados:", err);
      setError("Erro ao enviar os dados.");
    }

    setActiveTab("candidatos");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <a href={modelFileUrl} download>
            <Button title={"Baixar modelo"} className="no-hover"></Button>
          </a>
        </Row>
        <Row>
          <div>
            <input type="file" accept=".csv" onChange={handleDataUpload} />
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          </div>
        </Row>
        <Row>
          {valid.length > 0 && (
            <table id="valid" border="1">
              <thead>
                <tr>
                  {Object.keys(valid[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {valid.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Row>
        {/* <Row>
          {invalid.length > 0 && (
            <table id="invalid" border="1">
              <thead>
                <tr>
                  {Object.keys(invalid[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {invalid.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Row> */}
        <Row>
          <div className="button-container">
            <Button type="submit" title="Próxima" className="no-hover" />
          </div>
        </Row>
      </Form>
    </Container>
  );
};

Eleitor.propTypes = {
  onSubmit: PropTypes.func,
  setActiveTab: PropTypes.func,
};

export default Eleitor;
