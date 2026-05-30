QuickMeet

QuickMeet is a lightweight video-calling web application designed for instant, frictionless meetings. Users simply enter a name, generate a room, and join a video call immediately—no accounts, sign-ups, or onboarding required. The generated room link can be shared with anyone, allowing participants to join with a single click.

Why I Built It

At the time of building this project, I had not yet learned authentication systems. Instead of seeing that as a limitation, I used it as an opportunity to create a product that removed unnecessary barriers altogether. Inspired by platforms such as Whereby and early Zoom, I focused on making the joining process as fast and simple as possible.

Features
	•	Instant room creation
	•	Shareable room links
	•	Multi-participant video calls
	•	Real-time text chat
	•	No account or sign-up required
	•	Responsive and user-friendly interface

How It Works
	1.	The user enters a room name on the landing page.
	2.	The application generates a unique room URL.
	3.	The room is powered by the ZEGOCLOUD API, which handles video conferencing, chat functionality, and participant management.
	4.	Anyone with the room link can join instantly without creating an account.

Challenge & Solution

A potential issue was room-name collisions. If multiple users entered the same room name, they could unintentionally join the same meeting.

To solve this, I implemented a unique room-generation strategy that appends a random number to each room name. For example, a room named video might become video-4823. This significantly reduces the likelihood of collisions while keeping room URLs readable and easy to share.

Tech Stack
	•	HTML
	•	CSS
	•	JavaScript
	•	ZEGOCLOUD API

What I Learned
	•	Working with third-party APIs
	•	Generating and managing dynamic routes
	•	Handling unique room identification
	•	Building a real-world product under technical constraints
	•	Designing for simplicity and user experience
