function stringChop(str, size) {
    // If size is less than or equal to 0 or str is null, return an empty array
    if (size <= 0 || !str) return [];

    // Initialize an array to store the chunks
    const chunks = [];
    
    // Loop through the string and slice chunks of the given size
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    
    return chunks;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));

