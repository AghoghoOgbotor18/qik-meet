# QikMeet

**QikMeet** is a lightweight video-calling web application designed for instant, frictionless meetings. Users simply enter a name, generate a room, and join a video call immediately — no accounts, sign-ups, or onboarding required. The generated room link can be shared with anyone, allowing participants to join with a single click.

---

## Why I Built It

At the time of building this project, I had not yet learned authentication systems. Instead of seeing that as a limitation, I used it as an opportunity to create a product that removed unnecessary barriers altogether. Inspired by platforms such as Whereby and early Zoom, I focused on making the joining process as fast and simple as possible.

---

## Features

- Instant room creation
- Shareable room links
- Multi-participant video calls
- Real-time text chat
- No account or sign-up required
- Responsive and user-friendly interface

---

## How It Works

1. The user enters a room name on the landing page.
2. The application generates a unique room URL.
3. The room is powered by the **ZEGOCLOUD API**, which handles video conferencing, chat functionality, and participant management.
4. Anyone with the room link can join instantly without creating an account.

---

## Challenges & Solutions

**Challenge 1 — Room Name Collisions**

**Problem:** If multiple users entered the same room name, they could unintentionally join the same meeting.

**Solution:** I implemented a unique room-generation strategy that appends a random string to each room name using `crypto.randomUUID()`. For example, a room named `video` might become `video-md48pj`. This significantly reduces the likelihood of collisions while keeping room URLs readable and easy to share.

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
VITE_APP_ID=your_app_id_here
VITE_SERVER_SECRET=your_server_secret_here
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
- Building a real-world product under technical constraints
- Designing for simplicity and user experience

---

## Live Demo

[View Live App](https://qik-meet.vercel.app)

---

## Author

**Sylvia** — [GitHub](https://github.com/AghoghoOgbotor18)