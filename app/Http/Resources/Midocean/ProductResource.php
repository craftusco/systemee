<?php

namespace App\Http\Resources\Midocean;

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
            'reference' => $this['ref'], 
            'name' => $this['name'],
            'weight' => $this['weight'],
            'custom_field' => $this->calculateCustomField(),  
        ];
    }


    protected function calculateCustomField()
    {
        return $this['weight'] . ' kg';
    }
}
