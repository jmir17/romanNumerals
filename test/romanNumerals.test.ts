/*
Example results:
1 >> I			21 >> XXI	
2 >> II		50 >> L
3 >> III		97 >> XCVII
4 >> IV		100 >> C
5 >> V		500 >> D
9 >> IX		1000>> M
*/

import { romanNumber } from "../src/romanNumber";

describe('RomanNumersals Test', () => {
    it('shoud return an I when sending a 1', () => {
        expect(romanNumber(1)).toBe("I");
    });
    it('shoud return an II when sending a 2', () => {
        expect(romanNumber(2)).toBe("II");
    });
    it('shoud return an III when sending a 3', () => {
        expect(romanNumber(3)).toBe("III");
    });
    it('shoud return an III when sending a 3', () => {
        expect(romanNumber(3)).toBe("III");
    });
    it('shoud return an V when sending a 5', () => {
        expect(romanNumber(5)).toBe("V");
    });
    it('shoud return an VII when sending a 7', () => {
        expect(romanNumber(7)).toBe("VII");
    });
    it('shoud return an XXXVIII when sending a 38', () => {
        expect(romanNumber(38)).toBe("XXXVIII");
    });
    it('shoud return an IV when sending a 4', () => {
        expect(romanNumber(4)).toBe("IV");
    });
    it('shoud return an IX when sending a 9', () => {
        expect(romanNumber(9)).toBe("IX");
    });
    it('shoud return an XLII when sending a 42', () => {
        expect(romanNumber(42)).toBe("XLII");
    });
    it('shoud return an L when sending a 50', () => {
        expect(romanNumber(50)).toBe("L");
    });
    it('shoud return an XC when sending a 90', () => {
        expect(romanNumber(90)).toBe("XC");
    });
    it('shoud return an CI when sending a 101', () => {
        expect(romanNumber(101)).toBe("CI");
    });
    it('shoud return an CDIV when sending a 404', () => {
        expect(romanNumber(404)).toBe("CDIV");
    });
    it('shoud return an DCCXXI when sending a 721', () => {
        expect(romanNumber(721)).toBe("DCCXXI");
    });
    it('shoud return an MMCMLVII when sending a 2957', () => {
        expect(romanNumber(2957)).toBe("MMCMLVII");
    });
});
