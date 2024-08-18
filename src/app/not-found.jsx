'use client'
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();
    return (
        <main className="relative overflow-hidden bg-secondary w-full min-h-screen">
            <div className="flex font-semibold gap-4 flex-col text-dark items-center justify-center w-full min-h-screen">
                <h1>Hmm... Sepertinya kamu tersesat nih. Yuk kembali lagi!</h1>
                <Button onClick={() => router.push('/')}>OK</Button>
            </div>
        </main>
    )
};

export default NotFoundPage