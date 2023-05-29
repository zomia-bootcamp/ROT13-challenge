# ROT13-challenge

## Instructions

1. Start by forking and cloning this repository.
1. Open the copied repository on your computer.
1. Install the necessary dependencies.
1. Create a new branch to work on.
1. Complete the given tasks mentioned below.

Work on the file `lib/challenge.js`. You don't have to create a pull request, but if you want feedback on your code, it's recommended to create one.

If you need help with forking and cloning, you can refer to the FAQs [here](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/) on forking and cloning.

### Ceasar Cipher

> A Caesar cipher is a simple and well-known encryption technique in cryptography. It is a type of substitution cipher where each letter in the original message is replaced by a letter that is a fixed number of positions down the alphabet. This technique is named after Julius Caesar, who used it in his private correspondence.
>
> – [Caesar cipher - Wikipedia, the free encyclopedia](http://en.wikipedia.org/wiki/Caesar_cipher)

We will be implementing a basic Caesar Cipher called ROT13 ("rotate by 13 places"). To understand the transformation, we align two alphabets as follows:

```md
Plain:    abcdefghijklmnopqrstuvwxyz
Cipher:   nopqrstuvwxyzabcdefghijklm
```

ROT13 is its own inverse, meaning that to undo ROT13, we can apply the same algorithm. Hence, the same method can be used for both encoding and decoding. This algorithm provides minimal cryptographic security and is often used as an example of weak encryption. Online forums use ROT13 to hide spoilers, punchlines, puzzle solutions, and offensive content from casual viewers.

### Requirements

1. Spend about 10 minutes planning on a whiteboard.
1. Implement your `ROT13Cipher` module.
1. Create a `.encode` method that takes a single word as input and returns the encrypted text. Run and test the provided examples. You can try out your code in `node.js`. You should be able to use your code like this:

    ```js
    let cipher = require('./lib/challenge');
    cipher.encode('hello'); //=> 'uryyb'
    cipher.encode('jeff'); //=> 'wrss'
    ```

1. Implement a `.decode` method that takes an encrypted word as input and returns the decrypted text.

**NOTE**: It is acceptable to hard-code the `alphabet` and `rotated` values. Once your solution is working, you can try generating them using code.

### Bonus

First, modify your cipher to allow strings with spaces, enabling you to encode and decode complete sentences instead of just words.

```js
cipher.encode('hello jeff'); //=> 'uryyb wrss'
```

Then, modify your cipher to handle uppercase characters as well.

```js
cipher.encode('Hello Jeff'); //=> 'Uryyb Wrss'
```

Next, implement a ROT25 cipher. You should implement both `.encode` and `.decode` methods. Test your solution and use the module pattern.

```js
let cipher = require('./lib/challenge').rot25;
cipher.encode('Hello Jeff'); //=> 'Gdkkn Idee'
```

**Very Challenging**: Finally, implement a cipher that takes a number between one and twenty-five as a parameter when it is instantiated. This number `n` will be used to rotate the alphabet by `n` places. For example, if you instantiate your cipher with 13, you should get the same results as the in-class lab. You can use [ROT-n Rotation Encryption online](http://www.rot-n.com/) to generate

 test strings for different input values.

**NOTE**: Before debugging any issues, make sure to run `grunt nag` as it detects common sources of errors.

Test your code by running `grunt test`.
