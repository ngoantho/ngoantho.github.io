from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, FileModifiedEvent
from time import sleep
from subprocess import run


class Handler(FileSystemEventHandler):
    def on_modified(self, event):
        if not isinstance(event, FileModifiedEvent):
            return
        if not event.src_path == ".\\portfolio.odp":
            return

        print("Converting portfolio.odp to portfolio.pdf")
        try:
            run(["soffice.exe", "--headless", "--convert-to", "pdf", "portfolio.odp"])
        except Exception as e:
            print(f"Error: {e}")
        print("Conversion complete")


observer = Observer()
observer.schedule(Handler(), path=".", recursive=False)
observer.start()

try:
    while True:
        sleep(1)
except KeyboardInterrupt:
    observer.stop()
    observer.join()
