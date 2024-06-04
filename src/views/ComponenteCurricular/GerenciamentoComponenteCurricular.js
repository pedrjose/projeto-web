import React from "react";
import axios from "axios";
import MaterialTable from "material-table";

const baseUrl = "https://45b99708-a694-4787-84c6-98d8cd78fe5e.mock.pstmn.io";

const GerenciamentoComponenteCurricular = (props) => {
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
      const response = await axios.get(`${baseUrl}/get-componentes`);
      console.log("Response data:", response.data);
      if (response.data && response.data.lista) {
        const componentes = response.data.lista.map((c) => {
          return {
            id: c.id,
            curso: c.curso,
          };
        });
        return componentes;
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
      curso: newData.curso,
    };

    axios
      .post(`${baseUrl}/post-componente`, requestBody)
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
      curso: newData.curso,
    };

    axios
      .put(`${baseUrl}/update-componente`, requestBody)
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
      .delete(`${baseUrl}/delete-componente`, {
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
      title="Gerenciamento de Componente Curricular"
      columns={[
        { title: "Id", field: "id" },
        { title: "Curso", field: "curso" },
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

export default GerenciamentoComponenteCurricular;
