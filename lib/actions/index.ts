"use server"

import { scrapeAmazonProduct } from "../scrapper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        const scrapedProduct = await scrapeAmazonProduct(productUrl)
    } catch (error: any) {
        throw new Error(`Falha ao criar/atualizar o produto: ${error.message}`)
    }
}