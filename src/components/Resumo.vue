<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    /* ( maneira de fazer 1) */
    computed: mapGetters('carrinho',{
        total:'valorTotal'
    }),
    /*( maneira de fazer 2)computed: mapGetters(['valorTotal']) */
    /*( maneira de fazer 3) computed: {
        total() {
           return this.$store.getters.valorTotal
        },
    }, */
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
</style>
