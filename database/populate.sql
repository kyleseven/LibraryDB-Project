INSERT INTO ACCOUNT (username, password)
VALUES (
    'librarian1',
    'password'
);

INSERT INTO ACCOUNT (username, password)
VALUES (
    'student1',
    'password'
);

INSERT INTO ACCOUNT (username, password)
VALUES (
    'student2',
    'password'
);

/*
+------------+------------+----------+
| account_id | username   | password |
+------------+------------+----------+
|          1 | librarian1 | password | <- Librarian
|          2 | student1   | password | <- Student 1
|          3 | student2   | password | <- Student 2
+------------+------------+----------+

Creating an Employee: ACCOUNT -> EMPLOYEE_ACCOUNT -> EMPLOYEE -> LIBRARIAN/BURSAR (if applicable)
Creating a Student: ACCOUNT -> STUDENT_ACCOUNT -> STUDENT
*/

-- Creating Library Employee with account_id 1
INSERT INTO EMPLOYEE_ACCOUNT (account_id)
VALUES (
    1
);

INSERT INTO EMPLOYEE (account_id)
VALUES (
    1
);

INSERT INTO LIBRARIAN (employee_id)
VALUES (
    1
);

-- Creating Student with account_id 2
INSERT INTO STUDENT_ACCOUNT (account_id)
VALUES (
    2
);

INSERT INTO STUDENT (name, address, account_id)
VALUES (
    'Joe Biden',
    '1600 Pennsylvania Avenue NW, Washington, DC 20500',
    2
);

-- Creating Student with account_id 3
INSERT INTO STUDENT_ACCOUNT (account_id)
VALUES (
    3
);

INSERT INTO STUDENT (name, address, account_id)
VALUES (
    'John Smith',
    '1234 Street St, Dallas, TX 75001',
    3
);

/*
Creating Books: LIBRARY_ASSETS -> BOOK
*/

-- Add 3 library assets
INSERT INTO LIBRARY_ASSETS
VALUES ();

INSERT INTO LIBRARY_ASSETS
VALUES ();

INSERT INTO LIBRARY_ASSETS
VALUES ();

/*
+----------+---------------------+
| order_id | due_date_time       |
+----------+---------------------+
|        1 | 2021-10-27 04:11:06 | <- These timestamps will be different
|        2 | 2021-10-27 04:11:12 |
|        3 | 2021-10-27 04:11:12 |
+----------+---------------------+
*/

INSERT INTO FINING_SYSTEM (order_id)
VALUES (1);

INSERT INTO FINING_SYSTEM (order_id)
VALUES (2);

INSERT INTO FINING_SYSTEM (order_id)
VALUES (3);

INSERT INTO DEVICE (type)
VALUES ('Laptop');

INSERT INTO DEVICE (type)
VALUES ('Projector');

INSERT INTO DEVICE (type)
VALUES ('Webcam');

INSERT INTO DEVICE (type)
VALUES ('Calculator');

INSERT INTO STUDY_ROOM
VALUES ();

INSERT INTO STUDY_ROOM
VALUES ();

INSERT INTO STUDY_ROOM
VALUES ();

INSERT INTO STUDY_ROOM
VALUES ();

