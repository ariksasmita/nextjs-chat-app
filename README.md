# Next.js Chat Application

Aplikasi chat real-time yang dibangun menggunakan Next.js, Socket.IO, dan Express.

## Struktur Project
nextjs-chat-app/
├── client/ # Aplikasi frontend Next.js
├── server/ # Server Express & Socket.IO
└── package.json # Root package.json untuk workspace

## Teknologi yang Digunakan

- **Frontend**:
  - Next.js 14
  - Socket.IO Client
  - Tailwind CSS
  - TypeScript

- **Backend**:
  - Express.js
  - Socket.IO
  - TypeScript

## Cara Memulai

1. Clone repository
```bash
git clone [url-repository]
cd nextjs-chat-app
```

2. Install dependencies
```bash
npm run dev
```

Perintah ini akan menjalankan server dan client secara bersamaan:
- Client: http://localhost:3000
- Server: http://localhost:5000

## Scripts yang Tersedia

- `npm run dev` - Menjalankan server dan client secara bersamaan
- `npm run client` - Menjalankan aplikasi client saja
- `npm run server` - Menjalankan server saja

## Fitur

- Real-time chat
- Multiple room support
- Typing indicators
- Online status
- Message history

## Kontribusi

Silakan buat pull request untuk kontribusi. Untuk perubahan besar, harap buka issue terlebih dahulu untuk mendiskusikan perubahan yang diinginkan.

## Lisensi

[MIT](https://choosealicense.com/licenses/mit/)