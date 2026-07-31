export class ArraySet<T> {
  private readonly items: T[] = [];

  values(): T[] {
    return [...this.items];
  }

  search(value: T): number {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index] === value) {
        return index;
      }
    }
    return -1;
  }

  insert(value: T): boolean {
    if (this.search(value) !== -1) {
      return false;
    }
    this.items.push(value);
    return true;
  }
}