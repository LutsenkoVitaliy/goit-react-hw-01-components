import styled from '@emotion/styled'

export const SectionStatistics = styled.section`
  margin: 20px auto;
  width: 700px;
  background-color: #eeeeee;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

export const TitleStats = styled.h2`
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: #000000;
`

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
`

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  padding: 10px;

  color: #ffffff;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.15;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.15;
`;