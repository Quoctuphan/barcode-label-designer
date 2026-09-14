"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

export const BARCODE_TYPES = [{ value: "CODE128", label: "Code 128", }, { value: "CODE39", label: "Code 39", }, { value: "EAN13", label: "EAN-13", }, { value: "EAN8", label: "EAN-8", }, { value: "UPC", label: "UPC", }, { value: "ITF14", label: "ITF-14", },] as const;
export type BarcodeType = (typeof BARCODE_TYPES)[number]["value"]; 

interface BarcodeTypeSelectProps {
    value: BarcodeType;
    onChange: (value: BarcodeType) => void;
    label?: string;
    disabled?: boolean;
}

export const BarcodeTypeSelect: React.FC<BarcodeTypeSelectProps> = ({ value, onChange, label = "Barcode Type", disabled=false }) => {

    return (
        <div className="space-y-2">
            <Label >{label}</Label>
            <Select value={value} onValueChange={ (value) => onChange(value as BarcodeType)} disabled={disabled}>
                <SelectTrigger> <SelectValue placeholder="Chọn loại barcode" /> </SelectTrigger>
                <SelectContent>
                    {BARCODE_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            
        </div>
    );
}