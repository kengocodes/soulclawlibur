const tagVariants = [
  {
    bg: "bg-[#1e3a4d]",
    text: "text-[#a8c5d8]",
    border: "border-[#2d4f66]",
  },
  {
    bg: "bg-[#3d2942]",
    text: "text-[#d4a8c4]",
    border: "border-[#553758]",
  },
  {
    bg: "bg-[#1e3d2e]",
    text: "text-[#a8d4b8]",
    border: "border-[#2d5540]",
  },
  {
    bg: "bg-[#3d351e]",
    text: "text-[#d4c4a8]",
    border: "border-[#554a2d]",
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
