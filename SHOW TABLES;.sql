-- 테이블 생성
CREATE TABLE IF NOT EXISTS users (
    id bigint(5) NOT NULL AUTO_INCREMENT, 
    name varchar(255) NOT NULL,
    age varchar(5) NOT NULL,
    PRIMARY KEY (id)
);

-- 데이터 삽입
INSERT INTO users (name, age) VALUES
('고윤혁', 30);

-- 데이터 조회
SELECT * FROM users;