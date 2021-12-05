from ssl import ALERT_DESCRIPTION_ACCESS_DENIED
import mysql.connector


def dict_to_json(cursor):
    desc = cursor.description
    column_names = [col[0] for col in desc]
    data = [dict(zip(column_names, row))  
            for row in cursor.fetchall()]
    return data


def student_already_rented(cursor, type: str, account_id: int):
    cursor.execute(f"SELECT rented_{type} FROM STUDENT WHERE account_id={account_id}")
    data = cursor.fetchall()
    if data[0][0] != 0:
        return True

    return False
