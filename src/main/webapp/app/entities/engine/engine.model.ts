export class Engine {
    constructor(
        public id?: number,
        public name?: string,
        public manufacturer?: string,
        public capacity?: number,
        public architecture?: string,
        public debutYear?: number,
        public petrolEngine?: boolean,
        public dieselEngine?: boolean,
        public electricEngine?: boolean,
        public otherEngine?: boolean,
        public turbo?: boolean,
        public image?: any,
        public imageUrl?: string,
        public imageContentType?: any,
        public comments?: string,
        public evolutions?: Engine,
        public derivedFrom?: Engine,
        public rebranded = false
    ) { }
}
