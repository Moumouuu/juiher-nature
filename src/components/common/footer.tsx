import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-juiher-ternary-green">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={"/assets/images/logo.png"}
              width={50}
              height={50}
              alt={"Logo Juiher Nature"}
              className="mr-2"
            />{" "}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Juiher Nature
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/qse" className="hover:underline me-4 md:me-6">
                Qualité Sécurité Environnement
              </a>
            </li>
            <li>
              <a
                href="/certifications"
                className="hover:underline me-4 md:me-6"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="/nous-rejoindre"
                className="hover:underline me-4 md:me-6"
              >
                Opportunités
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-full justify-around">
          <div className="my-6 text-gray-500 dark:text-gray-400 ">
            <h3 className="text-lg font-semibold">Nos horaires</h3>
            <p>Lundi – Vendredi : 8h00 – 12h00 / 14h00 – 17h00</p>
          </div>
          <div className="my-6 text-gray-500 dark:text-gray-400">
            <p>Tel: 05 53 76 03 97</p>
            <p>Email: contact@juihernature.fr</p>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://pluviaux.fr" className="hover:underline">
            Pluviaux™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
