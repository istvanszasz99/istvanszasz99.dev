---
paths:
  - "index.html"
  - "public/llms.txt"
  - "public/robots.txt"
  - "public/sitemap.xml"
---

# SEO and crawler file guidelines

When any fact or page changes, set the date in `public/sitemap.xml` `<lastmod>` and the JSON-LD `dateModified` in `index.html` to the same day.

## llms.txt

`public/llms.txt` follows the llmstxt.org format. Keep this order:

1. One H1 with the name. This is the only required part.
2. One blockquote summary with the key facts.
3. Detail sections with no headings. Use bold lead-ins and lists, because `##` and `###` are reserved for link lists.
4. `##` sections containing only link lists, written as `- [Name](absolute-url): short note`.
5. `## Optional` last, for links an agent can skip.

Keep it short enough to read in one pass. Write plain, factual statements with no promotional wording, and don't duplicate content as an FAQ. To test a change, ask an agent questions about the owner using only this file.

## robots.txt

- `public/robots.txt` ships as written, at the site root.
- `Sitemap:` URLs are absolute. `Allow` and `Disallow` values are relative, case-sensitive path prefixes.
- Every path is allowed by default, so don't add `Allow: /`. Add `Allow` only as an exception to a `Disallow`.
- A crawler that matches a named `User-agent` group ignores `User-agent: *`, so repeat any shared rules in the named group.
- AI training crawlers are allowed on purpose. To opt out while staying in AI search, add one group naming `Google-Extended`, `GPTBot`, `ClaudeBot`, `Meta-ExternalAgent` and `MistralAI-Training`, with `Disallow: /`.
- robots.txt controls crawling, not indexing or privacy. Use `<meta name="robots">` or `X-Robots-Tag` to control indexing.

## sitemap.xml

- `public/sitemap.xml` ships as written and is referenced from `robots.txt`.
- Use `<urlset>` version 0.9, with `<loc>` and `<lastmod>` in `YYYY-MM-DD` format.
- Don't add `<changefreq>` or `<priority>`, which are deprecated.
- Change `<lastmod>` only when the page really changes. List every public page if routes are added.

## Structured data

- Use JSON-LD only, in the `<script type="application/ld+json">` block in `<head>`. Don't add Microdata or RDFa (`itemprop`, `itemscope`, `property`, `typeof`) to the HTML or components.
- Keep one `@graph` with `@context` set to `https://schema.org`, and connect entities through `@id` references.
- Use only properties defined for that `@type` on schema.org. Write enumeration values as full `https://schema.org/...` URLs.
- Every value must match the visible site, and every image URL must exist in `public/`.
- After a change, check the deployed page with https://validator.schema.org and Google's Rich Results Test.
