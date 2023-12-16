interface SEOProps {
    title: string;
    description: string;

  }

  interface Metadata {
    title: string;
    description: string;
    keywords: string[];
}

export default function SeoComponent(Info:SEOProps):Metadata {

    const { title,description } = Info
    const metadata:Metadata = {
        title: title,
        description: description,
        keywords: ["UtakataKyosui","泡沫京水","Portfolio","ポートフォリオ"],

    }
    return metadata
}