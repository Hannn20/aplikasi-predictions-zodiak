function cekZodiak() {
    const tanggalInput = document.getElementById('tanggal').value;
    const [tanggal, bulan] = tanggalInput.split('/').map(Number);

    if (isNaN(tanggal) || isNaN(bulan) || tanggal < 1 || tanggal > 31 || bulan < 1 || bulan > 12) {
        document.getElementById('result').innerText = 'Format tanggal tidak valid! Gunakan DD/MM.';
        return;
    }

    let zodiak = '';

    if ((bulan === 3 && tanggal >= 21) || (bulan === 4 && tanggal <= 19)) {
        zodiak = 'Aries';
    } else if ((bulan === 4 && tanggal >= 20) || (bulan === 5 && tanggal <= 20)) {
        zodiak = 'Taurus';
    } else if ((bulan === 5 && tanggal >= 21) || (bulan === 6 && tanggal <= 20)) {
        zodiak = 'Gemini';
    } else if ((bulan === 6 && tanggal >= 21) || (bulan === 7 && tanggal <= 22)) {
        zodiak = 'Cancer';
    } else if ((bulan === 7 && tanggal >= 23) || (bulan === 8 && tanggal <= 22)) {
        zodiak = 'Leo';
    } else if ((bulan === 8 && tanggal >= 23) || (bulan === 9 && tanggal <= 22)) {
        zodiak = 'Virgo';
    } else if ((bulan === 9 && tanggal >= 23) || (bulan === 10 && tanggal <= 22)) {
        zodiak = 'Libra';
    } else if ((bulan === 10 && tanggal >= 23) || (bulan === 11 && tanggal <= 21)) {
        zodiak = 'Scorpio';
    } else if ((bulan === 11 && tanggal >= 22) || (bulan === 12 && tanggal <= 21)) {
        zodiak = 'Sagitarius';
    } else if ((bulan === 12 && tanggal >= 22) || (bulan === 1 && tanggal <= 19)) {
        zodiak = 'Capricorn';
    } else if ((bulan === 1 && tanggal >= 20) || (bulan === 2 && tanggal <= 18)) {
        zodiak = 'Aquarius';
    } else if ((bulan === 2 && tanggal >= 19) || (bulan === 3 && tanggal <= 20)) {
        zodiak = 'Pisces';
    }

    document.getElementById('result').innerText = `Zodiak Anda adalah: ${zodiak}`;
}