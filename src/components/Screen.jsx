import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { copyToClipboard } from "../utils/fileUtils";

export default function Screen() {
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    return (
        <div className="flex h-full px-3">
            <div className="w-1/2">
                <Editor text={text} setText={setText}></Editor>
            </div>

            <div className="relative w-1/2">
                <button
                    className="absolute top-0 right-0 my-3 rounded-md border border-gray-500 bg-gray-200 px-3 py-1 text-black"
                    onClick={() => {
                        copyToClipboard(text);
                        setIsCopied(true);
                        setTimeout(() => {
                            setIsCopied(false);
                        }, 1000);
                    }}
                >
                    {isCopied ? "Copied!" : "Copy"}
                </button>
                <Preview text={text}></Preview>
            </div>

            {/* TODO: Template 컴포넌트 추가 예정 */}
        </div>
    );
}
