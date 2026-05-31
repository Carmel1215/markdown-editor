export default function Editor({ text, setText }) {
    return (
        <div className="h-full">
            <textarea
                className="h-full w-full resize-none outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}
