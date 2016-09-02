function addCss(element, css) {
  const doc = element.ownerDocument
  const cssTxt = doc.createTextNode(css)
  const style = doc.createElement('style')

  style.type = 'text/css'
  style.appendChild(cssTxt)

  element.appendChild(style)
  return style
}

function removeElem(element) {
  if (element) {
    const parent = element.parentElement
    if (parent) {
      parent.removeChild(this._styles)
    }
  }
}

export default {
  addCss,
  removeElem,
}
