import { Product, Response } from "./model";

export async function fetchProducts(): Promise<Response> {
  const res = await fetch(
    'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/_all_docs?include_docs=true'
  );
  return await res.json();
}


export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(
    'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/' + id
  );
  return await res.json();
}
