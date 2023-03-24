export class CETimerService {
    private timeout: NodeJS.Timeout | undefined
    private interval: NodeJS.Timeout | undefined
    private readonly shadowRoot?: ShadowRoot

    constructor(shadowRootElement?: Element | null) {
        this.shadowRoot = shadowRootElement?.attachShadow({ mode: 'open' })
        console.log(this.shadowRoot)
        this.setupShadowRootMessage()
    }

    startTimer(total: number, countMessage: string, finalMessage: string) {
        if (total === 0) {
            this.clearTimeout()
            this.clearInterval()
            this.updateText('Please, set up the timer')
        }

        if (total) {
            const sec = 1000

            this.updateText(this.updateCounterMessage(countMessage, total))
            this.setInterval(() => {
                this.updateText(this.updateCounterMessage(countMessage, --total))
            }, sec)
            this.setTimeout(() => {
                this.clearInterval()
                this.updateText(finalMessage)
            }, total * sec)
        }
    }

    updateCounterMessage(countMessage: string, counter: number) {
        return countMessage.includes('$1') ? countMessage.replace('$1', counter.toString()) : `${countMessage} ${counter}`
    }

    updateText(msg: string) {
        this.updateShadowRootMessage(msg)
    }

    setupShadowRootMessage() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    ::slotted(.slot-bold) {font-weight: bold}
                    .main-msg { color: var(--ce-timer-main-message, black) }
                    .before { color: var(--ce-timer-before, black) }
                    .after { color: var(--ce-timer-after, black) }
                </style>
                
                <slot name="before" class='before'></slot>
                <span id='msg' class='main-msg'></span>
                <slot name="after" class='after'></slot>
            `
        }
    }

    updateShadowRootMessage(msg: string) {
        const container = this.shadowRoot?.querySelector('span#msg')
        container && (container.textContent = msg)
    }

    setTimeout(fn: () => void, sec: number) {
        this.timeout = setTimeout(fn, sec)
    }

    setInterval(fn: () => void, sec: number) {
        this.interval = setInterval(fn, sec)
    }

    clearTimeout() {
        clearTimeout(this.timeout)
    }

    clearInterval() {
        clearInterval(this.interval)
    }

    restartTimer(total: number, countMessage: string, finalMessage: string) {
        this.clearTimeout()
        this.clearInterval()
        this.startTimer(total, countMessage, finalMessage)
    }
}
