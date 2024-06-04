import React from "react";
import axios from "axios";
import MaterialTable from "material-table";

const baseUrl = "https://8b543f5f-d0bc-448e-8008-b13c51260f9f.mock.pstmn.io";

const GerenciamentoAvaliacao = (props) => {
  const { useState, useEffect } = React;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await handleClick();
      if (response) {
        setData(response);
      }
    };

    getData();
  }, []);

  async function handleClick() {
    try {
      const response = await axios.get(`${baseUrl}/get-avaliacao`);
      console.log("Response data:", response.data);
      if (response.data && response.data.lista) {
        const avaliacoes = response.data.lista.map((c) => {
          return {
            id: c.id,
            aluno: c.aluno,
            componente: c.componente,
            nota: c.nota,
          };
        });
        return avaliacoes;
      } else {
        console.log(
          "A propriedade 'lista' não foi encontrada nos dados da resposta."
        );
        return [];
      }
    } catch (error) {
      console.log("Erro ao buscar dados:", error);
      return [];
    }
  }

  function handleCreate(newData) {
    const requestBody = {
      id: newData.id,
      aluno: newData.aluno,
      componente: newData.componente,
      nota: newData.nota,
    };

    axios
      .post(`${baseUrl}/post-avaliacao`, requestBody)
      .then(function (response) {
        console.log("Salvo com sucesso.");
        setData([...data, newData]);
      })
      .catch(function (error) {
        console.log("Erro ao salvar dados:", error);
      });
  }

  function handleUpdate(newData) {
    const requestBody = {
      id: newData.id,
      aluno: newData.aluno,
      componente: newData.componente,
      nota: newData.nota,
    };

    axios
      .put(`${baseUrl}/update-avaliacao`, requestBody)
      .then(function (response) {
        console.log("Atualizado com sucesso.");
        const dataUpdate = [...data];
        const index = dataUpdate.findIndex((item) => item.id === newData.id);
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
      })
      .catch(function (error) {
        console.log("Erro ao atualizar dados:", error);
      });
  }

  function handleDelete(newData) {
    const requestBody = {
      id: newData.id,
    };

    axios
      .delete(`${baseUrl}/delete-avaliacao`, {
        data: requestBody,
      })
      .then(function (response) {
        console.log("Deletado com sucesso.");
        const dataDelete = [...data];
        const index = dataDelete.findIndex((item) => item.id === newData.id);
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
      })
      .catch(function (error) {
        console.log("Erro ao deletar dados:", error);
      });
  }

  return (
    <MaterialTable
      title="Gerenciamento de Avaliação"
      columns={[
        { title: "Id", field: "id" },
        { title: "Aluno", field: "aluno" },
        { title: "Componente Curricular", field: "componente" },
        {
          title: "Nota",
          field: "nota",
          type: "numeric",
        },
      ]}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            handleCreate(newData);
            resolve();
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            handleUpdate(newData);
            resolve();
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            handleDelete(oldData);
            resolve();
          }),
      }}
    />
  );
};

export default GerenciamentoAvaliacao;
