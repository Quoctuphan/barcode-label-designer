"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface BarcodeInputProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

export const BarcodeInput: React.FC<BarcodeInputProps> = ({ value, onChange, label, placeholder, disabled }) => {
    return (
        <div className="flex flex-col gap-2 mb-2">
            {label && <Label htmlFor={label}>{label}</Label>}
            <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} disabled={disabled} />
        </div>
    );
};