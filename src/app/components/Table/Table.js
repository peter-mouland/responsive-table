import React from 'react';
import bemHelper from 'react-bem-helper';

import './table.scss';

const bem = bemHelper({ prefix: 'l-', name: 'table' });
const Row = ({ headers, data, rowNumber }) => (
  <tr { ...bem('row', {alt: rowNumber%2==0 }) } >
    {headers.map((key, i) => (
      <td { ...bem('cell', {'alt': i%2==0 }) } key={i}>
        <span { ...bem('label', null, { hidden: !i, 'hidden--medium': !!i }) }>{key} : </span>
        {data[key]}
      </td>
    ))}
  </tr>
);

const Headers = ({ headers }) => (
  <tr { ...bem('row', 'header') } >
    {headers.map((key, i) => (
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
      {data.map((row, i) => <Row headers={ headers } data={ row } key={i} rowNumber={ i } />)}
    </tbody>
  </table>
);
