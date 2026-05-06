interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  body,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  const align = centered ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${align} ${className}`}>
      {eyebrow && (
        <p className="text-brand font-medium text-xs tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-semibold text-3xl text-text-pri leading-snug">
        {heading}
      </h2>
      {body && (
        <p
          className={`text-text-sec text-base leading-7 mt-4 ${
            centered ? "max-w-xl" : "max-w-xl"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
