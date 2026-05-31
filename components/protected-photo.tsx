import { useState } from "react";
import MyButton from "./my-button";
import { ImageZoom } from "./ui/shadcn-io/image-zoom";

interface Props {
  src1: string;
  src2: string;
  alt: string;
  password: string;
}

export default function ProtectedPhoto2({ src1, src2, alt, password: correctPassword }: Props) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // <-- new state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      setPassword("");
    } else {
    }
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
        <div className="relative w-[80%] md:w-[50%]">
            <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password to view this photo"
            className="px-4 py-3 text-[var(--colour-bodytext-1)] text-sm border w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 mr-2 -translate-y-1/2 text-sm text-[var(--main-colour)] hover:underline cursor-pointer hidden lg:inline"
            >
            {showPassword ? "Hide" : "Show"}
            </button>
        </div>
      <button
        type="submit"
        className="text-sm cursor-pointer w-[80%] md:w-[50%] text-center bg-transparent hover:bg-[var(--main-colour)] hover:text-white border-[var(--main-colour)] border-1 transition-colors rounded-full text-[var(--main-colour)] font-medium py-[10px] px-4"
      >
        View photo
      </button>
    </form>
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full overflow-hidden mb-4">
        <ImageZoom>
          <img
            src={src1}
            alt={alt}
            className="w-full h-auto transition-all duration-500"
            style={{ filter: isUnlocked ? "blur(0px)" : "blur(10px)" }}
          />
        </ImageZoom>
        {!isUnlocked && renderForm()}
      </div>

      <div className="relative w-full overflow-hidden">
        <ImageZoom>
          <img
            src={src2}
            alt={alt}
            className="w-full h-auto transition-all duration-500"
            style={{ filter: isUnlocked ? "blur(0px)" : "blur(10px)" }}
          />
        </ImageZoom>
        {!isUnlocked && renderForm()}
      </div>
    </div>
  );
}
