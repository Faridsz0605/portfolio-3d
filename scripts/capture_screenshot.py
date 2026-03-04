from playwright.sync_api import sync_playwright


def capture(url, output_path, viewport_width=1920, viewport_height=1080):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": viewport_width, "height": viewport_height})
        page.goto(url, wait_until="networkidle")
        page.screenshot(path=output_path, full_page=False)
        browser.close()


if __name__ == "__main__":
    url = "https://faridsz0605.github.io/portfolio-3d/"

    viewports = [
        ("desktop", 1920, 1080),
        ("laptop", 1366, 768),
        ("tablet", 768, 1024),
        ("mobile", 375, 812),
    ]

    for name, w, h in viewports:
        path = f"/home/faris/Desktop/gemini/3d-portfolio/screenshots/{name}.png"
        print(f"Capturing {name} ({w}x{h}) -> {path}")
        capture(url, path, w, h)
        print(f"  Done: {path}")
