function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) return false;
  }
  return true;
}

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

  if (query.toLowerCase().includes("andrew id")) {
    return "ruijianj";
  }

  const plusMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (plusMatch) {
    const sum = parseInt(plusMatch[1], 10) + parseInt(plusMatch[2], 10);
    return String(sum);
  }

  const minusMatch = query.match(/what is (\d+) minus (\d+)/i);
  if (minusMatch) {
    const diff = parseInt(minusMatch[1], 10) - parseInt(minusMatch[2], 10);
    return String(diff);
  }

  const multPlusMatch = query.match(/what is (\d+) multiplied by (\d+) plus (\d+)/i);
  if (multPlusMatch) {
    const a = parseInt(multPlusMatch[1], 10);
    const b = parseInt(multPlusMatch[2], 10);
    const c = parseInt(multPlusMatch[3], 10);
    return String(a * b + c);
  }

  const multMatch = query.match(/what is (\d+) multiplied by (\d+)/i);
  if (multMatch) {
    const product = parseInt(multMatch[1], 10) * parseInt(multMatch[2], 10);
    return String(product);
  }

  const primesMatch = query.match(/which of the following numbers are primes:\s*([\d,\s]+)/i);
  if (primesMatch) {
    const numbers = primesMatch[1].split(",").map((s) => parseInt(s.trim(), 10));
    const primes = numbers.filter((n) => !isNaN(n) && isPrime(n));
    return primes.join(", ");
  }

  return "";
}
