const tagVariants = [
  {
    bg: "bg-[#1a4a66]",
    text: "text-[#7dd3fc]",
    border: "border-[#2d6080]",
  },
  {
    bg: "bg-[#4d1a40]",
    text: "text-[#f0abdc]",
    border: "border-[#6b2857]",
  },
  {
    bg: "bg-[#1a4d33]",
    text: "text-[#86efac]",
    border: "border-[#2d6645]",
  },
  {
    bg: "bg-[#4d3d1a]",
    text: "text-[#fcd34d]",
    border: "border-[#6b5a2d]",
  },
] as const;

function getTagVariant(tag: string) {
  const hash = tag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return tagVariants[hash % tagVariants.length];
}

export function getTagClasses(tag: string) {
  const variant = getTagVariant(tag);
  return `${variant.bg} ${variant.text} ${variant.border}`;
}
