import wexpect

child = wexpect.spawn(
    "uvicorn App:app --host 127.0.0.1 --port 8000",
    encoding="utf-8"
)

child.expect("Uvicorn running", timeout=15)
print(child.before)