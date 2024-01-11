interface SEOProps {
	title: string
	description: string
	keywords: string[] // Added this line
}

interface Metadata {
	title: string
	description: string
	keywords: string[]
}

export default function SeoComponent(Info: SEOProps): Metadata {
	const { title, description,keywords } = Info
	const metadata: Metadata = {
		title: title,
		description: description,
		keywords: keywords
	}
	return metadata
}
