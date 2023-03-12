import styled from "@emotion/styled";

export const StaticsSection = styled.div`
    text-align: center;
`;
export const TitleStaticts = styled.h2`
    color: #989898;
    margin-bottom: 20px;
    padding: 20px 20px 0px 20px;
    font-size: 30px;
`;
export const Statlist = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;
export const StatListItem = styled.li`
    color: white;
    background-color: ${() => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }};
    // nth не підержує 
    // &:nth-child(1) {
    //     background-color: #00CED1;
    // };
    // &:nth-child(2) {
    //     background-color: #ff00ff;
    // };
    // &:nth-child(3) {
    //     background-color: crimson;
    // };
    // &:nth-child(4) {
    //     background-color: teal;
    // };
    // &:nth-child(5) {
    //     background-color: #DAA520;
    // }
    padding: 15px 20px;
`;
export const StatItemLabel = styled.span`
    display: block;
    margin-bottom: 5px
`;
export const StatItemPercentage = styled.span``;


