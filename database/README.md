# Running The Database

1. Install MariaDB
2. Run the MariaDB Service (platform dependent, Google for instructions)
    - May not even be necessary, but it was necessary for macOS, at least
3. Run `mysql`
    - You should see a screen like this:
```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 13
Server version: 10.6.4-MariaDB Homebrew

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```
4. Let's create the user that's used by the back end because for some reason, the root user doesn't work (don't forget semicolons)
    - `CREATE USER 'test'@'localhost' IDENTIFIED BY 'test';`
    - `GRANT ALL PRIVILEGES ON *.* TO 'test'@'localhost';`
    - `FLUSH PRIVILEGES;`

5. Construct and Populate our LIBRARY database
    - `source /path/to/LibraryDB-Project/database/construction.sql`
    - `source /path/to/LibraryDB-Project/database/populate.sql`

6. You may now `exit`... or leave it on if it makes you feel better.