<?php

namespace App\Http\Resources\Makito;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'id' => $this['id'] ?? null,
            'name' => $this['name'] ?? null,
            'permalink' => $this['permalink'] ?? null,
            'type' => $this['type'] ?? null,
            'status' => $this['status'] ?? null,
            'description' => $this['description'] ?? null,
            'short_description' => $this['short_description'] ?? null,
            'sku' => $this['sku'] ?? null,
            'price' => $this['price'] ?? null,
            'regular_price' => $this['regular_price'] ?? null,
            'sale_price' => $this['sale_price'] ?? null,
            'on_sale' => false,
            'purchasable' => true,
            'total_sales' => $this['total_sales'] ?? null,
            'external_url' => $this['external_url'] ?? null,
            'button_text' => $this['button_text'] ?? null,
            'tax_status' => $this['tax_status'] ?? null,
            'tax_class' => $this['tax_class'] ?? null,
            'manage_stock' => $this['manage_stock'] ?? null,
            'stock_quantity' => $this['stock_quantity'] ?? null,
            'backorders' => $this['backorders'] ?? null,
            'backorders_allowed' => $this['backorders_allowed'] ?? null,
            'backordered' => $this['backordered'] ?? null,
            'low_stock_amount' => $this['low_stock_amount'] ?? null,
            'sold_individually' => $this['sold_individually'] ?? null,
            'weight' => $this['weight'] ?? null,
            'dimensions' => [
                'length' => $this['length'] ?? null,
                'width' => $this['width'] ?? null,
                'height' => $this['height'] ?? null,
            ],
            'shipping_required' => $this['shipping_required'] ?? null,
            'shipping_taxable' => $this['shipping_taxable'] ?? null,
            'shipping_class' => $this['shipping_class'] ?? null,
        ];       
    }


    protected function calculateCustomField()
    {
        return $this['weight'] . ' kg';
    }
}
