import { redirect } from "next/navigation";

export default async function TourDetailPage({ params }: PageProps<"/[lang]/tours/[slug]">) {
  const { lang } = await params;
  redirect(`/${lang}`);
}
