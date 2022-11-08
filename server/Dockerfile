FROM python:3.10-alpine
WORKDIR /usr/src/app
COPY ./requirements.txt ./
COPY ./main.py ./
COPY ./models.py ./
COPY ./utils.py ./

RUN apk add build-base libffi-dev

RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]