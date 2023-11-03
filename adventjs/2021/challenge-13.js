// https://adventjs.dev/challenges/13

export default function wrapGifts(gifts) {
    if (gifts.length <= 0) return [];
    const coverUpDown = '*'.repeat(Math.max(...gifts.map(g => g.length)) + 2);
    
    return [
      coverUpDown,
      ...gifts.map(gif => `*${gif}*`),
      coverUpDown
    ]
}