import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/colecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/clienteRepositorio"
import useTabFrom from "./useTabFrom"


export default function useCadClientes() {
    
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabFrom()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])
    
    function obterTodos() {
        repo.obterTodos().then((clientes) => {
        setClientes(clientes)
        exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente, clientes, tabelaVisivel, exibirTabela,
        selecionarCliente,
        novoCliente,
        salvarCliente,
        excluirCliente,
        obterTodos
    }
}