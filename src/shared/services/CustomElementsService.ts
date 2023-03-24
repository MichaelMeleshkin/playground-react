const CElementsService = {
    define: (name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions) => {
        !CElementsService.get(name) && customElements.define(name, constructor, options)
    },
    get: (name: string) => {
        return customElements.get(name)
    },
}

export default CElementsService