/*




****************************************************

The rest of the queries are book entries.
There are lots of them.

****************************************************




*/

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Fundamentals of Database Systems (7th Edition)',
    'Ramez Elmasri',
    '000.501',
    'Pearson',
    'Computer Science',
    '2016-01-01',
    'en',
    9780133971118
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Harry Potter and the Half-Blood Prince (Harry Potter  #6)',
    'J.K. Rowling/Mary GrandPr�',
    '000.000',
    'Scholastic Inc.',
    'Placeholder',
    '2006-09-16',
    'en',
    9780439785969
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Harry Potter and the Order of the Phoenix (Harry Potter  #5)',
    'J.K. Rowling/Mary GrandPr�',
    '000.000',
    'Scholastic Inc.',
    'Placeholder',
    '2004-09-01',
    'en',
    9780439358071
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Harry Potter and the Chamber of Secrets (Harry Potter  #2)',
    'J.K. Rowling',
    '000.000',
    'Scholastic',
    'Placeholder',
    '2003-11-01',
    'en',
    9780439554893
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Harry Potter and the Prisoner of Azkaban (Harry Potter  #3)',
    'J.K. Rowling/Mary GrandPr�',
    '000.000',
    'Scholastic Inc.',
    'Placeholder',
    '2004-05-01',
    'en',
    9780439655484
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Harry Potter Boxed Set  Books 1-5 (Harry Potter  #1-5)',
    'J.K. Rowling/Mary GrandPr�',
    '000.000',
    'Scholastic',
    'Placeholder',
    '2004-09-13',
    'en',
    9780439682589
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Unauthorized Harry Potter Book Seven News: "Half-Blood Prince" Analysis and Speculation',
    'W. Frederick Zimmerman',
    '000.000',
    'Nimble Books',
    'Placeholder',
    '2005-04-26',
    'en',
    9780976540601
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Harry Potter Collection (Harry Potter  #1-6)',
    'J.K. Rowling',
    '000.000',
    'Scholastic',
    'Placeholder',
    '2005-09-12',
    'en',
    9780439827607
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Ultimate Hitchhiker''s Guide: Five Complete Novels and One Story (Hitchhiker''s Guide to the Galaxy  #1-5)',
    'Douglas Adams',
    '000.000',
    'Gramercy Books',
    'Placeholder',
    '2005-11-01',
    'en',
    9780517226957
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Ultimate Hitchhiker''s Guide to the Galaxy (Hitchhiker''s Guide to the Galaxy  #1-5)',
    'Douglas Adams',
    '000.000',
    'Del Rey Books',
    'Placeholder',
    '2002-04-30',
    'en',
    9780345453747
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Hitchhiker''s Guide to the Galaxy (Hitchhiker''s Guide to the Galaxy  #1)',
    'Douglas Adams',
    '000.000',
    'Crown',
    'Placeholder',
    '2004-08-03',
    'en',
    9781400052929
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Hitchhiker''s Guide to the Galaxy (Hitchhiker''s Guide to the Galaxy  #1)',
    'Douglas Adams/Stephen Fry',
    '000.000',
    'Random House Audio',
    'Placeholder',
    '2005-03-23',
    'en',
    9780739322208
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Ultimate Hitchhiker''s Guide (Hitchhiker''s Guide to the Galaxy  #1-5)',
    'Douglas Adams',
    '000.000',
    'Wings Books',
    'Placeholder',
    '1996-01-17',
    'en',
    9780517149256
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'A Short History of Nearly Everything',
    'Bill Bryson',
    '000.000',
    'Broadway Books',
    'Placeholder',
    '2004-09-14',
    'en',
    9780767908184
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Bill Bryson''s African Diary',
    'Bill Bryson',
    '000.000',
    'Broadway Books',
    'Placeholder',
    '2002-12-03',
    'en',
    9780767915069
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Bryson''s Dictionary of Troublesome Words: A Writer''s Guide to Getting It Right',
    'Bill Bryson',
    '000.000',
    'Broadway Books',
    'Placeholder',
    '2004-09-14',
    'en',
    9780767910439
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'In a Sunburned Country',
    'Bill Bryson',
    '000.000',
    'Broadway Books',
    'Placeholder',
    '2001-05-15',
    'en',
    9780767903868
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'I''m a Stranger Here Myself: Notes on Returning to America After Twenty Years Away',
    'Bill Bryson',
    '000.000',
    'Broadway Books',
    'Placeholder',
    '2000-06-28',
    'en',
    9780767903820
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Lost Continent: Travels in Small Town America',
    'Bill Bryson',
    '000.000',
    'William Morrow Paperbacks',
    'Placeholder',
    '1990-08-28',
    'en',
    9780060920081
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Neither Here nor There: Travels in Europe',
    'Bill Bryson',
    '000.000',
    'William Morrow Paperbacks',
    'Placeholder',
    '1993-03-28',
    'en',
    9780380713806
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Notes from a Small Island',
    'Bill Bryson',
    '000.000',
    'William Morrow Paperbacks',
    'Placeholder',
    '1997-05-28',
    'en',
    9780380727506
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Mother Tongue: English and How It Got That Way',
    'Bill Bryson',
    '000.000',
    'William Morrow Paperbacks',
    'Placeholder',
    '1991-09-28',
    'en',
    9780380715435
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings',
    'J.R.R. Tolkien',
    '000.000',
    'Ballantine Books',
    'Placeholder',
    '2012-09-25',
    'en',
    9780345538376
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Lord of the Rings (The Lord of the Rings  #1-3)',
    'J.R.R. Tolkien',
    '000.000',
    'Houghton Mifflin Harcourt',
    'Placeholder',
    '2004-10-21',
    'en',
    9780618517657
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Fellowship of the Ring (The Lord of the Rings  #1)',
    'J.R.R. Tolkien',
    '000.000',
    'Houghton Mifflin Harcourt',
    'Placeholder',
    '2003-09-05',
    'en',
    9780618346257
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Lord of the Rings (The Lord of the Rings  #1-3)',
    'J.R.R. Tolkien/Alan  Lee',
    '000.000',
    'Houghton Mifflin Harcourt',
    'Placeholder',
    '2002-10-01',
    'en',
    9780618260584
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Lord of the Rings: Weapons and Warfare',
    'Chris   Smith/Christopher  Lee/Richard Taylor',
    '000.000',
    'Houghton Mifflin Harcourt',
    'Placeholder',
    '2003-11-05',
    'en',
    9780618391004
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Lord of the Rings: Complete Visual Companion',
    'Jude Fisher',
    '000.000',
    'Houghton Mifflin Harcourt',
    'Placeholder',
    '2004-11-15',
    'en',
    9780618510825
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Agile Web Development with Rails: A Pragmatic Guide',
    'Dave Thomas/David Heinemeier Hansson/Leon Breedt/Mike Clark/Thomas  Fuchs/Andreas  Schwarz',
    '000.000',
    'Pragmatic Bookshelf',
    'Placeholder',
    '2005-07-28',
    'en',
    9780976694007
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Hatchet (Brian''s Saga  #1)',
    'Gary Paulsen',
    '000.000',
    'Atheneum Books for Young Readers: Richard Jackson Books',
    'Placeholder',
    '2000-04-01',
    'en',
    9780689840920
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Hatchet: A Guide for Using "Hatchet" in the Classroom',
    'Donna Ickes/Edward Sciranko/Keith Vasconcelles',
    '000.000',
    'Teacher Created Resources',
    'Placeholder',
    '1994-08-28',
    'en',
    9781557344496
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Guts: The True Stories behind Hatchet and the Brian Books',
    'Gary Paulsen',
    '000.000',
    'Delacorte Press',
    'Placeholder',
    '2001-01-23',
    'en',
    9780385326506
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Molly Hatchet - 5 of the Best',
    'Molly Hatchet',
    '000.000',
    'Cherry Lane Music Company',
    'Placeholder',
    '2003-06-10',
    'en',
    9781575606248
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Hatchet Jobs: Writings on Contemporary Fiction',
    'Dale Peck',
    '000.000',
    'The New Press',
    'Placeholder',
    '2005-11-01',
    'en',
    9781595580276
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'A Changeling for All Seasons (Changeling Seasons #1)',
    'Angela Knight/Sahara Kelly/Judy Mays/Marteeka Karland/Kate Douglas/Shelby Morgen/Lacey Savage/Kate Hill/Willa Okati',
    '000.000',
    'Changeling Press',
    'Placeholder',
    '2005-11-01',
    'en',
    9781595962805
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Changeling (Changeling  #1)',
    'Delia Sherman',
    '000.000',
    'Viking Juvenile',
    'Placeholder',
    '2006-08-17',
    'en',
    9780670059676
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Changeling Sea',
    'Patricia A. McKillip',
    '000.000',
    'Firebird',
    'Placeholder',
    '2003-04-14',
    'en',
    9780141312620
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Changeling',
    'Zilpha Keatley Snyder',
    '000.000',
    'iUniverse',
    'Placeholder',
    '2004-06-08',
    'en',
    9780595321803
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Changeling',
    'Kate Horsley',
    '000.000',
    'Shambhala',
    'Placeholder',
    '2005-04-12',
    'en',
    9781590301944
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Changeling (Daughters of England  #15)',
    'Philippa Carr',
    '000.000',
    'Ivy Books',
    'Placeholder',
    '1990-08-28',
    'en',
    9780449146972
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Known World',
    'Edward P. Jones',
    '000.000',
    'Amistad',
    'Placeholder',
    '2006-08-29',
    'en',
    9780061159176
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Known World',
    'Edward P. Jones/Kevin R. Free',
    '000.000',
    'HarperAudio',
    'Placeholder',
    '2004-06-15',
    'en',
    9780060762735
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Known World',
    'Edward P. Jones',
    '000.000',
    'Harper',
    'Placeholder',
    '2004-06-15',
    'en',
    9780060749910
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Traders  Guns & Money: Knowns and Unknowns in the Dazzling World of Derivatives',
    'Satyajit Das',
    '000.000',
    'FT Press',
    'Placeholder',
    '2006-05-15',
    'en',
    9780273704744
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Artesia: Adventures in the Known World',
    'Mark Smylie',
    '000.000',
    'Archaia',
    'Placeholder',
    '2005-12-14',
    'en',
    9781932386103
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The John McPhee Reader (John McPhee Reader  #1)',
    'John McPhee/William Howarth',
    '000.000',
    'Farrar  Straus and Giroux',
    'Placeholder',
    '1982-06-01',
    'en',
    9780374517199
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Uncommon Carriers',
    'John McPhee',
    '000.000',
    'Farrar Straus Giroux',
    'Placeholder',
    '2006-05-16',
    'en',
    9780374280390
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Heirs of General Practice',
    'John McPhee',
    '000.000',
    'Farrar  Straus and Giroux',
    'Placeholder',
    '1986-04-01',
    'en',
    9780374519742
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Control of Nature',
    'John McPhee',
    '000.000',
    'Farrar  Straus and Giroux',
    'Placeholder',
    '1990-09-01',
    'en',
    9780374522599
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Annals of the Former World',
    'John McPhee',
    '000.000',
    'Farrar  Straus and Giroux',
    'Placeholder',
    '1999-01-06',
    'en',
    9780374518738
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Coming Into the Country',
    'John McPhee',
    '000.000',
    'Farrar  Straus and Giroux',
    'Placeholder',
    '1991-04-01',
    'en',
    9780374522872
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'La Place de la Concorde Suisse',
    'John McPhee',
    '000.000',
    'Farrar  Straus and Giroux',
    'Placeholder',
    '1994-04-01',
    'en',
    9780374519322
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Giving Good Weight',
    'John McPhee',
    '000.000',
    'Farrar  Straus and Giroux',
    'Placeholder',
    '1994-04-01',
    'en',
    9780374516000
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Rising from the Plains',
    'John McPhee',
    '000.000',
    'Farrar  Straus and Giroux',
    'Placeholder',
    '1987-11-01',
    'en',
    9780374520656
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Heidi Chronicles',
    'Wendy Wasserstein',
    '000.000',
    'Dramatists Play Service',
    'Placeholder',
    '2002-03-01',
    'en',
    9780822205104
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Heidi Chronicles: Uncommon Women and Others & Isn''t It Romantic',
    'Wendy Wasserstein',
    '000.000',
    'Vintage',
    'Placeholder',
    '1991-07-02',
    'en',
    9780679734994
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Active Literacy Across the Curriculum: Strategies for Reading  Writing  Speaking  and Listening',
    'Heidi Hayes Jacobs',
    '000.000',
    'Routledge',
    'Placeholder',
    '2006-03-29',
    'en',
    9781596670235
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Simply Beautiful Beaded Jewelry',
    'Heidi Boyd',
    '000.000',
    'North Light Books',
    'Placeholder',
    '2006-03-14',
    'en',
    9781581807745
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Always Enough: God''s Miraculous Provision Among the Poorest Children on Earth',
    'Heidi Baker/Rolland Baker',
    '000.000',
    'Chosen Books',
    'Placeholder',
    '2003-09-01',
    'en',
    9780800793616
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Mapping the Big Picture: Integrating Curriculum & Assessment K-12',
    'Heidi Hayes Jacobs',
    '000.000',
    'Association for Supervision & Curriculum Development',
    'Placeholder',
    '1997-01-28',
    'en',
    9780871202864
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Heidi (Heidi  #1-2)',
    'Johanna Spyri/Beverly Cleary/Angelo  Rinaldi',
    '000.000',
    'Kingfisher',
    'Placeholder',
    '2002-11-15',
    'en',
    9780753454947
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Getting Results with Curriculum Mapping',
    'Heidi Hayes Jacobs',
    '000.000',
    'ASCD',
    'Placeholder',
    '2004-11-15',
    'en',
    9780871209993
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'There''s Always Enough: The Miraculous Move of God in Mozambique',
    'Rolland Baker/Heidi Baker',
    '000.000',
    'Sovereign World',
    'Placeholder',
    '2003-04-28',
    'en',
    9781852402877
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'What to Expect the First Year (What to Expect)',
    'Heidi Murkoff/Sharon Mazel/Arlene Eisenberg/Sandee Hathaway/Mark D. Widome',
    '000.000',
    'Workman Publishing Company',
    'Placeholder',
    '2003-10-16',
    'en',
    9780761129585
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Player''s Handbook: The Ultimate Guide on Dating and Relationships',
    'Heidi Fleiss/Libby Keatinge',
    '000.000',
    'One Hour Entertainment',
    'Placeholder',
    '2004-05-10',
    'en',
    9780972016414
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Simply Beautiful Beading: 53 Quick and Easy Projects',
    'Heidi Boyd',
    '000.000',
    'North Light Books',
    'Placeholder',
    '2004-08-19',
    'en',
    9781581805635
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'God Emperor of Dune (Dune Chronicles  #4)',
    'Frank Herbert',
    '000.000',
    'Ace Books',
    'Placeholder',
    '1987-06-15',
    'en',
    9780441294671
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Chapterhouse: Dune (Dune Chronicles #6)',
    'Frank Herbert',
    '000.000',
    'Ace Books',
    'Placeholder',
    '1987-07-01',
    'en',
    9780441102679
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Dune Messiah (Dune Chronicles #2)',
    'Frank Herbert',
    '000.000',
    'Ace Books',
    'Placeholder',
    '1987-07-15',
    'en',
    9780441172696
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Dreamer of Dune: The Biography of Frank Herbert',
    'Brian Herbert',
    '000.000',
    'Tor Books',
    'Placeholder',
    '2004-07-01',
    'en',
    9780765306470
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Heretics of Dune (Dune Chronicles  #5)',
    'Frank Herbert',
    '000.000',
    'Putnam',
    'Placeholder',
    '1984-04-16',
    'en',
    9780399128981
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Road to Dune',
    'Frank Herbert/Brian Herbert/Kevin J. Anderson',
    '000.000',
    'Tor Science Fiction',
    'Placeholder',
    '2006-08-29',
    'en',
    9780765353702
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Heretics of Dune (Dune Chronicles #5)',
    'Frank Herbert',
    '000.000',
    'Ace Books',
    'Placeholder',
    '1987-08-15',
    'en',
    9780441328000
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Lord of the Rings: The Art of the Fellowship of the Ring',
    'Gary Russell',
    '000.000',
    'Houghton Mifflin Harcourt',
    'Placeholder',
    '2002-06-12',
    'en',
    9780618212903
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Power of One (The Power of One  #1)',
    'Bryce Courtenay',
    '000.000',
    'Ballantine Books',
    'Placeholder',
    '1996-09-29',
    'en',
    9780345410054
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Power of One (The Power of One  #1)',
    'Bryce Courtenay',
    '000.000',
    'Delacorte Books for Young Readers',
    'Placeholder',
    '2005-09-13',
    'en',
    9780385732543
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Power of One: One Person  One Rule  One Month',
    'John C. Maxwell/Stephen R. Graves/Thomas G. Addington',
    '000.000',
    'Thomas Nelson',
    'Placeholder',
    '2004-11-01',
    'en',
    9780785260059
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Power of an Hour: Business and Life Mastery in One Hour a Week',
    'Dave Lakhani',
    '000.000',
    'Wiley',
    'Placeholder',
    '2006-05-19',
    'en',
    9780471780939
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Power of One: The Solo Play for Playwrights  Actors  and Directors',
    'Louis E. Catron',
    '000.000',
    'Heinemann Drama',
    'Placeholder',
    '2000-02-07',
    'en',
    9780325001531
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'How to Buy  Sell & Profit on eBay: Kick-Start Your Home-Based Business in Just Thirty Days',
    'Adam Ginsberg',
    '000.000',
    'William Morrow Paperbacks',
    'Placeholder',
    '2005-05-03',
    'en',
    9780060762872
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'eBay for Dummies',
    'Marsha Collier',
    '000.000',
    'Wiley',
    'Placeholder',
    '2006-10-30',
    'en',
    9780470045299
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'What to Sell on ebay and Where to Get It: The Definitive Guide to Product Sourcing for eBay and Beyond',
    'Chris Malta/Lisa Suttora',
    '000.000',
    'McGraw-Hill',
    'Placeholder',
    '2006-01-24',
    'en',
    9780072262780
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Starting an eBay Business for Dummies',
    'Marsha Collier',
    '000.000',
    'Wiley',
    'Placeholder',
    '2004-09-17',
    'en',
    9780764569241
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'eBay: Top 100 Simplified Tips & Tricks',
    'Julia Wilkinson',
    '000.000',
    'Wiley',
    'Placeholder',
    '2006-06-06',
    'en',
    9780471933823
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'ebay Timesaving Techniques for Dummies',
    'Marsha Collier',
    '000.000',
    'Wiley',
    'Placeholder',
    '2004-05-31',
    'en',
    9780764559914
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'eBay Business All-in-One Desk Reference for Dummies',
    'Marsha Collier',
    '000.000',
    'Wiley',
    'Placeholder',
    '2005-04-25',
    'en',
    9780764584381
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Ruby Cookbook',
    'Lucas Carlson/Leonard Richardson',
    '000.000',
    'OReilly Media',
    'Placeholder',
    '2006-07-29',
    'en',
    9780596523695
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Ruby Ann''s Down Home Trailer Park Cookbook',
    'Ruby Ann Boxcar',
    '000.000',
    'Citadel',
    'Placeholder',
    '2005-05-03',
    'en',
    9780806523491
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Ruby Ann''s Down Home Trailer Park BBQin'' Cookbook',
    'Ruby Ann Boxcar',
    '000.000',
    'Citadel',
    'Placeholder',
    '2005-05-03',
    'en',
    9780806525365
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Rails Cookbook: Recipes for Rapid Web Development with Ruby',
    'Rob Orsini',
    '000.000',
    'OReilly Media',
    'Placeholder',
    '2007-01-01',
    'en',
    9780596527310
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Anna Karenina',
    'Leo Tolstoy/Richard Pevear/Larissa Volokhonsky',
    '000.000',
    'Penguin Classics',
    'Placeholder',
    '2004-05-31',
    'en',
    9780143035008
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Anna Karenina',
    'Leo Tolstoy/David Magarshack/Priscilla Meyer',
    '000.000',
    'Signet',
    'Placeholder',
    '2002-11-05',
    'en',
    9780451528612
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Anna Karenina',
    'Leo Tolstoy/Richard Pevear/Larissa Volokhonsky/John Bayley',
    '000.000',
    'Penguin Books',
    'Placeholder',
    '2003-01-30',
    'en',
    9780140449174
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'CliffsNotes on Tolstoy''s Anna Karenina',
    'Marianne Sturman/Leo Tolstoy',
    '000.000',
    'Cliffs Notes',
    'Placeholder',
    '1965-11-26',
    'en',
    9780822001836
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Anna Karenina',
    'Leo Tolstoy/Amy Mandelker/Constance Garnett',
    '000.000',
    'Barnes & Noble Classics',
    'Placeholder',
    '2003-07-01',
    'en',
    9781593080273
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Anna Karenina',
    'Leo Tolstoy/Louise Maude/Aylmer Maude',
    '000.000',
    'Dover Publications',
    'Placeholder',
    '2004-11-23',
    'en',
    9780486437965
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Anna Karenina',
    'Leo Tolstoy/Constance Garnett/Amy Mandelker',
    '000.000',
    'Barnes & Noble',
    'Placeholder',
    '2004-08-26',
    'en',
    9781593081775
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Dinner with Anna Karenina',
    'Gloria Goldreich',
    '000.000',
    'Mira Books',
    'Placeholder',
    '2006-01-28',
    'en',
    9780778322276
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Tolstoy: Anna Karenina',
    'Anthony Thorlby',
    '000.000',
    'Cambridge University Press',
    'Placeholder',
    '1987-11-26',
    'en',
    9780521313254
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Untouchable',
    'Mulk Raj Anand/E.M. Forster',
    '000.000',
    'Penguin Books',
    'Placeholder',
    '1990-07-03',
    'en',
    9780140183955
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Untouchable',
    'John Banville',
    '000.000',
    'Vintage',
    'Placeholder',
    '1998-06-30',
    'en',
    9780679767473
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Untouchables',
    'Eliot Ness/Oscar Fraley',
    '000.000',
    'Buccaneer Books',
    'Placeholder',
    '1996-02-01',
    'en',
    9781568491981
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Untouchables: My Family''s Triumphant Journey Out of the Caste System in Modern India',
    'Narendra Jadhav',
    '000.000',
    'Scribner',
    'Placeholder',
    '2005-09-27',
    'en',
    9780743270793
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Dalit: The Black Untaouchables of India',
    'V.T. Rajshekar/Y.N. Kly',
    '000.000',
    'Clarity Press',
    'Placeholder',
    '1995-01-28',
    'en',
    9780932863058
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Growing Up Untouchable in India: A Dalit Autobiography',
    'Vasant Moon/Gail Omvedt/Eleanor Zelliot',
    '000.000',
    'Rowman & Littlefield Publishers',
    'Placeholder',
    '2000-12-20',
    'en',
    9780742508804
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Evidence-Based Social Work Skills Book',
    'Barry R. Cournoyer',
    '000.000',
    'Pearson',
    'Placeholder',
    '2003-09-22',
    'en',
    9780205358625
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'A Wrinkle in Time: A Guide for Using "A Wrinkle in Time" in the Classroom',
    'John Carratello/Patty Carratello/Theresa Wright',
    '000.000',
    'Teacher Created Resources',
    'Placeholder',
    '1991-09-28',
    'en',
    9781557344038
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Wrinkles in Time',
    'George Smoot/Keay Davidson',
    '000.000',
    'Harper Perennial',
    'Placeholder',
    '1994-10-01',
    'en',
    9780380720446
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'A Wrinkle in Time: With Related Readings (A Wrinkle in Time Quintet #1)',
    'Madeleine L''Engle',
    '000.000',
    'EMC/Paradigm Publishing',
    'Placeholder',
    '2002-05-01',
    'en',
    9780821925324
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Literature Circle Guide: A Wrinkle in Time',
    'Tara MacCarthy',
    '000.000',
    'Teaching Resources',
    'Placeholder',
    '2002-01-01',
    'en',
    9780439271691
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Una arruga en el tiempo � A Wrinkle in Time',
    'Madeleine L''Engle',
    '000.000',
    'Turtleback Books',
    'Placeholder',
    '1984-06-01',
    'en',
    9780606105262
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Long Shadow (The Morland Dynasty  #6)',
    'Cynthia Harrod-Eagles',
    '000.000',
    'Little  Brown Book Group',
    'Placeholder',
    '1994-06-01',
    'en',
    9780751506433
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'A Long Shadow (Inspector Ian Rutledge  #8)',
    'Charles Todd',
    '000.000',
    'William Morrow',
    'Placeholder',
    '2006-01-03',
    'en',
    9780060786717
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Long Way Round: Chasing Shadows Across the World',
    'Ewan McGregor/Charley Boorman/Robert Uhlig',
    '000.000',
    'Atria Books',
    'Placeholder',
    '2005-11-01',
    'en',
    9780743499347
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'A Shadow in Summer (Long Price Quartet  #1)',
    'Daniel Abraham',
    '000.000',
    'Tor Books',
    'Placeholder',
    '2006-03-07',
    'en',
    9780765313409
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'New Hope for the Dead (Hoke Mosely #2)',
    'Charles Willeford/James Lee Burke',
    '000.000',
    'Vintage Crime/Black Lizard',
    'Placeholder',
    '2004-08-10',
    'en',
    9781400032495
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Sideswipe: A Hoke Moseley Novel',
    'Charles Willeford/Lawrence Block',
    '000.000',
    'Vintage Crime/Black Lizard',
    'Placeholder',
    '2005-03-08',
    'en',
    9781400032488
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Miami Blues (Hoke Moseley #1)',
    'Charles Willeford/Elmore Leonard',
    '000.000',
    'Vintage Crime/Black Lizard',
    'Placeholder',
    '2004-08-10',
    'en',
    9781400032464
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Burnt Orange Heresy (Vintage Crime/Black Lizard)',
    'Charles Willeford',
    '000.000',
    'Vintage',
    'Placeholder',
    '1990-10-03',
    'en',
    9780679732525
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'I am Charlotte Simmons',
    'Tom Wolfe',
    '000.000',
    'Picador USA',
    'Placeholder',
    '2005-08-30',
    'en',
    9780312424442
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Poetry for Young People: Edward Lear',
    'Edward Lear/Laura Huliska-Beith/Edward Mendelson',
    '000.000',
    'Sterling',
    'Placeholder',
    '2001-10-01',
    'en',
    9780806930770
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'The Puffin Book of Nonsense Verse',
    'Quentin Blake',
    '000.000',
    'Puffin',
    'Placeholder',
    '1996-10-03',
    'en',
    9780140366600
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Henry Miller on Writing',
    'Henry Miller/Thomas H. Moore',
    '000.000',
    'New Directions Publishing',
    'Placeholder',
    '1964-02-01',
    'en',
    9780811201124
);

INSERT INTO BOOK (title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13)
VALUES (
    'Quiet Days in Clichy',
    'Henry Miller',
    '000.000',
    'Grove Press',
    'Placeholder',
    '1994-01-13',
    'en',
    9780802130167
);

