# Running the Server

- Using Python 3.8.9 (Just make sure it's not Python 2)

1. Install the dependencies.
    - `pip3 install mysql-connector-python`
    - `pip3 install fastapi`
    - `pip3 install "uvicorn[standard]`
    - `pip3 install python-multipart`

2. `cd` to the `server` directory

3. Start the server
    - `uvicorn main:app --reload`

4. Use `Ctrl+C` to stop the server.