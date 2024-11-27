"use strict";
// chuyển [{}] thành file CSV
//nhập vào
//định dạng mảng nhập vào 'text,text,text,text'
//thêm chuỗi vừa định dạng vào file csv
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWrite {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
        //'from,to,amount,notes'
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = "\n";
        console.log("file saved to", filename);
    }
    addRows(value) {
        let rows = value.map((v) => this.formatRow(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(",");
    }
}
const writer = new CSVWrite(["from", "to", "amount", "notes"]);
writer.addRows([
    {
        from: "duy",
        to: "dev",
        amount: 500,
        notes: "ok",
    },
    {
        from: "duy",
        to: "An",
        amount: 500,
        notes: "ok",
    },
]);
writer.save("./data/payments.csv");
