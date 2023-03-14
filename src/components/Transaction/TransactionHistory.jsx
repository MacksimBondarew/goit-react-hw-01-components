import {
    Transaction,
    ListTransactionHeadTopical,
    TransactionHead,
    TranstitionType,
    TranstitionAmount,
    TranstitionCurrency,
    TranstitionBodyTable,
    TranstitionListBodyTable,
    TranstitionTypeBodyTable,
    TranstitionAmountBodyTable,
    TranstitionCurrencyBodyTable,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (<Transaction>
        <TransactionHead>
            <ListTransactionHeadTopical>
                <TranstitionType>Type</TranstitionType>
                <TranstitionAmount>Amount</TranstitionAmount>
                <TranstitionCurrency>Currency</TranstitionCurrency>
            </ListTransactionHeadTopical>
        </TransactionHead>
        <TranstitionBodyTable>
            {items.map(({ id, type, amount, currency }) => (
                <TranstitionListBodyTable key={id}>
                    <TranstitionTypeBodyTable>{type}</TranstitionTypeBodyTable>
                    <TranstitionAmountBodyTable>{amount}</TranstitionAmountBodyTable>
                    <TranstitionCurrencyBodyTable>{currency}</TranstitionCurrencyBodyTable>
                </TranstitionListBodyTable>
            ))}
        </TranstitionBodyTable>
    </Transaction>);
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
