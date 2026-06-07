const API = "https://script.google.com/macros/s/AKfycbw90MmAaEj9ShCQNE2v3nt6H3279utd-FfQAsG0H2pg_kq6G5rbswB6PZkW9qDYLJbDIQ/exec";
const PIN = "1234";

// 🔐 PIN
function checkPIN() {
  const val = document.getElementById("pinInput").value;

  if (val === PIN) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("app").style.display = "block";
    loadData();
  } else {
    alert("PIN ผิด");
  }
}

// 📊 load data
function loadData() {

  fetch(API)
    .then(res => res.json())
    .then(data => {

      document.getElementById("income").innerText =
        "รายรับ: " + data.รายรับ;

      document.getElementById("expense").innerText =
        "รายจ่าย: " + data.รายจ่าย;

      document.getElementById("balance").innerText =
        "คงเหลือ: " + data.คงเหลือ;

    });
}

// ➕ popup
function openForm() {
  document.getElementById("popup").style.display = "block";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}

// 💾 add data
function addData() {

  const type = document.getElementById("type").value;
  const amount = document.getElementById("amount").value;
  const source = document.getElementById("source").value;

  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      type,
      amount,
      source
    })
  })
  .then(() => {
    alert("บันทึกแล้ว");
    location.reload();
  });
}

// 📊 simple chart (mock)
const ctx = document.getElementById("chart");
if (ctx) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"],
      datasets: [{
        label: "รายจ่าย",
        data: [100,200,150,300,250]
      }]
    }
  });
}
