export default function Header() {
    return (
        <div className="flex px-5 md:px-20 py-16 gap-5">
            <div className="flex flex-col gap-4 justify-center items-center w-full ">
                <h1 className="font-title font-extrabold text-3xl md:text-5xl text-center break-words">
                    Discover, Collect, & Sell
                    <br />
                    <span>Extraordinary NFTs</span>
                </h1>
                <div className="text-center lg:text-left text-lg font-normal px-5">
                    The Worlds Largest Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens
                </div>
            </div>
        </div>
    )
}