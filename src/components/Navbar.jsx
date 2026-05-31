import { FaGithub } from "react-icons/fa";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between p-3 text-2xl font-bold shadow">
            <span>Markdown Editor</span>
            <div>
                <a href="https://github.com/Carmel1215" target="_blank">
                    <FaGithub size={24}></FaGithub>
                </a>
            </div>
        </nav>
    );
}
