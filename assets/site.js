(() => {
  const buttons = Array.from(document.querySelectorAll('[data-set-lang]'));
  const sections = Array.from(document.querySelectorAll('[data-lang-content]'));
  function change(lang) {
    const selected = lang === 'en' ? 'en' : 'es';
    document.documentElement.lang = selected;
    sections.forEach(el => { el.hidden = el.dataset.langContent !== selected; });
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setLang === selected)));
    const title = document.querySelector(`[data-title-${selected}]`);
    if(title) document.title = title.getAttribute(`data-title-${selected}`);
    try { localStorage.setItem('streamzio_site_language', selected); } catch (_) {}
  }
  buttons.forEach(button => button.addEventListener('click', () => change(button.dataset.setLang)));
  let saved = 'es';
  try { saved = localStorage.getItem('streamzio_site_language') || 'es'; } catch (_) {}
  change(saved);
})();
