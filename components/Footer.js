export default function Footer({ appLang, setAppLang }) {
    const langs = [{ lang: "en", text: "English" }, { lang: "es", text: "Español" }]; 

    const handleSetAppLang = e => {
        console.log(e.target.dataset.lang); 
        setAppLang(e.target.dataset.lang); 
    }; 

    return (
        <div className="relative footer items-center p-4 bg-base-300 text-base-content">
            <div>
                <p>Copyright &copy; 2022 - Todos los derechos reservados por <span className="font-bold">RewardMundo</span></p> 
            </div>
            <div className="justify-self-end dropdown dropdown-left dropdown-end">
                <label tabIndex={0} className="m-1 btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {langs.map((item, index) => (
                        <li onClick={handleSetAppLang} data-lang={item.lang} key={index}><a data-lang={item.lang}>{item.text}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    ); 
}