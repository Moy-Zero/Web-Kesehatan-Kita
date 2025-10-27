let selectedGender = null;

function selectGender(gender) {
    document.getElementById('male').classList.remove('selected');
    document.getElementById('female').classList.remove('selected');
    document.getElementById(gender).classList.add('selected');
    selectedGender = gender;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value) || null;

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById('result').innerHTML = "<p style='color:red;'>Masukkan nilai berat dan tinggi yang valid!</p>";
        document.getElementById('result-section').style.display = 'block';
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
    let category = "";
    let advice = "";

    if (bmi < 18.5) {
        category = "Kurang berat badan";
        advice = "Pertimbangkan untuk meningkatkan asupan nutrisi dan konsultasikan dengan ahli gizi.";
    } else if (bmi < 25) {
        category = "Normal";
        advice = "Berat badan Anda ideal. Jaga pola hidup sehat!";
    } else if (bmi < 30) {
        category = "Berlebih berat badan";
        advice = "Coba olahraga teratur dan diet seimbang. Konsultasikan dokter jika perlu.";
    } else {
        category = "Obesitas";
        advice = "Disarankan untuk berkonsultasi dengan dokter untuk rencana penurunan berat badan.";
    }

    document.getElementById('result').innerHTML = `
        <h3>Hasil BMI Anda: ${bmi}</h3>
        <p>Kategori: <strong>${category}</strong></p>
        <p>${advice}</p>
        ${age ? `<p>Usia Anda: ${age} tahun (dipertimbangkan untuk saran umum).</p>` : ''}
        ${selectedGender ? `<p>Jenis Kelamin: ${selectedGender === 'male' ? 'Pria' : 'Wanita'}</p>` : ''}
    `;
    document.getElementById('result-section').style.display = 'block';
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    document.getElementById('male').classList.remove('selected');
    document.getElementById('female').classList.remove('selected');
    selectedGender = null;
    document.getElementById('result-section').style.display = 'none';
}