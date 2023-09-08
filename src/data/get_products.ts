import axios from "axios";
import { AppCostants } from "../core/utils/utils_exports";
import { ProdutsRepo } from "../core/domain/repositories/products_repository";
const url = AppCostants.productsUrl;
export class ProdusImpl extends ProdutsRepo {
   async getAllProducts(): Promise<string | Array<Map<string, unknown>>> {
      try {
        const response = await  axios.get(`${url}/products`);
        const products: Array<Map<string, unknown>> = response.data;
        console.log(`PRODUCTS MODELED ${JSON.stringify(products)} TYPE IS ${typeof JSON.stringify(products)}`)
        const data = products;
        return data;
      } catch (error) {
        return `Error ${error}`;
      }
    }
}
