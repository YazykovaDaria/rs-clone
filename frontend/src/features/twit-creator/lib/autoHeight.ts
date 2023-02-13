export default function autoHeight() {
  const text = document.getElementById('text') as HTMLInputElement;
  if (text.scrollTop > 0) {
    text.style.height = `${text.scrollHeight}px`;
  }
}
