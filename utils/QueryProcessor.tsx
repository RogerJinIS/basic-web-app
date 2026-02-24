export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return "ruijianj";
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "ruijianj";
  }

  const plusMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (plusMatch) {
    const sum = parseInt(plusMatch[1], 10) + parseInt(plusMatch[2], 10);
    return String(sum);
  }

  return "";
}
