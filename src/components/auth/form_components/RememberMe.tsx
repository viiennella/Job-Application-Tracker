
interface RememberMeProps {
    rememberMe: boolean;
    setRememberMe: (value: boolean) => void;
}

export function RememberMe({ rememberMe, setRememberMe }: RememberMeProps) {
    return (
        <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-medium">
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-pink-300 text-pink-600 focus:ring-pink-400"
                />
                <span>Remember this device for 30 days</span>
            </label>
        </div>
    )
}