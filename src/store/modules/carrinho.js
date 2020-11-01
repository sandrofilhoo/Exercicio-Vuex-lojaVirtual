export default {
    namespaced:true,
    state:{/* e um objeto */
        produtos:[],
    },
    getters:{/* e um mecanismo do state para alteraçoes logicas que precisa ser compartilhada */
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
        quantidadeTotal(state){
            return state.produtos.map(p => p.quantidade )
                .reduce((quantidade, qtdAtual) => quantidade + qtdAtual, 0)
        }
    },
    mutations:{/* sao para altear o stado */
        adicionarProduto(state, payload){
            state.produtos.push(payload)
        },
    },
    actions:{/*aqui entra todas as funcoes asynconas e tambem a regra de negocio  */
        adicionarProduto(context, payload){
            setTimeout(() =>{
                context.commit('adicionarProduto', payload)
            },1000)
        }
    }
}