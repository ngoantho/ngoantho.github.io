from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, FileModifiedEvent
from time import sleep
from subprocess import run


class Handler(FileSystemEventHandler):
    def __init__(self, file: str):
        self.file = file

    def on_modified(self, event):
        if not isinstance(event, FileModifiedEvent):
            return
        if not event.src_path == f".\\{self.file}":
            return

        print(f"Converting {self.file} to PDF")
        try:
            run(["soffice.exe", "--headless", "--convert-to", "pdf", self.file])
        except Exception as e:
            print(f"Error: {e}")
        print("Conversion complete")


handler = Handler(file="portfolio.odp")
observer = Observer()
observer.schedule(handler, path=".", recursive=False)
observer.start()

try:
    while True:
        sleep(1)
except KeyboardInterrupt:
    observer.stop()
    observer.join()
