export function containsEnglish(text) {
    if (!text) {
        return false;
    }
    
    return text.toLowerCase().includes("english");
}