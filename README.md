# Informatika A Website

Website ini menampilkan profil mahasiswa dari kelas Informatika A, termasuk informasi seperti nama, NIM, peran, hobi, dan tautan media sosial. Proyek ini dibangun menggunakan Next.js dengan TypeScript dan Tailwind CSS.

## Fitur

- Daftar profil mahasiswa dalam bentuk kartu (card) dengan foto, nama, NIM, peran, dan hobi
- Filter dan pencarian berdasarkan nama, NIM, atau peran
- Desain responsif dengan tema terang dan gelap
- Integrasi tautan media sosial (Instagram, LinkedIn, GitHub)

## Prasyarat

Pastikan kamu memiliki alat berikut terinstal di komputer:

- Node.js (versi 14 atau lebih baru)
- npm atau Yarn sebagai package manager

## Cara Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan proyek di lokal:

### 1. Kloning Repositori

```bash
git clone <https://github.com/NaufalNyaa/web_kelas.git>
```

### 2. Masuk ke Direktori Proyek

```bash
cd <web_kelas>
```

### 3. Instal Dependensi

```bash
npm install
```

atau

```bash
yarn install
```

### 4. Jalankan Proyek

```bash
npm run dev
```

atau

```bash
yarn dev
```

### 5. Buka di Browser

Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## Struktur Proyek

```
├── app/                    # Berisi halaman utama seperti profil/page.tsx
├── components/             # Berisi komponen React seperti ProfileCard.tsx
├── public/                 # Berisi aset statis seperti gambar mahasiswa
│   └── images/
│       └── mahasiswa/      # Foto-foto mahasiswa
├── styles/                 # Berisi file CSS global seperti globals.css
└── ...
```

## Menambahkan Foto Mahasiswa

1. Simpan foto mahasiswa di folder `public/images/mahasiswa/` (atau subfolder lain di `public` sesuai kebutuhan)

2. Perbarui path foto di `app/profil/page.tsx` pada array `studentsData`. Contoh:

```javascript
{
  id: 1,
  name: "Adila Muqtashida",
  photo: "/images/mahasiswa/student-2.jpg",
  nim: "241730001",
  role: "",
  hobby: "",
  instagram: "",
  linkedin: "",
  github: ""
}
```

3. Pastikan path foto sesuai dengan lokasi file di folder `public`

## Catatan

- Folder `node_modules` tidak disertakan di repositori. Jalankan `npm install` untuk membuatnya
- Jika foto tidak muncul, periksa path di `studentsData` dan pastikan file ada di folder `public`

## Kontribusi

Jika kamu ingin berkontribusi:

1. Fork repositori ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m "Menambahkan fitur baru"`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
