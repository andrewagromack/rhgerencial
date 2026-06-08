// RH Gerencial — navegación compartida (header sticky + menú móvil)
(function () {
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  var ham = document.getElementById('hamburger');
  var links = document.getElementById('nav-links');
  if (ham && links) {
    ham.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      ham.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); ham.setAttribute('aria-expanded', 'false'); }
    });
  }
})();
