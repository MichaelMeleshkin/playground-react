import { CETimerService } from './CETimerService'
import { logger } from '../../../../shared/services'

export class CETimerRangeClass extends HTMLInputElement {
    private timerService!: CETimerService

    constructor() {
        super()
        console.log(this.getShadowRootElement())
        this.timerService = new CETimerService(this.getShadowRootElement())
    }

    connectedCallback() {
        const changeEvent = this.onchange
        this.onchange = (...params) => {
            changeEvent?.call(this, ...params)
            this.onChange()
        }
        this.restartTimer()
    }

    disconnectedCallback() {
        this.timerService.clearTimeout()
        this.timerService.clearInterval()
    }

    static get observedAttributes() {
        return []
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        console.log(name, newValue)
    }

    adoptedCallback() {}

    restartTimer() {
        const total = parseInt(this.value)
        const countMessage = this.getAttribute('data-count-message') ?? ''
        const finalMessage = this.getAttribute('data-final-message') ?? ''

        this.timerService.restartTimer(total, countMessage, finalMessage)
    }

    getShadowRootElement(): Element | null {
        const id = this.getAttribute('id')
        const element = id && document.querySelector(`[data-test=${id}]`)
        return element || logger.warn('No element found') || null
    }

    onChange() {
        this.restartTimer()
    }
}
