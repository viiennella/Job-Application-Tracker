import { Mail } from "lucide-react";



export interface AuthEmailProps {
    /** Email input value */
    email: string;
    /** Email input change handler */
    setEmail: (email: string) => void;
    /** Label text */
    text: string;
}

export function AuthEmail(
    {
        email,
        setEmail,
        text
    }: AuthEmailProps
) {
    return (

        <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {text}
            </label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-pink-500">
                    <Mail className="h-4 w-4" />
                </div>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full rounded-2xl border-2 border-pink-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-900 placeholder-pink-300 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-200/50 shadow-2xs transition-all"
                />
            </div>
        </div>

    )
}