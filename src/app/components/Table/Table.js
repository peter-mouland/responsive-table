import React from 'react';
import bemHelper from 'react-bem-helper';

import './table.scss';

const bem = bemHelper({ prefix: 'l-', name: 'table' });
const Row = ({ headers, data }) => (
  <tr { ...bem('row') } >
    {headers.map((key, i) => (
      <td { ...bem('cell') } key={i}>
        <span { ...bem('label', null, { hidden: !i, 'hidden--medium': !!i }) }>{key} : </span>
        {data[key]}
      </td>
    ))}
  </tr>
);

const Headers = ({ headers }) => (
  <tr { ...bem('row', 'header') } >
    {headers.map((key) => (
    <th { ...bem('cell', 'header') } key={key}>
      {key}
    </th>
    ))}
  </tr>
);

export default ({ className, data, headers, ...props }) => (
  <table { ...bem(null, null, className) } { ...props }>
    <thead { ...bem('head', null, ['sr-only--small-only', 'sr-only--tiny-only']) }>
      <Headers headers={ headers } />
    </thead>
    <tbody { ...bem('body') }>
      {data.map((row, i) => <Row headers={ headers } data={ row } key={i} />)}
    </tbody>
  </table>
);
