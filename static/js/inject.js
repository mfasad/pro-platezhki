// Yandex.Metrika — counter 110228642
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
)(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
ym(110228642,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});

// Reference notice and disclaimer link.
(function(){
  function addDisclaimerLink(){
    if(document.querySelector('a[href="/disclaimer.html"]')) return;
    var privacyLink=document.querySelector('.pc-footer-links a[href="/privacy.html"]');
    if(!privacyLink) return;
    var link=document.createElement('a');
    link.href='/disclaimer.html';
    link.textContent='Отказ от ответственности';
    privacyLink.insertAdjacentElement('afterend',link);
  }

  function addArticleNotice(){
    if(!document.body || document.body.getAttribute('data-page-type')!=='article') return;
    if(document.querySelector('.pc-disclaimer-note')) return;
    var heading=document.querySelector('.pc-article-heading h1');
    if(!heading) return;

    var style=document.createElement('style');
    style.textContent='.pc-disclaimer-note{margin:18px 0 0;padding:14px 16px;border:1px solid var(--pc-line,#d8d8cd);border-left:4px solid var(--pc-accent,#d36b3d);border-radius:4px;background:var(--pc-surface,#fffdf8);color:var(--pc-ink-soft,#52605a);font-size:.92rem;line-height:1.55}.pc-disclaimer-note strong{color:var(--pc-ink,#14201c);font-weight:700}.pc-disclaimer-note a{color:inherit;text-decoration:underline;text-underline-offset:3px}@media(max-width:640px){.pc-disclaimer-note{margin-top:14px;padding:12px 14px;font-size:.88rem}}';
    document.head.appendChild(style);

    var note=document.createElement('aside');
    note.className='pc-disclaimer-note';
    note.setAttribute('aria-label','Справочная информация');
    note.innerHTML='<strong>Обратите внимание.</strong> Материал носит справочный характер и не заменяет профессиональную консультацию. Правила, тарифы и порядок действий могут меняться — перед оплатой или другим важным решением проверяйте актуальные сведения в официальных источниках. <a href="/disclaimer.html">Подробнее</a>';
    heading.insertAdjacentElement('afterend',note);
  }

  addDisclaimerLink();
  addArticleNotice();
})();


