from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher = Fernet(key)

def encrypt(value: str):
    return cipher.encrypt(value.encode()).decode()

def decrypt(value: str):
    return cipher.decrypt(value.encode()).decode()
