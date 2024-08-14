'use client';

import { Send, SendHorizonal } from "lucide-react";

const InputSendMessage = ({placeholder, handleSubmitForm, className, handleChangeInput, value}) => {


    return (
        <form className={`p-3 bg-slate-300 w-full rounded-t-lg active:ring-0  ${className}`} onSubmit={handleSubmitForm}>
            <div className="flex w-full justify-between items-center gap-4 px-2">
                <input className="w-full p-2 px-3 rounded-lg active:outline-none outline-none" type="text" placeholder={placeholder} value={value} onChange={handleChangeInput} />
                <button onClick={handleSubmitForm}>
                    <SendHorizonal className="text-green-700" />
                </button>
            </div>
        </form>
    )
};

export default InputSendMessage;