import { redirect } from "next/navigation";

export default async function ToursPage({ params }: PageProps<"/[lang]/tours">) {
  const { lang } = await params;
  redirect(`/${lang}`);
}
