import '/css/scss/layout.scss'
import '/css/scss/bg-color.scss'
import '/css/scss/event.scss'

function injectDraggableEvent() {
  const draggableEls = document.querySelectorAll(".draggable")
  const dropzoneEls = document.querySelectorAll(".dropzone")

  for (const el of draggableEls) {
    el.addEventListener('dragstart', event => {
      const target = event.target
      target.classList.add('dragging')
    })

    el.addEventListener('dragend', event => {
      const target = event.target
      target.classList.remove('dragging')
    })

  }

  // dropzone element
  for (const el of dropzoneEls) {
    el.addEventListener('dragenter', event => {
      const target = event.target
      target.classList.add('dragover')
    })
    el.addEventListener('dragleave', event => {
      const target = event.target
      target.classList.remove('dragover')
    })
  }

}

injectDraggableEvent()
