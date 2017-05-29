class Checkbox {
  constructor(label, toggleHandler){
    this.label = label
    this.toggleHandler = toggleHandler
    this.checked = false
    this.element = document.createElement('div')
    this.element.setAttribute('tabindex', (window.maxTabIndex == undefined ? 0 : window.maxTabIndex + 1))
    window.maxTabIndex = parseInt(this.element.getAttribute('tabindex'))
    this.element.classList.add('cb-checkbox')

    this.checker = document.createElement('div')
    this.checker.classList.add('cb-checker')

    this.element.addEventListener('click', () => {
      this.checked = !this.checked
      this.tick.classList.toggle('cb-checked', this.checked)
      this.checker.classList.toggle('cbr-checked', this.checked)
      this.toggleHandler(this.checked)
    })

    this.tick = document.createElement('div')
    this.tick.classList.add('cb-tick')
    this.checker.appendChild(this.tick)

    this.labelElement = document.createElement('div')
    this.labelElement.innerText = this.label
    this.labelElement.classList.add('cb-label')

    this.element.appendChild(this.checker)
    this.element.appendChild(this.labelElement)
  }

  spawn(parent){
    parent.appendChild(this.element)
  }
}