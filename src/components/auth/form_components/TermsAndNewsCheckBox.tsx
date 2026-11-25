import Link from "next/link";

interface TermsAndNewsCheckBoxProps {
    agreedTerms: boolean;
    newsletter: boolean;
    setAgreedTerms: (value: boolean) => void;
    setNewsletter: (value: boolean) => void;
}


export function TermsAndNewsCheckBox({ agreedTerms, newsletter, setAgreedTerms, setNewsletter }: TermsAndNewsCheckBoxProps) {
    return (
        <div className="space-y-2.5 pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    required
                    className="mt-0.5 h-4 w-4 rounded border-pink-300 text-pink-600 focus:ring-pink-400"
                />
                <span>
                    I agree to the{" "}
                    <Link href="#" className="font-bold text-pink-600 hover:underline">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="font-bold text-pink-600 hover:underline">
                        Privacy Policy
                    </Link>
                    .
                </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-pink-300 text-pink-600 focus:ring-pink-400"
                />
                <span>
                    Send me weekly tech compensation radar & hiring trend updates.
                </span>
            </label>
        </div>

    )
}