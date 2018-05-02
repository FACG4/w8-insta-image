BEGIN;

DROP TABLE IF EXISTS users, posts, comments, likes CASCADE;

CREATE TABLE users(
  id serail PRIMARY KEY ,
  user_name VARCHAR UNIQUE NOT NULL ,
  password VARCHAR NOT NULL CHECK (length(password)>=8) ,
  role VARCHAR DEFAULT 'user',
  email VARCHAR(30) UNIQUE,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  pic_url VARCHAR UNIQUE ,
  title VARCHAR NOT NULL ,
  description TEXT NOT NULL CHECK (length(post_content)>0),
  created_at timestamp NOT NULL,
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  comment_content TEXT NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE, 
)

INSERT INTO users (user_name,password,email, first_name, last_name)
VALUES 
  ('m123', '123', 'someone@gmail.com','Ali', 'Baba'),
  ('john159', '123', 'john@gmail.com', 'John', 'Rees'),
  ('root987', '147', 'root@gmail.com', 'Root', 'Fruit'),
  ('lion', '852', 'lion@gmail.com', 'Lion', 'Heart');

INSERT INTO posts (user_id,pic_url,title,description,created_at)
VALUES 
  (1, './pic1.jpg', 'Nice pic', 'This is cool a cool pic  123','2018-03-22 19:10:25-07' ),
  (2, './pic2.jpg', 'Nice pic2', 'This is cool a cool pic321','2018-03-22 19:10:25-07' ),
  (3, './pic3.jpg', 'Nice pic3', 'This is cool a cool pic213','2018-03-22 19:10:25-07' );

INSERT INTO comments (user_id,post_id ,comment_content)
VALUES 
  (2, 1, 'This is a great picture'),
  (2, 3, 'This is a great picture'),
  (1, 2, 'This is a great picture');

INSERT INTO likes (user_id,post_id )
VALUES 
  (2, 1),
  (2, 3),
  (1, 2);

COMMIT ;
