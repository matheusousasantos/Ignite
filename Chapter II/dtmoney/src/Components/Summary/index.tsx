import { useContext } from 'react';
import { Container } from './styles';

import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }

    //     return acc;
    // }, 0);

    //reduce - Passar por todas as transações e calcular um total.

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        } else {
            acc.withdrows += transaction.amount;
            acc.total -= transaction.amount
        }

        return acc;
    }, {
        deposits: 0,
        withdrows: 0,
        total: 0
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)
                }</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>-{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdrows)
                }</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)
                }</strong>
            </div>
        </Container>
    );
}