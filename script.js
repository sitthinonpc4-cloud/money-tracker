const API = "https://script.google.com/macros/s/AKfycbwtnVyvuz7VcUnL0XdebSGdnBse7HQgCneykelf7N17z0dufqUQpArcNjbZLBah3dW_Sw/exec";

function loadData() {

  fetch(API)
    .then(res => res.json())
    .then(data => {

      document.getElementById("student").innerText =
        "บัตรนักเรียน: " + (data.student || 0);

      document.getElementById("truemoney").innerText =
        "TrueMoney: " + (data.truemoney || 0);

      document.getElementById("cash").innerText =
        "เงินสด: " + (data.cash || 0);

      document.getElementById("balance").innerText =
        "รวม: " + (data.คงเหลือ || 0);

      new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
          labels: ["บัตร", "ทรู", "เงินสด"],
          datasets: [{
            data: [data.student, data.truemoney, data.cash]
          }]
        }
      });

    });
}

function openFormFromInput() {
  const link = document.getElementById("formLink").value;
  if (!link) return alert("ใส่ลิงก์ก่อน");
  window.open(link, "_blank");
}

loadData();
