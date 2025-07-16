import { ProjectView } from "@/modules/projects/ui/views/project-view";
import { useTRPC } from "@/trpc/client";
import { getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

interface Props {
  params: Promise<{
    projectId: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { projectId } = await params;

  const trpc = useTRPC(); 

  const queryClient = getQueryClient();
  
  void queryClient.prefetchQuery(trpc.messages.getMany.queryOptions({
    projectId: projectId
  }));

  void queryClient.prefetchQuery(trpc.projects.getOne.queryOptions({
    id: projectId
  }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <ProjectView projectId={projectId} />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;