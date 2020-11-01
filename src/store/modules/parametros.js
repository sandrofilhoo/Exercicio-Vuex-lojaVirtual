export default {
    namespaced:true,
    state:{/* e um objeto */
        quantidade: 1,
        preco: 9.99
    },
    mutations:{/* sao para altear o stado */
        setQuantidade(state,payload){
            state.quantidade = payload
        },
        setPreco(state,payload){
            state.preco = payload
        }
    },
}