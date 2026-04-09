import { BlogList } from "@/components/sections/BlogList";
import { insightsContent } from "@/content/insights";

export default function InsightsPage() {
  return <BlogList featured={insightsContent.featured} posts={insightsContent.posts} />;
}
