


CREATE TABLE IF NOT EXISTS 

 categories (

    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name  VARCHAR (50) NOT NULL,
    img VARCHAR (50)
  
);




CREATE TABLE IF NOT EXISTS 
 authors (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name  VARCHAR (50) NOT NULL,
    img VARCHAR (50)
    
);

 


CREATE TABLE IF NOT EXISTS 
  articles (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    head_Line VARCHAR (50) NOT NULL,
    subHead VARCHAR (50),
    content VARCHAR (50) NOT NULL,
    cover VARCHAR (50),
    author_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors  ,
    FOREIGN KEY (category_id) REFERENCES categories  
   
);


 


CREATE TABLE IF NOT EXISTS 
reactions (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text  CHAR (50) NOT NULL,
    is_clapped BOOLEAN,
    author_id INTEGER NOT NULL,
    article_id INTEGER NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors  ,
    FOREIGN KEY (article_id) REFERENCES articles  
  
    
);