export class Util {
  public static Capitalized(word: string): string {
    if (!word) { return word; }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}

