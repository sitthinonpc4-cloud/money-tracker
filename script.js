const API = "https://script.google.com/macros/s/AKfycbwtnVyvuz7VcUnL0XdebSGdnBse7HQgCneykelf7N17z0dufqUQpArcNjbZLBah3dW_Sw/exec";

function loadData() {

  fetch(API)
    .then(res => res.json())
    .then(data => {

      document.getElementById("student").innerText =
        "บัตรนักเรียน: " + data.student;

      document.getElementById("truemoney").innerText =
        "TrueMoney: " + data.truemoney;

      document.getElementById("cash").innerText =
        "เงินสด: " + data.cash;

      document.getElementById("balance").innerText =
        "รวม: " + data.คงเหลือ;

      new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
          labels: ["บัตร", "ทรู", "เงินสด"],
          datasets: [{
            label: "เงิน",
            data: [data.student, data.truemoney, data.cash]
          }]
        }
      });

    });
}

// 🔗 เปิดฟอร์มจาก input
function openFormFromInput() {
  const link = document.getElementById("formLink").value;

  if (!link) {
    alert("ใส่ลิงก์ก่อน");
    return;
  }

  window.open(link, "_blank");
}

loadData();
