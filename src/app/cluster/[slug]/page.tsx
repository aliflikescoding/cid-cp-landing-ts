import React from "react";
import CustomContainer from "@/components/custom/CustomContainer";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

interface Cluster {
  id: number;
  name: string;
  description: string;
  imageFile: string;
  siteplanDescription: string;
  siteplanImage: string;
}

const ClusterPage = async ({ params }: Props) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cluster/${params.slug}`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const cluster: Cluster = data.cluster;

  return (
    <div className="py-20">
      <CustomContainer className="flex md:flex-row flex-col-reverse items-center">
        <div className="max-w-[50%]">
          <h1 className="text-5xl font-bold mb-4">Cluster {cluster.name}</h1>
          <p>{cluster.description}</p>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={`${cluster.imageFile}`}
            alt="Background Image"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-[343px] md:h-[543px] object-cover rounded-2xl"
            priority
          />
        </div>
      </CustomContainer>
    </div>
  );
};

export default ClusterPage;
