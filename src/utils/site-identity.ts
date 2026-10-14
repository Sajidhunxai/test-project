/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "Fake Store";
const DEFAULT_SITE_TAGLINE =
	"A live shop powered by Fake Store API, with a journal beside it.";

/** EmDash blog seed defaults we should replace for this store. */
const LEGACY_TITLES = new Set(["My Blog", "Blog"]);
const LEGACY_TAGLINES = new Set([
	"Thoughts, stories, and ideas.",
	"Thoughts on building for the web",
]);

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	const rawTitle = settings?.title?.trim() || "";
	const rawTagline = settings?.tagline?.trim() || "";

	return {
		siteTitle:
			!rawTitle || LEGACY_TITLES.has(rawTitle)
				? DEFAULT_SITE_TITLE
				: rawTitle,
		siteTagline:
			!rawTagline || LEGACY_TAGLINES.has(rawTagline)
				? DEFAULT_SITE_TAGLINE
				: rawTagline,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
