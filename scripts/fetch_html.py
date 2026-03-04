from playwright.sync_api import sync_playwright

url = "https://faridsz0605.github.io/portfolio-3d/"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1920, "height": 1080})
    page.goto(url, wait_until="networkidle")

    # Save rendered HTML
    html = page.content()
    with open("/home/faris/Desktop/gemini/3d-portfolio/scripts/rendered_page.html", "w") as f:
        f.write(html)

    # Grab meta/head info
    meta_viewport = page.evaluate("() => document.querySelector('meta[name=\"viewport\"]')?.getAttribute('content')")
    meta_desc = page.evaluate("() => document.querySelector('meta[name=\"description\"]')?.getAttribute('content')")
    meta_og = page.evaluate("() => document.querySelector('meta[property=\"og:title\"]')?.getAttribute('content')")
    title = page.evaluate("() => document.title")
    h1s = page.evaluate("() => [...document.querySelectorAll('h1')].map(h => h.textContent.trim())")
    h2s = page.evaluate("() => [...document.querySelectorAll('h2')].map(h => h.textContent.trim())")
    imgs_without_alt = page.evaluate("() => [...document.querySelectorAll('img:not([alt])')].length")
    imgs_empty_alt = page.evaluate("() => [...document.querySelectorAll('img[alt=\"\"]')].length")
    aria_labels = page.evaluate("() => [...document.querySelectorAll('[aria-label]')].map(e => e.tagName + ': ' + e.getAttribute('aria-label'))")
    nav_elements = page.evaluate("() => [...document.querySelectorAll('nav, [role=\"navigation\"]')].map(e => e.innerHTML.substring(0,200))")
    canvas_elements = page.evaluate("() => document.querySelectorAll('canvas').length")
    skip_links = page.evaluate("() => [...document.querySelectorAll('a[href^=\"#\"]')].slice(0,5).map(a => a.textContent.trim())")
    lang_attr = page.evaluate("() => document.documentElement.getAttribute('lang')")
    buttons = page.evaluate("() => [...document.querySelectorAll('button, [role=\"button\"], a')].slice(0,20).map(e => e.textContent.trim().substring(0,60))")
    schema = page.evaluate("() => [...document.querySelectorAll('script[type=\"application/ld+json\"]')].map(s => s.textContent)")
    canonical = page.evaluate("() => document.querySelector('link[rel=\"canonical\"]')?.getAttribute('href')")
    robots = page.evaluate("() => document.querySelector('meta[name=\"robots\"]')?.getAttribute('content')")

    print("=== PAGE AUDIT DATA ===")
    print(f"Title: {title}")
    print(f"Viewport meta: {meta_viewport}")
    print(f"Meta description: {meta_desc}")
    print(f"OG title: {meta_og}")
    print(f"Canonical: {canonical}")
    print(f"Robots meta: {robots}")
    print(f"Lang attribute: {lang_attr}")
    print(f"H1 tags: {h1s}")
    print(f"H2 tags: {h2s}")
    print(f"Images without alt: {imgs_without_alt}")
    print(f"Images with empty alt: {imgs_empty_alt}")
    print(f"Canvas elements: {canvas_elements}")
    print(f"ARIA labels: {aria_labels}")
    print(f"Skip links: {skip_links}")
    print(f"Schema.org JSON-LD: {schema}")
    print(f"Nav elements (first 200 chars): {nav_elements}")
    print(f"Buttons/links (first 20): {buttons}")

    browser.close()
