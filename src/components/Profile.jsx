import { useState } from "react";
import { BoxArrowRight, CaretRightFill, FileText, PersonCircle, TicketDetailed } from "react-bootstrap-icons";
import { PageTitle } from "./Title";
import team from "../assets/team.jpg"

const Profile = () => {
    const[pp, setPP] = useState(team);
    
    return (
        <div className="profile">
            <PageTitle title="Profile" />
            <div className="p-2 flex flex-col gap-y-1.5">
                <div className="bg-secondary w-full h-32 px-4 py-3 rounded-lg flex flex-col justify-between">
                    <div className="w-full flex justify-between">
                        <div className="">
                            <p className="font-bold">Aidel Haikal Alatas</p>
                            <p className="text-slate-500 font semibold">21 Tahun</p>
                        </div>
                        <div id="pp" className="w-12 h-12 rounded-full border border-primary overflow-hidden">
                            <img src={pp} alt="profile" loading="eager" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 font-medium text-tertiary">
                        <div className="">
                            <p>alatas@gmail.com</p>
                            <p>081381800123</p>
                        </div>
                        <div className="text-end">
                            <p>75 kg</p>
                            <p>175 cm</p>
                        </div>
                    </div>
                </div>
                <div className="bg-primary w-full h-12 rounded-lg px-4 flex justify-between items-center text-sm text-white font-semibold tracking-wide">
                    <span>Berlangganan Sekarang!</span>
                    <CaretRightFill />
                </div>
                <div className="bg-tertiary text-sm w-full h-12 rounded-lg px-4 flex justify-between items-center text-white font-semibold tracking-wide">
                    <span>Poin Anda</span>
                    <p className="font-bold">24 <span className="text-sm font-medium">poin</span></p>
                </div>
            </div>
            {/* menu */}
            <div className="p-2 divide-y divide-secondary">
                <div className="w-full h-12 flex justify-between items-center px-4">
                    <div className="flex gap-3 items-center text-tertiary">
                        <div className="w-5 h-6 grid place-items-center object-contain">
                            <TicketDetailed className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold">Tukarkan poin!</span>
                    </div>
                    <CaretRightFill />
                </div>
                <div className="w-full h-12 flex justify-between items-center px-4">
                    <div className="flex gap-3 items-center text-tertiary">
                        <div className="w-5 h-6 grid place-items-center object-contain">
                            <PersonCircle className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold">Edit Profil</span>
                    </div>
                    <CaretRightFill />
                </div>
                <div className="w-full h-12 flex justify-between items-center px-4">
                    <div className="flex gap-3 items-center text-tertiary">
                        <div className="w-5 h-6 grid place-items-center object-contain">
                            <FileText className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold">Tentang Kami</span>
                    </div>
                    <CaretRightFill />
                </div>
                <div className="w-full h-12 flex justify-between items-center px-4">
                    <div className="flex gap-3 items-center text-tertiary">
                        <div className="w-5 h-6 grid place-items-center object-contain">
                            <BoxArrowRight className="w-full h-full object-contain" />
                        </div>
                        <span className="font-semibold">Log Out</span>
                    </div>
                    <CaretRightFill />
                </div>
            </div>
        </div>
    )
}
export default Profile;