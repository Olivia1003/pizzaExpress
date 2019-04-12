const GlobalData = {
    deliverId: '1'
}

export function getGlobal(key: string) {
    let res
    if (key) {
        res = GlobalData[key]
    }
    return res
}

export function setGlobal(key: string, value: any) {
    GlobalData[key] = value
}

