import { Entity } from "./Entity.js";

export class Platform extends Entity {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, "green");
    }
}