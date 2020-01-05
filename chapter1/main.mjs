import plays from './plays.mjs';
import invoices from './invoices.mjs';

import { statement } from './statement.mjs';

// テストコード
const expected = `BigCo の支払い
 Hamlet: $650.00 (55席) 
 As You Like It: $580.00 (35席) 
 Othello: $500.00 (40席) 
支払額は$1,730.00
次回使える特典は47ポイント
`;

const status = expected == statement(invoices[0], plays);
const message = status ? '✔ : OK' : '✖ : ERROR!!';
console.log(message);

if (!status) console.log(statement(invoices[0], plays));
if (!status) console.log(expected);
