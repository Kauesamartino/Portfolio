import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

type ProjectRedirectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: ProjectRedirectPageProps) {
  const { id } = await params;
  redirect(`/${defaultLocale}/project/${id}`);
}
