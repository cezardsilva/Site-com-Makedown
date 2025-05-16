document.querySelector(".copy-btn").addEventListener("click", function () {
  const codeText = document.querySelector("pre code").innerText;
  navigator.clipboard.writeText(codeText).then(() => {
    const copyBtn = document.querySelector(".copy-btn");
    copyBtn.classList.add("copied");

    setTimeout(() => {
      copyBtn.classList.remove("copied");
    }, 1500); // A mensagem some após 1.5 segundos
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });
});
