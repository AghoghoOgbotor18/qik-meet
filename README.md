# QikMeet

**QikMeet** is a lightweight video-calling web application designed for instant, frictionless meetings. Users simply enter a name, generate a room, and join a video call immediately — no accounts, sign-ups, or onboarding required. The generated room link can be shared with anyone, allowing participants to join with a single click.

---

## Why I Built It

At the time of building this project, I had not yet learned authentication systems. Instead of seeing that as a limitation, I used it as an opportunity to create a product that removed unnecessary barriers altogether. Inspired by platforms such as Whereby and early Zoom, I focused on making the joining process as fast and simple as possible.

---

## Features

- Instant room creation — no account needed
- Shareable room link for easy invites
- Multi-participant video calls
- Real-time text chat
- Unique room ID generation to prevent collisions
- Fully responsive interface

---

## How It Works

1. The user enters a room name on the landing page.
2. The application sanitizes the input and appends a unique ID — so `meeting` becomes `meeting_4f9a2c`.
3. The room is powered by the **ZEGOCLOUD API**, which handles video conferencing, chat functionality, and participant management.
4. Anyone with the room link can join instantly without creating an account.

---

## Challenges & Solutions

**Challenge 1 — Room Name Collisions**

**Problem:** If two separate groups both named their room `meeting`, they'd end up in the same video call without realising it.

**Solution:** I appended a random string to every room name at generation time using `crypto.randomUUID()` — so `meeting` becomes `meeting_4f9a2c`. The URL stays readable, but the chance of collision drops to near zero. User input is also sanitized to replace spaces and special characters with underscores, preventing illegal characters from breaking the room ID.

---

**Challenge 2 — Large Bundle Size**

**Problem:** The initial production build produced a single JavaScript bundle of **5,586 kB**, almost entirely due to the ZEGOCLOUD library. This caused slow initial page loads even for users who hadn't yet joined a room.

**Solution:** I implemented code splitting using Vite's `manualChunks` and React's `lazy()` with `Suspense`. This separated the bundle into distinct chunks and deferred loading the ZEGOCLOUD library until the user actually navigates to the meeting room.

| Chunk | Before | After |
|---|---|---|
| Main JS bundle | 5,586 kB | 350 kB |
| ZEGOCLOUD | merged in | 5,175 kB (loads on demand) |
| React vendor | merged in | 11 kB |

The homepage now loads **94% faster** in terms of initial JS payload.

---

**Challenge 3 — Camera and Microphone Not Releasing on Exit**

**Problem:** When a user navigated away from the room page — especially on mobile — the camera and microphone remained active even after leaving. The browser indicator light stayed on and permissions were not properly revoked.

**Solution:** I tracked the raw media stream using a `useRef` and called `track.stop()` on every track during cleanup. A `stopAllTracks()` function runs in three situations: when the user clicks the exit button, when `onLeaveRoom` fires, and in the `useEffect` cleanup when the component unmounts. I also added a 10-second connection timeout that detects failed connections and shows an exit overlay — so users are never stuck on a blank screen with their camera running and no way out.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| ReactJS | Frontend UI |
| Vite | Build tool and dev server |
| ZEGOCLOUD API | Video, audio, and chat infrastructure |

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A ZEGOCLOUD account — [sign up here](https://www.zegocloud.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/AghoghoOgbotor18/qik-meet.git

# Navigate into the project folder
cd qik-meet

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project and add your ZEGOCLOUD credentials:

```env
VITE_ZEGO_APP_ID=your_app_id_here
VITE_ZEGO_SERVER_SECRET=your_server_secret_here
```

> ⚠️ Never commit your `.env` file to GitHub. Make sure it is listed in your `.gitignore`.

### Running the App

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## What I Learned

- Working with third-party APIs
- Generating and managing dynamic routes
- Handling unique room identification to prevent collisions
- Code splitting and lazy loading with React and Vite
- Analysing and optimising production bundle size
- Managing browser media permissions and releasing camera/mic correctly
- Building resilient UX around unreliable network connections
- Building a real-world product under technical constraints
- Designing for simplicity and user experience

---

## Live Demo

[View Live App](https://qik-meet.vercel.app/)

---

## Author

**Sylvia** — [GitHub](https://github.com/AghoghoOgbotor18)