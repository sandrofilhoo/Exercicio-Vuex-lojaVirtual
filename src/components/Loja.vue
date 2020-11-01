<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <div class="nome">
                <span>Nome do produto</span>
                <input type="text" v-model="produto">
            </div>
            
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            produto:'Produto',
            sequencia: 1,
        }
    },
    computed: {
        quantidade(){
            return this.$store.state.parametros.quantidade
        },
        preco(){
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        ...mapActions('carrinho',['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: this.produto,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            /* this.$store.state.produtos.push(produto) */
           /*  this.$store.commit('adicionarProduto', produto) */
            this.adicionarProduto( produto)
        }
    },
    
}
</script>

<style>
    /* .loja {
        display: flex;
        justify-content: center;
    } */

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
    .nome input {
        width: 250px;
    }
    .nome {
        display: flex;
        justify-content: space-around;
    }
</style>
