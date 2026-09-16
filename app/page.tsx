"use client";
import { useState } from "react";
import { BarcodeInput } from "@/components/barcode/barcode-input";
import { BarcodeType, BarcodeTypeSelect } from "@/components/barcode/barcode-type-select";
import { BarcodePreview } from "@/components/barcode/barcode-preview";
import { Button } from "@/components/ui/button";
import OuterLayoutRouter from "next/dist/client/components/layout-router";
export default function Home() {
  const [barcode, setBarcode] = useState("");
  const [barcodeType, setBarcodeType] = useState<BarcodeType>("CODE128");
  return (
      <main className="p-6 space-y-1">
        <BarcodeInput value={barcode} onChange={setBarcode} label="Barcode" placeholder="Enter barcode" />
        <BarcodeTypeSelect value={barcodeType} onChange={setBarcodeType} />
        <BarcodePreview value={barcode} format={barcodeType} />
        <Button
          type="button"
          variant="outline"
          onClick={()=> {
            setBarcode("")
            setBarcodeType("CODE128")
          }}
        >
          Reset
        </Button>
      </main>

  );
}
