import GithubSlugger from "github-slugger";

export type TocItem = {
  id: string;
  title: string;
  level: number;
};

export function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return minutes;
}

export function extractToc(markdown: string) {
  const slugger = new GithubSlugger();
  const lines = markdown.split("\n");
  const items: TocItem[] = [];

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const level = match[1].length;
    const title = match[2].replace(/`/g, "").trim();
    const id = slugger.slug(title);
    items.push({ id, title, level });
  }

  return items;
}
