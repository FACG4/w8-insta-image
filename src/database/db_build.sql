BEGIN;

DROP TABLE IF EXISTS users, posts, comments, likes CASCADE;

CREATE TABLE users(
  id serail PRIMARY KEY ,
  user_name VARCHAR UNIQUE NOT NULL ,
  password VARCHAR NOT NULL CHECK (length(password)>=8) ,
  role VARCHAR DEFAULT 'user',
  email VARCHAR(30) UNIQUE
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id  INTEGER REFERENCES users(id) ON DELETE CASCADE,
  pic_url   VARCHAR UNIQUE ,
  title VARCHAR NOT NULL ,
  description TEXT NOT NULL ,
  post_content TEXT NOT NULL CHECK (length(post_content)>0),
  created_at   timestamp NOT NULL,

);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  comment_content TEXT NOT NULL
);

INSERT INTO users (user_name,password,role,email)
VALUES ()

INSERT INTO posts (user_id,pic_url,title,description,post_content,created_at)
VALUES ()

INSERT INTO comments (user_id,post_id ,comment_content)
VALUES ()


COMMIT ;
