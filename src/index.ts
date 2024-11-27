// chuyển [{}] thành file CSV
//nhập vào
//định dạng mảng nhập vào 'text,text,text,text'
//thêm chuỗi vừa định dạng vào file csv

import { appendFileSync } from "fs";

interface Payment {
  from: string;
  to: string;
  amount: number;
  notes: string;
}

type paymentColums = ("from" | "to" | "amount" | "notes")[];

class CSVWrite {
  constructor(private columns: paymentColums) {
    this.csv = this.columns.join(",") + "\n";
    //'from,to,amount,notes'
  }

  private csv: string;

  save(filename: string) {
    appendFileSync(filename, this.csv);

    this.csv = "\n";
    console.log("file saved to", filename);
  }

  addRows(value: Payment[]) {
    let rows = value.map((v) => this.formatRow(v));
    this.csv += rows.join("\n");
    console.log(this.csv);
  }

  private formatRow(p: Payment): string {
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
