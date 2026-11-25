
import { ArrowRight } from "lucide-react";

interface SubmitButtonProps {
    isLoading: boolean;
    agreedTerms?: boolean;
    text: string;
}

export function SubmitButton({
    isLoading,
    agreedTerms = true,
    text,
}: SubmitButtonProps) {
    return (
        <div className="pt-2">
            <button
                type="submit"
                disabled={isLoading || !agreedTerms}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 py-3.5 text-sm font-black text-pink-950 shadow-lg shadow-pink-200 hover:from-pink-500 hover:to-yellow-400 transition-all active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
            >
                {isLoading ? (
                    <div className="h-4 w-4 border-2 border-pink-950/30 border-t-pink-950 rounded-full animate-spin" />
                ) : (
                    <>
                        <span>{text}</span>
                        <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                    </>
                )}
            </button>
        </div>
    );
}
