
DROP TABLE IF EXISTS users, posts, comments, likes CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL CHECK(char_length(password)>8),
  role VARCHAR DEFAULT 'user',
  email VARCHAR(30) UNIQUE,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  pic_url VARCHAR UNIQUE ,
  title VARCHAR NOT NULL ,
  description TEXT NOT NULL CHECK (char_length(description)>0),
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
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
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO users (user_name,password,email, first_name, last_name)
VALUES
  ('m123', '1234567895', 'someone@gmail.com','Ali', 'Baba'),
  ('john159', '1234567895', 'john@gmail.com', 'John', 'Rees'),
  ('root987', '1234567895', 'root@gmail.com', 'Root', 'Fruit'),
  ('lion', '1234567895', 'lion@gmail.com', 'Lion', 'Heart');

INSERT INTO posts (user_id,pic_url,title,description)
VALUES
  (1, '/images/pic1.jpg', 'Nice pic', 'This is cool a cool pic  123'),
  (2, '/images/pic2.jpg', 'Nice pic2', 'This is cool a cool pic321');

INSERT INTO comments (user_id,post_id ,comment_content)
VALUES
  (2, 1, 'This is a great picture'),
  (2, 2, 'This is a great picture'),
  (1, 2, 'This is a great picture');

INSERT INTO likes (user_id,post_id )
VALUES
  (2, 1),
  (2, 2),
  (1, 2);

COMMIT;
