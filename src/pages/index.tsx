
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useCadClientes from "../hooks/useCadCluentes";

export default function Home() {
  
  const { cliente, clientes, tabelaVisivel, exibirTabela,
          selecionarCliente, 
          excluirCliente,
          novoCliente,
          salvarCliente } = useCadClientes()
  

  return (
    <div className={`flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoCliente} className="mb-4" cor="green">
                Novo cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
                    clienteSelecionado={selecionarCliente}
                    clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} 
                      clienteMudou={salvarCliente}
                      cancelado={() => exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
