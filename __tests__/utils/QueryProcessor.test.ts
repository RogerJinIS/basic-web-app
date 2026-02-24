import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ruijianj"
          ));
    })

    test('should return andrew id', () => {
        const query = "What is your Andrew Id?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ruijianj"
          ));
    })

    test('should return sum for plus query', () => {
        const query = "What is 23 plus 67?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("90");
    })

    test('should return difference for minus query', () => {
        const query = "What is 77 minus 95?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("-18");
    })

    test('should return product for multiplied by query', () => {
        const query = "What is 23 multiplied by 75?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1725");
    })

    test('should return primes from list', () => {
        const query = "Which of the following numbers are primes: 47, 13, 3, 87, 78?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("47, 13, 3");
    })
});