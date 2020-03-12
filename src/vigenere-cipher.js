class VigenereCipheringMachine {
    constructor(machine = true) {
    this.machine = machine
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.alphabetLength = this.alphabet.length
  }

  encrypt(message, key) {
    return this.crypt(message, key, "encrypt")
  }

  decrypt(encryptedMessage, key) {
    return this.crypt(encryptedMessage, key, "decrypt")
  }

  crypt(message, key, mode) {
    if (!message || !key) throw new Error()

    message = message.toUpperCase()
    key = key.toUpperCase()

    let result = []
    let keywordIndex = 0

    for (let symbol of message) {
      if (symbol >= "A" && symbol <= "Z") {
        let char
        if (mode === "encrypt") {
          char =
            (this.chariIndex(symbol) + this.chariIndex(key[keywordIndex])) %
            this.alphabetLength
        } else if (mode === "decrypt") {
          char =
            (this.chariIndex(symbol) +
              this.alphabetLength -
              this.chariIndex(key[keywordIndex])) %
            this.alphabetLength
        }
        result.push(this.alphabet[char])
        keywordIndex++
      } else result.push(symbol)

      if (keywordIndex === key.length) keywordIndex = 0
    }

    if (!this.machine) {
      return result.reverse().join("")
    }

    return result.join("")
  }

  chariIndex(char) {
    return this.alphabet.indexOf(char)
  }
}

module.exports = VigenereCipheringMachine;
