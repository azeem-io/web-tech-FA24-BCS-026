# Midterm

Name: Azeem Sarwar

Roll number: FA24-BCS-026

N = 26

BP = 626px

H = 182 degrees

Accent colour: hsl(182, 70%, 45%)

K = 5

Baseline commit: 8db7cec (`midterm: baseline copy`).
Reference site: GOG, https://www.gog.com/en/.

## Task 1

Added Shop by Category to the existing navbar on both pages. At 626px and wider, hover or keyboard focus opens a five-column panel above the page, without moving the content.
Below 626px, a details element opens the mobile menu and five separate details elements provide independent category accordions. No JavaScript is used.

Changed files:
- index.html: desktop and mobile navigation; product IDs for category links.
- product.html: the same navigation.
- styles.css: dropdown positioning, focus and hover rules, five-column grid and mobile breakpoint.
- README.md: personal numbers and task notes.
- screenshots/task1-375.png, screenshots/task1-626.png and screenshots/task1-1280.png: browser evidence for the final PDF.

Checked at 375px, 626px and 1280px. Tab opens the desktop menu, leaving focus closes it, hovering into the panel keeps it open, and the mobile groups open independently.

## Task 2

Added checkout.html and linked it from the cart icon on all pages. The Contact and Delivery fieldsets use CSS Grid side by side from 626px, with labels on the left, and stack below that width.
HTML required, email, pattern, min and max attributes handle validation. CSS :user-invalid shows red borders and messages after interaction, without JavaScript.

Exam date: 29 October 2026. Delivery is allowed from 2026-10-29 through 2026-11-24, inclusive (26 days later).

Changed files:
- checkout.html: the two fieldsets, labels, required controls and full-width submit button.
- index.html and product.html: cart links to checkout.
- styles.css: form layout, accent colour and validation feedback.
- README.md: Task 2 notes.
- screenshots/midterm-task2-375.png, screenshots/midterm-task2-626.png and screenshots/midterm-task2-1280.png: checkout screenshots.

Checked at 375px, 626px and 1280px with no horizontal overflow. Invalid phone and email values are rejected; the date limits are inclusive. Errors stay hidden on first load, appear after editing an invalid field, and disappear when corrected.

## Task 3

Added a plain JavaScript cart on the listing page. Each click reads the name and price from the existing card and adds one item to an array; the badge counts all copies.
Clicking the cart icon toggles the mini cart, with a Checkout link to Task 2. Remove updates the list and total, calculated with reduce(). Each game is limited to (26 mod 4) + 2 = 4 copies, then its button is disabled until a copy is removed.

Changed files:
- index.html: badge, mini-cart markup and script link.
- script.js: adding, removing, counting, totals and button limits.
- styles.css: badge, mini-cart panel, disabled buttons and a sticky header so the cart stays visible while scrolling.
- README.md: Task 3 notes and checks.
- screenshots/task3-375.png, screenshots/task3-626.png and screenshots/task3-1280.png: cart after adding two games.

Checked adding all eight games, the four-copy limit, removing and re-enabling, empty-cart total, and opening/closing the panel. The panel fits at 375px, 626px and 1280px without horizontal overflow. The cart lives in memory on the listing page and resets when the page reloads.

## Submission PDF

FA24-BCS-026-midterm.pdf contains the name and roll number, screenshots of all three tasks at 375px, 626px and 1280px, followed by the added or changed code as selectable text under each task heading.

## AI tools used

OpenAI Codex (ChatGPT).
