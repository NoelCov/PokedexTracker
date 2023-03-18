import { useState } from "react";
import "./input.styles.css";

interface InputProps {
    type: React.HTMLInputTypeAttribute;
    placeholder?: string;
}

export const InputComponent = ({
    type,
    placeholder,
}: InputProps): JSX.Element => {
    const [text, setText] = useState("");
    return (
        <input
            className="input"
            type={type}
            value={text}
            placeholder={placeholder}
        />
    );
};
