import { faCamera, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
    return (
        <div id="app" className="w-screen max-w-screen !h-[100dvh] !overflow-y-hidden !overflow-hidden grid grid-rows-[10rem_1fr]">

            <header className="bg-neutral h-full w-screen text-center grid grid-row-1 items-center">

                <div>
                    <h1 className="font-black text-4xl mb-2">{"Nick's Custom Cycles"}</h1>
                    <p className="text-3xl">Antique Showroom</p>
                </div>

            </header>

            <div className="h-full w-full bg-base-100 flex justify-center gap-[10vh] flex-col px-5">

                <Link href="#">
                    <div className="btn btn-neutral h-auto w-full py-10 rounded-3xl text-white">
    
                        <div className="flex flex-row justify-between items-center">
                            <FontAwesomeIcon icon={faCamera} className="w-24 ml-5" />

                            <div className="w-full text-center">
                                <h1 className="text-4xl font-black">Scan With QR</h1>
                            </div>
                        </div>


                    </div>
                </Link>

                <Link href="#">
                    <div className="btn btn-neutral h-auto w-full py-10 rounded-3xl text-white">

                        <div className="flex flex-row justify-between items-center">
                            <FontAwesomeIcon icon={faMapLocation} className="w-24 ml-5" />

                            <div className="w-full text-center">
                                <h1 className="text-4xl font-black">Manually Search</h1>
                            </div>
                        </div>


                    </div>
                </Link>

            </div>


        </div>
    );
}
