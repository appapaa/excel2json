import React, { Component } from 'react';
import XLSX from 'xlsx';
import { SheetJSFT } from './types';
import getLine from './lib/getLine';
import _ from 'lodash';
import writeFile from './lib/writeFile';

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cols: []
    }
  }

  handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];

      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;

      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = _.map(XLSX.utils.sheet_to_json(ws), l => getLine(l));

        writeFile('words.json', JSON.stringify({ data }));
      }
      if (rABS) {
        reader.readAsBinaryString(file);
      } else {
        reader.readAsArrayBuffer(file);
      };
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="file">Грузи</label>
        <br />
        <input
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={this.handleChange} />
      </div>

    )
  }
}

export default ExcelReader;