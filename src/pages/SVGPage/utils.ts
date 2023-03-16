export function getElemAttr(id: string, attr: string): string | null | undefined {
    return document.querySelector(`#${id}`)?.getAttribute(attr)
}
