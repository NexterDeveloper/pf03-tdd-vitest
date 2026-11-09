import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/fibonacci.js'

const MENSAJE = 'solo números enteros entre 0 y 78'

describe('fibonacci', () => {
    it('casos base: 0 y 1', () => {
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
    })

    it.each([
        [2, 1],
        [3, 2],
        [5, 5],
        [10, 55],
        [20, 6765],
    ])('fibonacci(%i) devuelve %i', (n, esperado) => {
        expect(fibonacci(n)).toBe(esperado)
    })

    it('límite superior: fibonacci(78)', () => {
        expect(fibonacci(78)).toBe(8944394323791464)
    })

    const invalidos = [-1, 79, 2.5, NaN, Infinity, -Infinity, '5', null, undefined, true]

    for (const valor of invalidos) {
        it(`lanza RangeError con ${typeof valor} ${String(valor)}`, () => {
            expect(() => fibonacci(valor)).toThrow(RangeError)
            expect(() => fibonacci(valor)).toThrow(MENSAJE)
        })
    }
})