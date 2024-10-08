import { faCamera, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div id="app" className="w-screen h-screen !overflow-hidden grid grid-rows-[10rem_1fr]">

            <header className="bg-neutral h-full w-screen text-center grid grid-row-1 items-center">

                <div>
                    <h1 className="font-black text-4xl mb-2">{"Nick's Custom Cycles"}</h1>
                    <p className="text-3xl">Antique Showroom</p>
                </div>

            </header>

            <div className="h-full w-full bg-base-100 flex justify-center gap-[10vh] flex-col">

                <Link href="#">
                    <div className="flex justify-between items-center bg-neutral py-10 mx-4 rounded-3xl">

                        <FontAwesomeIcon icon={faCamera} className="w-24 ml-5" />

                        <div className="w-full text-center">
                            <h1 className="text-4xl font-black">Scan With QR</h1>
                        </div>

                    </div>
                </Link>

                <Link href="#">
                    <div className="btn btn-neutral h-auto py-10 mx-4 rounded-3xl text-white">

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
