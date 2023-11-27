<h1 align="center">
  <br>
    Tugas Besar Rekayasa Perangkat Lunak STI 21
  <br>
</h1>

<h2 align="center">
  <br>
    Aplikasi Aeron-time
  <br>
</h2>

Pengerjaan tugas besar mata kuliah Rekayasa Perangkat Lunak program studi STI tahun ajaran 2023/2024
Anggota kelompok 5 K3:
1. Wan Aufa Azis            18221001
2. Khairunnisa Hurun ‘Iin   18221004
3. Richard Haris            18221006

## Penjelasan mengenai aplikasi
Sistem yang dikembangkan merupakan sistem informasi bandara berbasis website yang dirancang untuk memenuhi kebutuhan informasi penerbangan kepada penumpang pesawat dengan tujuan untuk memberikan akses cepat dan akurat terhadap informasi penting seputar penerbangan dan pengumuman terkini. Sistem meliputi informasi jadwal penerbangan yang akurat, termasuk perubahan gate, waktu keberangkatan, dan status keberangkatan. Sistem akan memberikan notifikasi kepada pengguna mengenai pengumuman-pengumuman terkini yang terjadi di bandara.

Sistem yang dikembangkan memungkinkan penumpang dapat memeriksa rincian penerbangan yang mereka naiki dengan cepat dan mudah, serta menghindari kebingungan. Panel informasi penerbangan yang terdapat di bandara sering kali tidak mencerminkan realita. Misalnya, terdapat banyak kasus dimana penumpang dari maskapai tertentu menjadi kebingungan akibat ketidaksesuaian informasi pintu gerbang masuk pesawat. Sistem ini diharapkan dapat menghindari ketidaknyamanan yang timbul akibat perubahan jadwal atau pintu keberangkatan dengan memberikan informasi terkini perubahan.

## Cara menjalankan aplikasi
Clone repositori ini dan masuk ke direktori repositori lokal yang telah dibuat
```
    git clone https://gitlab.informatika.org/k03_ge/aeron-time.git
```
Kemudian buka direktori di terminal, dan jalankan perintah berikut untuk menginstall semua modul yang dibutuhkan
```
    npm install
```
Setelah proses instalasi selesai, jalankan perintah berikut untuk memulai server
```
    npm run dev
```
lalu buka [http://localhost:3000/](http://localhost:3000/) di browser kalian untuk mengakses aplikasi

## Daftar use case yang diimplementasikan 
Nama Use Case                                       | NIM dan Nama Penanggung Jawab
1. Use Case Login                                   | 18221001 Wan Aufa Azis
![login page](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/loginpage.png)
2. Use Case Register                                | 18221004 Khairunnisa Hurun ‘Iin
![register page](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/registerpage.png)
3. Use Case Melihat Informasi Penerbangan           | 18221001 Wan Aufa Azis
![fligth information page1](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/homepage-3.png)
![fligth information page2](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/homepage-1.png)
4. Use Case Mendaftarkan Penerbangan                | 18221006 Richard Haris
![register trips page1](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/mytrips-register-1.png)
![register trips page2](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/mytrips-register-2.png)
5. Use Case Melihat Detil Informasi Penerbangan     | 18221006 Richard Haris
![flight detail page](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/mytrips-detail-page-4.png)
6. Use Case Melihat History Penerbangan             | 18221004 Khairunnisa Hurun ‘Iin
![mytrips history page1](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/mytrips-history-1.png)
![mytrips history page2](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/mytrips-history-2.png)
7. Use Case Search                                  | 18221001 Wan Aufa Azis,18221004 Khairunnisa Hurun ‘Iin,18221006 Richard Haris
![search bar](https://gitlab.informatika.org/k03_ge/aeron-time/-/raw/eeb3e0f7c956ff7f2938f0a80650217a5c0a952f/doc/homepage-1.png)

## Daftar tabel basis data
- Flight = (__flightID__, airline, originAirport, destAirport, depTime, arrTime, status, type)
- User = (__email__, userName, password, role, status)
- DepFlight = (__flightID__, gate)
- Passenger = (__passID__, flight, noInduk, tglLahir, firstName, lastName, email, bookingcode)
- MyTrips = (__user__, __flight__, status)
- FlightInformationChange (__informationID__, flight, timeStamp, type)
- GateChange = (__informationID__, oldGate, newGate)
- DepTimeChange = (__informationID__, oldDepTime, newDepTime)
- ArrTimeChange = (__informationID__, oldArrTime, newArrTime)
- Cancellation = (__informationID__, cancellationReason)

## Link Deployment
