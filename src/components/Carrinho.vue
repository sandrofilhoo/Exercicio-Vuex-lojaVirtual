<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table v-if="produtos !=0">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.id">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            
            <div v-else>
                <h3>Carrinho </h3>
            </div>
            <hr>
            <div class="resultado">
                <div class="quantidade">
                    <span>Quantidade de produtos: <strong>{{ quantidade }}</strong></span>
                </div>
                <div class="total">
                    <span>Total: <strong>{{ total | dinheiro }}</strong></span>
                </div>
            </div>
        </div>
    </Painel>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters('carrinho',{
            total:'valorTotal',
            quantidade:'quantidadeTotal'
        }),
        /* total() {
            return this.$store.getters.carrinho.valorTotal
        }, */
        /* quantidade() {
            return this.$store.getters.carrinho.quantidadeTotal
        }, */
        produtos(){
            return this.$store.state.carrinho.produtos
        }
    },
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
    .resultado {
        display: flex;
        justify-content: space-between;
    }
    .quantidade {
        display: flex;
        justify-content: flex-end;
    }
</style>
