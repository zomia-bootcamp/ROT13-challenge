const rot13 = require("./rot13");

test("encodes a single word", () => {
  const message = "rachelwuzheer";
  const encodedMessage = "enpuryjhmurre";
  expect(rot13.encode(message)).toBe(encodedMessage);
});

test("encodes multiple words", () => {
  const message = "rachel wuz heer";
  const encodedMessage = "enpury jhm urre";
  expect(rot13.encode(message)).toBe(encodedMessage);
});

test("decodes a single word", () => {
  const encodedMessage = "uryybjbeyq";
  const decodedMessage = "helloworld";
  expect(rot13.decode(encodedMessage)).toBe(decodedMessage);
});

test("decodes multiple words", () => {
  const encodedMessage = "enpury jhm urre";
  const decodedMessage = "rachel wuz heer";
  expect(rot13.decode(encodedMessage)).toBe(decodedMessage);
});
