"use client";
import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

interface BarcodePreviewProps {
    value: string;
    format?: JsBarcode.Options["format"];
    width?: number;
    height?: number;
    displayValue?: boolean;
}


export const BarcodePreview: React.FC<BarcodePreviewProps> = ({ value, format = "CODE128", width = 2, height = 80, displayValue = true }) => {
    const barcodeRef = useRef<SVGSVGElement>(null); 
    useEffect(() => {
        if(!barcodeRef.current || !value || !format) return;
        try {
            JsBarcode(barcodeRef.current, value,{
                format,
                width,
                height,
                displayValue,
                margin: 10,
                fontSize: 16,
                textMargin: 8
            })
        } catch (error) {
            console.error("Barcode generation error:", error)
        }
    }, [value, format, width, height, displayValue]);
       
       if(!value){
        return (
            <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                Nhập dữ liệu để tạo barcode
            </div>
        )
       }

       return (
        <div className="flex min-h-40 justify-center items-center">
           <svg ref={barcodeRef}/>
        </div>
        );  
    };