# GrubGift
GrubGift is a fully-featured social media web application, built with the MERN stack.  

Deployed at: https://post-it-heroku.herokuapp.com/

![GIF of GrubGift walkthrough](https://user-images.githubusercontent.com/22213237/207124947-22b921ed-ab45-42cd-8fbf-9e69909f5899.gif)

## Product Vision
GrubGift is a free food sharing social media app that connects people with excess food to those 
in need. Our platform allows users to share locations and events where free food is being served,
making it easy for anyone to access and enjoy a meal. With GrubGift, you can help reduce food 
waste and connect with your community in a meaningful way. Whether you're looking to donate 
excess food, find a free meal, or simply connect with others who share your passion for food, 
GrubGift is the perfect platform for you. Sign up today and start sharing the gift of food with 
those in need.

Some potential product features for GrubGift, a free food sharing social media app for students, could include:

    A user-friendly interface that makes it easy for students to share information about free food events and locations on campus.

    A map feature that shows the locations of nearby free food events, making it easy for students to find and attend them.

    A messaging system that allows students to connect with each other and coordinate food sharing.

    A calendar feature that helps students keep track of upcoming free food events and plan their schedules accordingly.

    Integration with popular social media platforms, such as Facebook and Twitter, to help students promote and share information about free food events with their friends and followers.

    A rating and review system that allows students to provide feedback on their experiences with different free food events, helping other students make informed decisions about which events to attend.

    A notification system that alerts students about new free food events and opportunities in their area.

    A search function that allows students to quickly and easily find free food events based on their location, dietary restrictions, and other criteria.

    A profile system that allows students to create and manage their own profiles, including their contact information, dietary preferences, and other relevant details.

    A mobile app that allows students to access and use GrubGift on the go, from their smartphones or other mobile devices.

## Features
- Create, read, update and delete posts
- Like and unlike posts
- Create, reply to, read, update and delete nested comments
- Markdown for posts and comments
- Sign up and login using JWT for authentication
- Private message users in real-time using socket.io
- View profiles of users and browse through their posts, liked posts and comments
- Infinite scrolling 
- Sort posts by attributes such as like count, comment count and date created
- Profanity filtering and posting/commenting cooldowns
- Update bio which can be viewed by other users
- Search for posts by their title
- Fully responsive layout

## Installation and usage
1) Clone this repository  
```
git clone https://github.com/ihtasham42/social-media-app.git
```
2) Install dependencies  
```
cd social-media-app  
npm install
cd client
npm install
```
3) Create .env in root directory
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd social-media-app
cd client
npm start
```

## Screenshots
### Explore view
![image](https://user-images.githubusercontent.com/22213237/207125370-b4f68b16-f8d6-48ec-a351-d189e121f26e.gif)

### Post view
![image](https://user-images.githubusercontent.com/22213237/207125469-00571927-3d2b-49e1-917e-a59d8862fa81.png)

### Nested comments
![image](https://user-images.githubusercontent.com/22213237/207125652-4b96ef99-5a34-4d18-9918-0786f7edaa83.png)

### Profile view
![image](https://user-images.githubusercontent.com/22213237/207125748-56f9854b-61ba-4885-9bfa-fc357b7e5732.png)

### Real-time private messenger
![image](https://user-images.githubusercontent.com/22213237/207125866-28913c94-f628-435d-b187-456f73f2fdc9.png)

### Search view
![image](https://user-images.githubusercontent.com/22213237/207125977-567b74cd-e149-4ca9-bf04-f1921db38137.png)

