import React from "react";
import axios from "axios";
import MaterialTable from "material-table";

const GerenciamentoAlunos = (props) => {
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
      const response = await axios.get(
        "http://demo6605813.mockable.io/alunos-avaliados"
      );
      console.log("Response data:", response.data);
      if (response.data && response.data.lista) {
        const alunos = response.data.lista.map((c) => {
          return {
            id: c.id,
            cpf: c.cpf,
            matricula: c.matricula,
            nome: c.nome,
            idEndereco: c.idEndereco,
            curso: c.curso,
          };
        });
        return alunos;
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
    axios
      .post("https://demo2582395.mockable.io/alunos", {
        id: newData.id,
        cpf: newData.cpf,
        matricula: newData.matricula,
        nome: newData.nome,
        idEndereco: newData.idEndereco,
        curso: newData.curso,
      })
      .then(function (response) {
        console.log("Salvo com sucesso.");
      });
  }

  function handleUpdate(newData) {
    axios
      .put("https://demo2582395.mockable.io/alunos", {
        id: newData.id,
        cpf: newData.cpf,
        matricula: newData.matricula,
        nome: newData.nome,
        idEndereco: newData.idEndereco,
        curso: newData.curso,
      })
      .then(function (response) {
        console.log("Atualizado com sucesso.");
      });
  }

  function handleDelete(newData) {
    axios
      .delete("https://demo2582395.mockable.io/delete-aluno", {
        data: { id: newData.id },
      })
      .then(function (response) {
        console.log("Deletado com sucesso.");
      });
  }

  return (
    <MaterialTable
      title="Gerenciamento de Alunos"
      columns={[
        { title: "Id", field: "id" },
        { title: "CPF", field: "cpf" },
        { title: "Matrícula", field: "matricula", type: "numeric" },
        { title: "Nome", field: "nome" },
        { title: "Endereço", field: "idEndereco" },
        { title: "Curso", field: "curso" },
      ]}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleCreate(newData);

              const dataCreate = [...data];

              setData([...dataCreate, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleUpdate(newData);
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              handleDelete(oldData);
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
};

export default GerenciamentoAlunos;
