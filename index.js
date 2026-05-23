require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const githubData = {
  "login": "abhinav291",
  "id": 268685280,
  "node_id": "U_kgDOEAPP4A",
  "avatar_url": "https://avatars.githubusercontent.com/u/268685280?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abhinav291",
  "html_url": "https://github.com/abhinav291",
  "followers_url": "https://api.github.com/users/abhinav291/followers",
  "following_url": "https://api.github.com/users/abhinav291/following{/other_user}",
  "gists_url": "https://api.github.com/users/abhinav291/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abhinav291/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abhinav291/subscriptions",
  "organizations_url": "https://api.github.com/users/abhinav291/orgs",
  "repos_url": "https://api.github.com/users/abhinav291/repos",
  "events_url": "https://api.github.com/users/abhinav291/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abhinav291/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abhinav Singhal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-03-16T17:10:15Z",
  "updated_at": "2026-03-31T10:19:38Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/twitter", (req, res) => {
    res.send("abhinavdotcom");
})

app.get("/login", (req, res) => {
    res.send("<h1>Login Page</h1>");
})

app.get("/github", (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});