
class Utils {
  randomBetween(max, minNr, offsetAmount, negative) {
    let min = minNr || 0,
        offset = offsetAmount || 0,
        random;
    if (negative) {
      let r = Math.floor(Math.random() * ((max - min + 1) - offset) + min);
      random = r *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    }
    else {
      random = Math.floor(Math.random() * ((max - min + 1) - offset) + min);
    }
    return random;
  }
}

export default new Utils();
