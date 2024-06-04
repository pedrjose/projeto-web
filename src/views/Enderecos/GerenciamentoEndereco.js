import React from "react";
import axios from "axios";
import MaterialTable from "material-table";

const baseUrl = "https://242c99ed-f799-4ab6-850d-603bdba5ecb4.mock.pstmn.io";

const GerenciamentoEndereco = (props) => {
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
      const response = await axios.get(`${baseUrl}/get-enderecos`);
      console.log("Response data:", response.data);
      if (response.data && response.data.lista) {
        const enderecos = response.data.lista.map((c) => {
          return {
            id: c.id,
            rua: c.rua,
            numero: c.numero,
            cep: c.cep,
            cidade: c.cidade,
            estado: c.estado,
            pais: c.pais,
          };
        });
        return enderecos;
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
      rua: newData.rua,
      numero: newData.numero,
      cep: newData.cep,
      cidade: newData.cidade,
      estado: newData.estado,
      pais: newData.pais,
    };

    axios
      .post(`${baseUrl}/post-endereco`, requestBody)
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
      rua: newData.rua,
      numero: newData.numero,
      cep: newData.cep,
      cidade: newData.cidade,
      estado: newData.estado,
      pais: newData.pais,
    };

    axios
      .put(`${baseUrl}/update-endereco`, requestBody)
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
      .delete(`${baseUrl}/delete-endereco`, {
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
      title="Gerenciamento de Endereço"
      columns={[
        { title: "Id", field: "id", type: "numeric" },
        { title: "Rua", field: "rua" },
        { title: "Número", field: "numero" },
        { title: "CEP", field: "cep" },
        { title: "Cidade", field: "cidade" },
        { title: "Estado", field: "estado" },
        { title: "País", field: "pais" },
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

export default GerenciamentoEndereco;
