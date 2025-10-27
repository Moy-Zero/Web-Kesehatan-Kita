const dataKesehatan = [
  { daerah: "Jakarta", vaksin: 92, gizi: 85 },
  { daerah: "Bandung", vaksin: 88, gizi: 82 },
  { daerah: "Surabaya", vaksin: 90, gizi: 84 },
  { daerah: "Medan", vaksin: 86, gizi: 80 }
];

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#dataStatistik tbody");
  dataKesehatan.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.daerah}</td><td>${item.vaksin}%</td><td>${item.gizi}%</td>`;
    tbody.appendChild(row);
  });
});