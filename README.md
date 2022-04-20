# TugasPAM4
Nama  : Aprilia Purwanto  
NIM   : 119140003  
Kelas : RB  

**Nama Aplikasi**  
Voice Recorder  

**Deskripsi Aplikasi**  
Aplikasi Voice Recorder merupakan aplikasi yang berfungsi untuk merekam suara berdasarkan input yang masuk dari pengguna,
baik suara pengguna itu sendiri maupun suara dari sekitar pengguna. Suara yang telah direkam akan disimpan dan dapat dimainkan
ulang serta dishare ke media lain. Lebih jelasnya dapat dilihat dari gambar berikut.    

_**Start Recording**_    

<img src="https://user-images.githubusercontent.com/83486874/163529429-37593f29-70ec-4e01-a7cb-6f2172c0f55d.jpeg" width = "179" height = "400"/>  

Pengguna dapat menekan tombol bulat bertuliskan "Start Recording" untuk memulai merekam suara. Ketika diklik, aplikasi akan merekam suara yang masuk.
Tombol pun berubah tulisan menjadi "Stop Recording" yang menandakan bahwa aplikasi telah mulai merekam dan untuk menghentikan rekaman dapat menekan
tombol "Stop Recording".

_**Stop Recording**_  

<img src="https://user-images.githubusercontent.com/83486874/163527912-4efbe4fd-eeba-4188-95f1-7a6ae79e7d8e.jpeg" width = "179" height = "400"/>  

Untuk menghentikan rekaman suara, pengguna dapat menekan tombol "Stop Recording" seperti di atas. Setelahnya, rekaman yang telah direkam dan tersimpan
akan ditampilkan. Tombol pun kembali bertuliskan "Start Recording" siap untuk merekam kembali.

_**Recordings**_  

<img src="https://user-images.githubusercontent.com/83486874/163529180-13fef85c-447c-400d-96a8-73bd803b9a5b.jpeg" width = "179" height = "400"/>  

Rekaman pertama yang telah tersimpan akan ditampilkan dengan nama "Recording 1" disertai durasi rekaman. Pengguna dapat memutar atau membagikan rekaman tersebut ke
media lain.

_**More Recordings**_  

<img src="https://user-images.githubusercontent.com/83486874/163529571-b9bc101f-4a30-40da-baf9-0e0499e63631.jpeg" width = "179" height = "400"/>  

Untuk merekam lagi, pengguna dapat menekan tombol "Start Recording" dan aplikasi akan kembali merekam suara.


<img src="https://user-images.githubusercontent.com/83486874/163529618-dc7a36c5-1575-40b2-9de7-cfa258451dd0.jpeg" width = "179" height = "400"/>  

Setelah pengguna menekan tombol "Stop Recording", rekaman kedua akan tersimpan dan ditampilkan dengan nama "Recording 2" disertai durasi rekaman dan seterusnya
untuk rekaman-rekaman selanjutnya.  

**Daftar Package**  
Beberapa package yang digunakan dalam pembuatan aplikasi ini dapat dilihat pada gambar berikut.  

<img src="https://user-images.githubusercontent.com/83486874/163531444-7d9604b1-2796-4cb0-b035-9a73978f6031.png" width = "341" height = "192"/>  



**Cara Menginstall Aplikasi**  
Aplikasi dapat diunduh pada link berikut : https://drive.google.com/drive/folders/1eImfvKvXaYOTmfU7nXxKwB4iI15IUUkg  
Setelah terdownload, klik aplikasi dan pilih install. Aplikasi pun dapat digunakan.  

**Source Code**  
<img src="https://user-images.githubusercontent.com/83486874/164259728-118899d1-7a57-48f2-94df-4c51bc21f0b0.JPG" width = "391" height = "242"/>  
Variabel recording berfungsi untuk menyimpan rekaman yang direkam aplikasi. Variabel recordings berfungsi untuk menyimpan rekaman-rekaman yang telah direkam sebelumnya. Variabel message berfungsi untuk menetapkan pesan jika terjadi error. Fungsi permission berguna untuk mengatur izin aplikasi, jika statusnya “granted” maka aplikasi diperbolehkan untuk mulai recording, jika tidak maka akan muncul pesan “please grant permission to app to access microphone”. Jika terjadi error maka akan muncul pesan “failed to start recording”.  

<img src="https://user-images.githubusercontent.com/83486874/164276389-3625f68f-1a40-48f9-8a00-a9a29bd28d74.JPG" width = "411" height = "242"/>  
Function stopRecording berfungsi untuk menghentikan recording yang sedang dilakukan dan  menambahkan hasil recording beserta detail durasinya ke setRecordings.  


<img src="https://user-images.githubusercontent.com/83486874/164276427-de8b032f-5c32-417b-9dc8-cbbb89273148.JPG" width = "431" height = "242"/>  
Function getDurationFormatted berfungsi menampilkan durasi recordings dalam format menit dan detik.  


<img src="https://user-images.githubusercontent.com/83486874/164276448-32b340fe-f35f-48a7-88a0-b4df65afcc05.JPG" width = "411" height = "242"/>  
Function getRecordingLines berfungsi untuk menampilkan nama Recording index + 1 sesuai urutan recordingnya. Lalu terdapat dua tombol yang pertama tombol “Play” untuk memainkan hasil recording dan yang kedua tombol “Share” untuk membagikan recording ke media lain.  


<img src="https://user-images.githubusercontent.com/83486874/164276479-e995b018-04a7-4218-af4d-c49f36c7c5ea.JPG" width = "411" height = "242"/>  
Pada laman aplikasi, terdapat judul nama aplikasi yaitu “Voice Recording” di bawahnya copyright “by Aprilia Purwanto 119140003”. Lalu, terdapat tombol recording dibuat dengan touchable opacity bertuliskan “Start Recording”, ketika diklik maka tulisan di tombol akan berubah menjadi “Stop Recording” untuk menghentikan recording.  


<img src="https://user-images.githubusercontent.com/83486874/164276511-5e4530d4-931c-45ab-be09-8267670225ea.JPG" width = "391" height = "292"/>  
Di atas merupakan potongan kode untuk style yang digunakan dalam pembuatan aplikasi.  
