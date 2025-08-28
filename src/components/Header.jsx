import { useState } from "react";
import { Menu, Wallet } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Beranda", href: "/"},
        { name: "Tentang Kami", href: "/about"},
        { name: "Produk", href: "#product"},
        { name: "Cara Kerja", href: "#steps"},
        { name: "Cerita Klien", href: "#testimonials"},
        { name: "Artikel", href: "/blog"},
    ];

    return (
        <>
            <header>
                <div className="header-wrapper">
                    <div className="header-container">
                        <div className="header-logo">
                            <a className="logo-link" href="/">
                                <span className="sr-only">Beranda</span>
                                <img src="img/1_GOZAIMA.png" alt="Logo Gozaima" className="h-8" />
                            </a>
                        </div>

                        <div className="nav-links-container">
                            <nav aria-label="Global">
                                <ul className="nav-list">
                                    {
                                        navLinks.map((link) => (
                                            <li 
                                                key={link.name}
                                            >
                                                <a className="nav-link" href={link.href}>{link.name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>

                        <div className="nav-actions">
                            <div className="nav-buttons">
                                <a
                                    className="nav-menu-btn"
                                    href="/contact"
                                >
                                    Hubungi Kami
                                </a>
                            </div>

                            <div className="nav-menu">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="menu-btn"
                                >
                                    {
                                        isOpen ? (
                                            <Wallet />
                                        ) : (
                                            <Menu />
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
