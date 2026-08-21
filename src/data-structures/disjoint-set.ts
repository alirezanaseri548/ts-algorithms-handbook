export class DisjointSet {
    private readonly parent: number[];
    private readonly rank: number[];

    public constructor(size: number) {
        if (!Number.isInteger(size) || size < 0) {
            throw new RangeError("size must be a non-negative integer.");
        }

        this.parent = Array.from({ length: size }, (_, index) => index);
        this.rank = Array<number>(size).fill(0);
    }

    private validate(value: number): void {
        if (
            !Number.isInteger(value) ||
            value < 0 ||
            value >= this.parent.length
        ) {
            throw new RangeError(`Invalid set member: ${value}`);
        }
    }

    public find(value: number): number {
        this.validate(value);

        const parent = this.parent[value];

        if (parent === undefined) {
            throw new Error("Invalid parent state.");
        }

        if (parent !== value) {
            this.parent[value] = this.find(parent);
        }

        return this.parent[value] as number;
    }

    public union(left: number, right: number): boolean {
        const leftRoot = this.find(left);
        const rightRoot = this.find(right);

        if (leftRoot === rightRoot) {
            return false;
        }

        const leftRank = this.rank[leftRoot] ?? 0;
        const rightRank = this.rank[rightRoot] ?? 0;

        if (leftRank < rightRank) {
            this.parent[leftRoot] = rightRoot;
        } else if (leftRank > rightRank) {
            this.parent[rightRoot] = leftRoot;
        } else {
            this.parent[rightRoot] = leftRoot;
            this.rank[leftRoot] = leftRank + 1;
        }

        return true;
    }

    public connected(left: number, right: number): boolean {
        return this.find(left) === this.find(right);
    }
}
