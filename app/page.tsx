"use client";
import { useState } from "react";
import { BarcodeInput } from "@/components/barcode/barcode-input";
import { BarcodeType, BarcodeTypeSelect } from "@/components/barcode/barcode-type-select";
export default function Home() {
  const [barcode, setBarcode] = useState("");
  const [barcodeType, setBarcodeType] = useState<string>("");
  return (
      <main className="p-6">
        <BarcodeInput value={barcode} onChange={setBarcode} label="Barcode" placeholder="Enter barcode" />
        <BarcodeTypeSelect value={barcodeType as BarcodeType} onChange={setBarcodeType} />
      </main>

  );
}
