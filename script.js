fetch("https://script.google.com/macros/s/AKfycbyuW7cIt-xcCca4fMLLVHWIRLuT8sy0KUB7X2RgPotmRES1gzmDXlK5qEPGszAPavmYHQ/exec")
  .then(res => res.json())
  .then(data => {

    document.getElementById("income").innerText = "รายรับ: " + data.รายรับ;
    document.getElementById("expense").innerText = "รายจ่าย: " + data.รายจ่าย;
    document.getElementById("balance").innerText = "คงเหลือ: " + data.คงเหลือ;

  })
  .catch(err => console.log(err));
