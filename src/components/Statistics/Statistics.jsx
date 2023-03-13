// import PropTypes from 'prop-types';
import {
    StaticsSection,
    TitleStaticts,
    Statlist,
    StatListItem,
    StatItemLabel,
    StatItemPercentage,
} from './Statistic.styled';
import PropTypes from 'prop-types';

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

Statistics.prototype = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}

