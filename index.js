class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(title) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let wordArray = title.split(' ')
    let result = []

    for (let n = 0; n < wordArray.length; n++) {
      if (n === 0) {
        result.push(this.capitalize(wordArray[n]))
      }
      else {
        if (exceptions.includes(wordArray[n])) {
          result.push(wordArray[n])
        }
        else {
          result.push(this.capitalize(wordArray[n]))
        }
      }
    }
    return result.join(' ')
  }

}