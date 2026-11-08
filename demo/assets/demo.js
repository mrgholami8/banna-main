// Replay button and copy buttons for the banna demo.
const replay = document.getElementById('replay')
if (window.Banna && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  replay.addEventListener('click', () => {
    scrollTo({ top: 0, behavior: 'instant' })
    Banna.start()
  })
} else {
  replay.hidden = true
}

document.querySelectorAll('.copy').forEach((button) => {
  const label = button.textContent
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.previousElementSibling.textContent.trim())
      button.textContent = button.dataset.done
    } catch {
      button.textContent = button.dataset.fail
    }
    setTimeout(() => (button.textContent = label), 1600)
  })
})
