export const bodyRequiredDataValidator = (body: any, fields: string[]): object | undefined => {
    let required: string[] = []
    fields.forEach((key) => {
        if ([undefined, '', null].includes(body[key])) {
            required.push(key)
        }
    })
    return required.length ? { "missing": required } : undefined
}

export const PageNumberSanitizer = (page:any):number => {
    return isNaN(Number(page)) ? 1 : Number(page) 
}