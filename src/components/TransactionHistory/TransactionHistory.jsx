import PropTypes from 'prop-types';
import {Table, TeableName, TableItem } from './TransactionHistory.styled'

export function TransactionHistory({items}) {
    return (
<Table>
  <thead>
    <tr>
      <TeableName>Type</TeableName>
      <TeableName>Amount</TeableName>
      <TeableName>Currency</TeableName>
    </tr>
  </thead>

  <tbody>
    {items.map(item => (
      <tr key={item.id}>
        <TableItem>{item.type}</TableItem>
        <TableItem>{item.amount}</TableItem>
        <TableItem>{item.currency}</TableItem>
      </tr>
    ))}
  </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
