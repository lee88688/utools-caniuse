const iframe = document.getElementById('content');
window.f = iframe;

function debounce(fn, ms) {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => fn(...args), ms);
  }
}

const changeSearch = debounce(({text}) => {
  if (text) {
    iframe.src = `https://caniuse.com/?search=${text}`
  }
}, 500);

utools.onPluginReady(() => {
  utools.setSubInput(changeSearch, '', true);
});

utools.onPluginEnter(() => {
  utools.setSubInput(changeSearch, '', true);
})