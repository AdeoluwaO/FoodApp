export abstract class ProdutsRepo {
    abstract getAllProducts() : Promise<Array<Map<string, unknown>>| string>
}