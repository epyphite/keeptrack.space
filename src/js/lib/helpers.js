import { saveAs } from '@app/js/lib/external/file-saver.min.js';

var stringPad = {};
stringPad.pad = (val, len) => {
  val = String(val);
  len = len || 2;
  while (val.length < len) val = '0' + val;
  return val;
};
stringPad.padEmpty = (num, size) => {
  var s = '   ' + num;
  return s.substr(s.length - size);
};
stringPad.pad0 = (str, max) => (str.length < max ? stringPad.pad0('0' + str, max) : str);

var saveVariable = (variable, filename) => {
  filename = typeof filename == 'undefined' ? 'variable.txt' : filename;
  variable = JSON.stringify(variable);
  var blob = new Blob([variable], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, filename);
};

var saveCsv = (items, name) => {
  const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
  const header = Object.keys(items[0]);
  let csv = items.map((row) => header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(','));
  csv.unshift(header.join(','));
  csv = csv.join('\r\n');

  var blob = new Blob([csv], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, `${name}.csv`);
};

export { stringPad, saveVariable, saveCsv, saveAs };
