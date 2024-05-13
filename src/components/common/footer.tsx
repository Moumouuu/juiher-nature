export const Footer = () => {
    return (
        <footer className="bg-juiher-ternary-green">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/" className="h-8 " alt="Juiher nature logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Juiher Nature</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/qse" className="hover:underline me-4 md:me-6">Qualité Sécurité Environnement</a>
                        </li>
                        <li>
                            <a href="/certifications" className="hover:underline me-4 md:me-6">Certifications</a>
                        </li>
                        <li>
                            <a href="/nous-rejoindre" className="hover:underline me-4 md:me-6">Opportunités</a>
                        </li>
                        <li>
                            <a href="/#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://pluviaux.fr" className="hover:underline">Pluviaux™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}