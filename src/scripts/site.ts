// Page behaviour: FutureLink notice, mobile menu, catalog row ↔ drawing node. Content works without it.

// 1. FutureLink → shared notice with a real call button. Esc and the cross close it; focus goes back.
const notice = document.querySelector<HTMLElement>("[data-notice]");
const noticeText = document.querySelector<HTMLElement>("[data-notice-text]");
const noticeClose = document.querySelector<HTMLButtonElement>("[data-notice-close]");
let opener: HTMLElement | null = null;
let hideTimer = 0;

function openNotice(trigger: HTMLElement) {
  if (!notice || !noticeText) return;
  window.clearTimeout(hideTimer);
  opener = trigger;
  noticeText.textContent = trigger.dataset.message || "Розділ у розробці";
  notice.hidden = false;
  requestAnimationFrame(() => notice.classList.add("is-open"));
  noticeClose?.focus({ preventScroll: true });
}

function closeNotice() {
  if (!notice || notice.hidden) return;
  notice.classList.remove("is-open");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  hideTimer = window.setTimeout(() => { notice.hidden = true; }, reduce ? 0 : 140);
  opener?.focus({ preventScroll: true });
  opener = null;
}

document.addEventListener("click", (e) => {
  const t = (e.target as HTMLElement).closest<HTMLElement>(".future-link");
  if (t) { e.preventDefault(); openNotice(t); }
});
document.addEventListener("keydown", (e) => {
  const t = (e.target as HTMLElement).closest?.<HTMLElement>(".future-link");
  if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openNotice(t); return; }
  if (e.key === "Escape") {
    closeNotice();
    const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
    if (menu?.open) { menu.open = false; menu.querySelector("summary")?.focus(); }
  }
});
noticeClose?.addEventListener("click", closeNotice);

// 2. Mobile menu (<details>): closes after an anchor is chosen or on a tap outside.
const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
menu?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) menu.open = false;
});
document.addEventListener("click", (e) => {
  if (menu?.open && !menu.contains(e.target as Node)) menu.open = false;
});
window.matchMedia("(min-width: 1024px)").addEventListener("change", (m) => { if (m.matches && menu) menu.open = false; });

// 3. Catalog: hover or focus on a group lights its node on the car drawing.
const car = document.querySelector<HTMLElement>("[data-car]");
if (car) {
  const set = (n: string | null) => {
    car.querySelectorAll(".cd-node.is-on").forEach((el) => el.classList.remove("is-on"));
    if (n) car.querySelector(`.cd-node[data-node="${n}"]`)?.classList.add("is-on");
  };
  document.querySelectorAll<HTMLElement>(".groups__item[data-node]").forEach((row) => {
    const n = row.dataset.node ?? null;
    row.addEventListener("pointerenter", () => set(n));
    row.addEventListener("pointerleave", () => set(null));
    row.addEventListener("focus", () => set(n));
    row.addEventListener("blur", () => set(null));
  });
}
