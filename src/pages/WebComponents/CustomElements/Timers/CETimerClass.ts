import { CETimerService } from './CETimerService'

export class CETimerClass extends HTMLElement {
    private timerService!: CETimerService

    constructor() {
        super()
        this.timerService = new CETimerService(this)
    }

    connectedCallback() {
        this.restartTimer()
    }

    disconnectedCallback() {
        this.timerService.clearTimeout()
        this.timerService.clearInterval()
    }

    static get observedAttributes() {
        return ['data-reset']
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        if (parseInt(newValue) > 0) {
            this.restartTimer()
        }
    }

    adoptedCallback() {}

    restartTimer() {
        const h = this.getAttribute('data-hours')
        const m = this.getAttribute('data-minutes')
        const s = this.getAttribute('data-seconds')

        const hours = h ? parseInt(h) : 0
        const minutes = m ? parseInt(m) : 0
        const seconds = s ? parseInt(s) : 0
        const countMessage = this.getAttribute('data-count-message') ?? ''
        const finalMessage = this.getAttribute('data-final-message') ?? ''

        const total = hours * 60 * 60 + minutes * 60 + seconds

        this.timerService.restartTimer(total, countMessage, finalMessage)
    }
}
