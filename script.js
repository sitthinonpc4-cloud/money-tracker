const sheetID = "1TFXgnTXXc1syOd0Oi7aLn69G1j2nG7rvFTUoxeBK0ck";
const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;

fetch(url)
  .then(res => res.text())
  .then(data => {

    const json = JSON.parse(data.substring(47).slice(0, -2));
    const rows = json.table.rows;

    const income = rows[0].c[1].v;
    const expense = rows[1].c[1].v;
    const balance = income - expense;

    document.getElementById("income").innerText = "รายรับ: " + income;
    document.getElementById("expense").innerText = "รายจ่าย: " + expense;
    document.getElementById("balance").innerText = "คงเหลือ: " + balance;

  })
  .catch(err => {
    console.log("Error:", err);
  });
