const API = "https://script.google.com/macros/s/AKfycbztHbZGLLCzuWuFEMPoR0ErNUxL6j1-o4vNxCS9xQOJabYfdrNxQVc2Cpz-AOez9Xptxg/exec";

// 🔗 Google Form (ใส่ลิงก์ตรงนี้จบ)
const FORM_LINK = "https://script.google.com/macros/s/AKfycbztHbZGLLCzuWuFEMPoR0ErNUxL6j1-o4vNxCS9xQOJabYfdrNxQVc2Cpz-AOez9Xptxg/exec";

let chart;

function openForm() {
  window.open(FORM_LINK, "_blank");
}

async function getData() {
  const res = await fetch(API);
  return await res.json();
}

async function loadChart(type) {

  const data = await getData();
  const obj = data[type];

  const labels = Object.keys(obj);
  const values = Object.values(obj);

  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("chart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: type,
        data: values,
        borderColor: "#4da3ff"
      }]
    }
  });
}

// โหลดครั้งแรก
loadChart("daily");
