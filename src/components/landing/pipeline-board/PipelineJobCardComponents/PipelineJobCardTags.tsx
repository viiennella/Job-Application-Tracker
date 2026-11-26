
interface PipelineJobCardTagsProps {
    tags: string[];
}

export function PipelineJobCardTags({ tags }: PipelineJobCardTagsProps) {
    if (tags.length === 0) return null;

    return (
        <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
                <span
                    key={`${tag}-${index}`}
                    className="rounded-lg border border-pink-200/80 bg-pink-50 px-2 py-0.5 text-xs font-bold text-pink-800"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
