import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {

  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'formula',
      listeners: ['input', 'click']
    }) 
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log('Formula: onInput', event)
  }

  onClick() {
    console.log('click!')
  }
}