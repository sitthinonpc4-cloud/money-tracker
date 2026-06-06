fetch("https://script.google.com/macros/s/AKfycbyQa_1CME66rOHncEmwOMPUD5Y4husn0cbEj7BNZu1i8fpAy2aSDN41b2BFereqUTK9uQ/exec")
  .then(res => res.json())
  .then(data => {

    document.getElementById("income").innerText = "รายรับ: " + data.รายรับ;
    document.getElementById("expense").innerText = "รายจ่าย: " + data.รายจ่าย;
    document.getElementById("balance").innerText = "คงเหลือ: " + data.คงเหลือ;

  })
  .catch(err => console.log(err));
