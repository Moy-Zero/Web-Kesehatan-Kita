const faskesKemang = [
  {
    nama: "RSIA Brawijaya Antasari",
    alamat: "Jl. Antasari No.12, Kemang, Jakarta Selatan",
    kontak: "(021) 2917-9999",
    maps: "https://goo.gl/maps/q7NsZmCrMjpSkzYV9"
  },
  {
    nama: "Klinik Kemang Medical Care",
    alamat: "Jl. Ampera Raya No.34, Kemang, Jakarta Selatan",
    kontak: "(021) 719-2222",
    maps: "https://goo.gl/maps/Lg1uyX64ShvM87M87"
  },
  {
    nama: "RS Siloam Kemang",
    alamat: "Jl. Kemang Raya No.45, Jakarta Selatan",
    kontak: "(021) 2901-8888",
    maps: "https://goo.gl/maps/3mD8m8S8sV2TTDqP8"
  },
  {
    nama: "Klinik Pratama Kemang",
    alamat: "Jl. Prapanca No.7, Kemang, Jakarta Selatan",
    kontak: "(021) 727-1234",
    maps: "https://goo.gl/maps/5gUqS7NfXyTzXmqE9"
  },
  {
    nama: "RS Jakarta Medical Center (JMC)",
    alamat: "Jl. Warung Buncit Raya No.15, Kemang, Jakarta Selatan",
    kontak: "(021) 798-3333",
    maps: "https://goo.gl/maps/vJ1w6rEbE4wJQ4qS6"
  },
  {
    nama: "Apotek K-24 Kemang",
    alamat: "Jl. Kemang Selatan Raya No.3, Jakarta Selatan",
    kontak: "(021) 712-9876",
    maps: "https://goo.gl/maps/Yp3LkDFnQnGkBmfP8"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("listFaskes");
  faskesKemang.forEach(f => {
    const card = document.createElement("div");
    card.className = "faskes-card";
    card.innerHTML = `
      <h3>${f.nama}</h3>
      <p><b>Alamat:</b> ${f.alamat}</p>
      <p><b>Kontak:</b> ${f.kontak}</p>
      <a href="${f.maps}" target="_blank" class="btn-map">📍 Lihat di Google Maps</a>
    `;
    container.appendChild(card);
  });
});