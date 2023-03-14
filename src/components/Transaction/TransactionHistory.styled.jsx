import styled from 'styled-components'

export const Transaction = styled.table`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    text-align: center;
    background-color: #ffffff;
    color: #808184;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
        1px 4px 6px rgb(0 0 0 / 16%);
    overflow: hidden;
`;

//Header Table  Transaction

export const TransactionHead = styled.thead`
    border: 0px solid #b5b5b5;
    background-color: #00bcd5;
    color: #ffffff;
    text-transform: uppercase;
`;
export const ListTransactionHeadTopical = styled.tr``;
const StyledHeatTableTopic = styled("th")`
width: 33.3%;
padding: 15px 5px;
`;
export const TranstitionType = styled(StyledHeatTableTopic)``;
export const TranstitionAmount = styled(StyledHeatTableTopic)``;
export const TranstitionCurrency = styled(StyledHeatTableTopic)``;

// Martkup Body table

export const TranstitionBodyTable = styled.tbody``;
export const TranstitionListBodyTable = styled.tr`
`;
const StyleBodyTableItem = styled('td')`
    padding: 15px 10px;
    background-color: #c9dcdf;
`
export const TranstitionTypeBodyTable = styled(StyleBodyTableItem)`
`;
export const TranstitionAmountBodyTable = styled(StyleBodyTableItem)`
`;
export const TranstitionCurrencyBodyTable = styled(StyleBodyTableItem)`
`;
