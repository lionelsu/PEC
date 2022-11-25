export function calcPolynomialEqtn(a, b, c) {
    const delta = Number(b ** 2 - 4 * a * c)
    const x1 = Number((-(b) + Math.sqrt(delta)) / 10)
    const x2 = Number((-(b) - Math.sqrt(delta)) / 10)

    const r = {
        none: 'Nenhuma raíz',
        oneRoot: `Uma raíz: {${x1}}`,
        twoRoot: `Duas raízes: {${x1}, ${x2}}` 
    }

    if(delta < 0) {
        return r.none
    } if(delta == 0) {
        return r.oneRoot
    }

    return r.twoRoot
}