const tenagaMedis = [
  { nama: "dr. Andi Wijaya", spesialis: "Dokter Umum", foto: "https://via.placeholder.com/120", jadwal: "Senin - Jumat 08.00-15.00" },
  { nama: "drg. Rina Putri", spesialis: "Dokter Gigi", foto: "https://via.placeholder.com/120", jadwal: "Selasa & Kamis 09.00-14.00" },
  { nama: "dr. Budi Santoso", spesialis: "Psikolog", foto: "https://via.placeholder.com/120", jadwal: "Rabu & Jumat 10.00-16.00" }
];

function tampilkanMedis(list) {
  const container = document.getElementById("listMedis");
  container.innerHTML = "";
  list.forEach(m => {
    const card = document.createElement("div");
    card.className = "medis-card";
    card.innerHTML = `
      <img src="${m.foto}" alt="${m.nama}">
      <h3>${m.nama}</h3>
      <p>${m.spesialis}</p>
      <p><b>Jadwal:</b> ${m.jadwal}</p>`;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  tampilkanMedis(tenagaMedis);
  document.getElementById("btnCariMedis").addEventListener("click", () => {
    const keyword = document.getElementById("searchMedis").value.toLowerCase();
    const hasil = tenagaMedis.filter(m =>
      m.nama.toLowerCase().includes(keyword) ||
      m.spesialis.toLowerCase().includes(keyword)
    );
    tampilkanMedis(hasil);
  });
});