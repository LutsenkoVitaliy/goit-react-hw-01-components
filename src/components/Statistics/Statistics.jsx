import PropTypes from 'prop-types';
import {
    SectionStatistics, TitleStats, StatList, StatItem,
    Label, Percentage
} from './Statistics.styled';


export const Statistics = ({title, stats}) => {
  return (
  <SectionStatistics>
  {title && <TitleStats>{title}</TitleStats>}
  <StatList>
    {stats.map(stat => (
    <StatItem key={stat.id}>
    <Label>{stat.label}</Label>
    <Percentage>{stat.percentage}%</Percentage>
    </StatItem>
    ))}
  </StatList>
  </SectionStatistics>
  )
}


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
      })
  )
}