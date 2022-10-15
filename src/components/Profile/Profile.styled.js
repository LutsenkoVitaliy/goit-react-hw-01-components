import styled from "@emotion/styled";


export const Description = styled.div`
  padding-bottom: 30px ;
`;

export const Image = styled.img`
  display: block;
  width: 150px;
  margin: 0 auto;
  border: 1px solid #111111;
  border-radius: 50px;
`;

export const Name = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;

  color: #000000;
`;

export const Tag = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  text-align: center;

  color: #999999;
`;

export const Location = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.25;
  text-align: center;

  color: #999999;
`;


export const StatsList = styled.ul`
  display: flex;
  width: 600px;
  padding-top: 20px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 30px;
  flex-basis: calc(100% / 3);

  &:not(:last-child) {
    border-right: 1px solid #999999;
  }
`;

export const StatLabel = styled.span`
  margin: 0 auto;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;

  color: #999999;
`;

export const StatQuantity = styled.span`
  margin: 0 auto;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.25;
`;
