import { describe, expect, test } from "vitest";
import { containsEnglish } from "../src/english/english.js";

describe("containsEnglish", () => {
    test("should return true when text contains English", () => {
        expect(containsEnglish("abcEnglishdef")).toBe(true);
    });

    test("should return true ignoring uppercase and lowercase", () => {
        expect(containsEnglish("eNglisH")).toBe(true);
    });

    test("should return false when letters are not in the correct order", () => {
        expect(containsEnglish("abcnEglishsef")).toBe(false);
    });

    test("should return false when text is empty", () => {
        expect(containsEnglish("")).toBe(false);
    });
});