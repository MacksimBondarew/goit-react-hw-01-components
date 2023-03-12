// import PropTypes from 'prop-types';
import {
    StaticsSection,
    TitleStaticts,
    Statlist,
    StatListItem,
    StatItemLabel,
    StatItemPercentage,
} from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
    return (<StaticsSection key={title}>
        <TitleStaticts>{title}</TitleStaticts>
        <Statlist>
            {stats.map(({id, label, percentage}) => (
                <StatListItem key={id}>
                    <StatItemLabel>{label}</StatItemLabel>
                    <StatItemPercentage>{percentage}%</StatItemPercentage>
                </StatListItem>
            ))}
        </Statlist>
    </StaticsSection>);
};
