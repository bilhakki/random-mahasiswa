const questions = [
  {
      "number": 1,
      "question": "Saya tidak merasa gugup saat memikirkan seleksi masuk kerja",
      "probabilities": [
          20,
          35,
          50,
          10,
          5
      ]
  },
  {
      "number": 2,
      "question": "Perut saya terasa sakit ketika membayangkan beratnya tanggung jawab pekerjaan",
      "probabilities": [
          5,
          15,
          30,
          50,
          10
      ]
  },
  {
      "number": 3,
      "question": "Saya merasa tidak siap menghadapi proses seleksi masuk kerja",
      "probabilities": [
          5,
          25,
          50,
          15,
          5
      ]
  },
  {
      "number": 4,
      "question": "Saya merasa sangat bersemangat saat memikirkan dunia kerja",
      "probabilities": [
          20,
          40,
          20,
          15,
          5
      ]
  },
  {
      "number": 5,
      "question": "Saya cemas saat terlibat pembicaraan tentang seleksi masuk kerja",
      "probabilities": [
            20,
          40,
          20,
          15,
          5
      ]
  },
  {
      "number": 6,
      "question": "Saya yakin dapat beradaptasi didunia kerja kelak",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 7,
      "question": "Saya menghindari pembicaraan terkait dunia kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 8,
      "question": "Saya merasa takut kelak tidak dapat beradaptasi di lingkungan kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 9,
      "question": "Saya sering buang air kecil ketika memikirkan akan menghadapi wawancara seleksi kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 10,
      "question": "Saya sangat bersemangat ketika membicarakan mengenai dunia kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 11,
      "question": "Saya yakin mampu bekerja dengan baik",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 12,
      "question": "Saya takut gagal dalam menghadapi proses adaptasi di tempat kerja nantinya",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 13,
      "question": "Saya bersemangat saat membayangkan dunia kerja yang saya impikan",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 14,
      "question": "Tangan saya berkeringat saat membayangkan akan mengikuti wawancara seleksi kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 15,
      "question": "Saya stress ketika memikirkan beratnya tanggung jawab pekerjaan",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 16,
      "question": "Mencari tips menghadapi dunia kerja adalah kegiatan yang menyenangkan",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 17,
      "question": "Saya membaca banyak buku tentang psikotes dan wawancara seleksi kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 18,
      "question": "Saya merasa pusing ketika mendapat pertanyaan terkait pekerjaan dari orang sekitar",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 19,
      "question": "Memikirkan tanggung jawab pekerjaan membuat saya sering murung",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 20,
      "question": "Saya semangat untuk mendapat pekerjaan impian saya",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 21,
      "question": "Saya senang mengikuti pelatihan mengenai dunia kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 22,
      "question": "Saya sulit tidur membayangkan sulitnya mendapat pekerjaan",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 23,
      "question": "Saya merasa tidak bisa mendapatkan pekerjaan",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 24,
      "question": "Saya berfikir bahwa saya tidak mampu melewati tes seleksi kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 25,
      "question": "Saya merasa cemas saat memikirkan lapangan pekerjaan",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 26,
      "question": "Saya yakin mendapatkan pekerjaan setelah menyelesaikan kuliah",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 27,
      "question": "Saya merasa khawatir tidak lulus seleksi kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 28,
      "question": "Saya merasa tidak bisa mendapatkan pekerjaan yang saya impikan",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 29,
      "question": "Saya suka perbincangan tips dan cara menghadapi wawancara seleksi kerja",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  },
  {
      "number": 30,
      "question": "Saya sangat bersemangat mencari informasi mengenai lowongan pekerjaan",
      "probabilities": [
          20,
          20,
          20,
          20,
          20
      ]
  }
]
export default questions;
