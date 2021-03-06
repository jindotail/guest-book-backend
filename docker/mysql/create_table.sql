CREATE TABLE user (
    idx INT NOT NULL AUTO_INCREMENT,
    id VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    nickname VARCHAR(30) NOT NULL,
    salt VARCHAR(50) NOT NULL,
    is_disabled TINYINT DEFAULT 0,
    iso_time VARCHAR(30) NOT NULL,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY(idx),
    UNIQUE (id)
) CHARSET=utf8;

CREATE TABLE comment (
    idx INT NOT NULL AUTO_INCREMENT,
    user_idx INT NOT NULL,
    comment VARCHAR(30) NOT NULL,
    is_disabled TINYINT DEFAULT 0,
    iso_time VARCHAR(30) NOT NULL,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY(idx),
    FOREIGN KEY (user_idx) REFERENCES user(idx) ON UPDATE CASCADE
) CHARSET=utf8;

CREATE TABLE token (
    user_idx INT NOT NULL,
    refresh_token VARCHAR(200) NOT NULL,
    created_at DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY(user_idx),
    FOREIGN KEY (user_idx) REFERENCES user(idx) ON UPDATE CASCADE
) CHARSET=utf8;