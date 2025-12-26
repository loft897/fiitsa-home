import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";

const CTA_ICON_MAP: Record<string, string> = {
  rocket: "🚀",
  whatsapp: "📲",
  cart: "🛒",
};

function stripFrontmatter(input: string) {
  return input.replace(/^---[\s\S]*?---\s*/m, "");
}

function stripImports(input: string) {
  return input.replace(/^import\s+.*$/gm, "");
}

function parseProps(tag: string) {
  const props: Record<string, string> = {};
  const regex = /([\w-]+)=\"([^\"]*)\"/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(tag))) {
    props[match[1]] = match[2];
  }
  return props;
}

function replaceCTA(input: string) {
  return input.replace(/<CTA[\s\S]*?\/>/g, (match) => {
    const props = parseProps(match);
    const href = props.href || "#";
    const label = props.label || "Call to action";
    const icon = CTA_ICON_MAP[props.icon || ""] || "";
    return `<a href=\"${href}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"mdx-cta\">${icon} ${label}</a>`;
  });
}

function replaceVideo(input: string) {
  return input.replace(/<Video[\s\S]*?\/>/g, (match) => {
    const props = parseProps(match);
    const youtubeId = props.youtubeId || "";
    const title = props.title || "Video";
    if (!youtubeId) return "";
    return `<iframe class=\"mdx-video\" width=\"100%\" height=\"420\" src=\"https://www.youtube.com/embed/${youtubeId}\" title=\"${title}\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>`;
  });
}

function replaceImageBlock(input: string) {
  return input.replace(/<ImageBlock[\s\S]*?\/>/g, (match) => {
    const props = parseProps(match);
    const src = props.src || "";
    const alt = props.alt || "";
    const caption = props.caption || "";
    if (!src) return "";
    return `\n<figure class=\"mdx-figure\">\n  <img src=\"${src}\" alt=\"${alt}\" class=\"mdx-image\"/>\n  ${caption ? `<figcaption class=\"mdx-caption\">${caption}</figcaption>` : ""}\n</figure>\n`;
  });
}

function transformMDX(input: string) {
  let output = input;
  output = stripFrontmatter(output);
  output = stripImports(output);
  output = replaceCTA(output);
  output = replaceVideo(output);
  output = replaceImageBlock(output);
  return output.trim();
}

export function ArticleContent({ content }: { content: string }) {
  const transformed = transformMDX(content);

  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]}
        components={{
          h1: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
        }}
      >
        {transformed}
      </ReactMarkdown>
    </div>
  );
}
