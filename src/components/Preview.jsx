import Markdown from "react-markdown";

export default function Preview({ text }) {
    return (
        <div className="prose">
            <Markdown>{text}</Markdown>
        </div>
    );
}
