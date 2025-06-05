import {contentfulClient} from './contentfulClient'

export interface BlogFormData {
  slug: string;
  publishedDate: string; // ISO string
  title: string;
  content: string; // Markdown text
  status: 'draft' | 'published';
}

// Type guard to check if sys has publishedAt property
const hasPublishedAt = (sys: unknown): sys is { publishedAt: string } => {
  return typeof sys === 'object' && sys !== null && 'publishedAt' in sys && typeof (sys as { publishedAt?: unknown }).publishedAt === 'string';
};

// Fetch a blog post by ID and map to BlogFormData
export const fetchBlogPostById = async (id: string): Promise<BlogFormData | null> => {
  try {
    const entry = await contentfulClient.getEntry(id);

    if (!entry || !entry.fields) return null;

    const fields = entry.fields;

    return {
      slug: typeof fields.slug === 'string' ? fields.slug : '',
      publishedDate: typeof fields.publishedDate === 'string' ? fields.publishedDate : '',
      title: typeof fields.title === 'string' ? fields.title : '',
      content: typeof fields.content === 'string' ? fields.content : '',
      status: hasPublishedAt(entry.sys) ? 'published' : 'draft',
    };
  } catch (error) {
     
    console.error('Error fetching blog post by ID:', error);
    return null;
  }
};


// Contentfulからブログ記事一覧を取得する関数
export async function fetchPostsFromContentful() {
  const response = await contentfulClient.getEntries<any>({
    content_type: 'pageBlogPost',
    order: '-fields.publishedDate',
  });

  return response.items.map((item: any) => {
    const fields = item.fields;
    return {
      id: item.sys.id,
      title: fields.title?.ja || fields.title || 'タイトルなし',
      status: fields.status === 'draft' ? '下書き' : '公開済み',
      date: fields.publishedDate ? new Date(fields.publishedDate).toISOString().slice(0, 10) : '',
      slug: fields.slug || '',
      content: fields.content || '',
    };
  });
}