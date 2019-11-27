DROP TABLE IF EXISTS todos;


CREATE TABLE todos (id SERIAL PRIMARY KEY,
                                      subject VARCHAR NOT NULL,
                                                      content TEXT NOT NULL);


INSERT INTO todos (subject, content)
VALUES ('Cool',
        'Steven Seagal now looks like a beached whale because he  Norris total-gym'), ('Pragramming',
                                                                                       ' beached whale because he  Norris total-gym'), ('Pragramming',
                                                                                                                                        'Steven Seagal  whale because he  Norris total-gym'), ('Pragramming',
                                                                                                                                                                                               ' he  Norris total-gym'), ('Pragramming',
                                                                                                                                                                                                                          'Steven Seagal now looks like a beached whale because he  Norris total-gym'), ('Pragramming',
                                                                                                                                                                                                                                                                                                         'Steven Seagal now looks like a beached whale because he  Norris total-gym'), (' Twice',
                                                                                                                                                                                                                                                                                                                                                                                        'ugiat veniam minus'), (' Twice',
                                                                                                                                                                                                                                                                                                                                                                                                                'ugiat veniam minus');