import styled from "@emotion/styled"

export const ProfileMarkup = styled.div`
    width: 300px;
    margin: 0px auto 15px auto;
    background-color: #e9f5f9;
`;
export const Description = styled.div`
    padding: 20px 40px 0px 40px;
    text-align: center;
    margin-bottom: 10px;
`;
//Елементи для дівчика з інформацією
export const PhotoUser = styled.img`
    width: 200px;
    display: inline-block;
    border-radius: 50%;
    margin-bottom: 20px;
`;
export const NameUser = styled.p`
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 22px;
`;
export const TagUser = styled.p`
    margin-bottom: 5px;
    font-size: 16px;
`;
export const LocationUser = styled.p`
    font-size: 16px;
`;
//список з статистикою
export const StatsUser = styled.ul`
    display: flex;
    text-align: center;
`;
export const StatsUserItem = styled.li`
    width: 100px;
    background-color: #F5F5F5;
    padding: 10px 20px;
`;
export const StatsUserLabel = styled.span`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
`;
export const StatsUserLabelQuantity = styled.span`
    font-weight: 600;
    font-size: 17px;
`;