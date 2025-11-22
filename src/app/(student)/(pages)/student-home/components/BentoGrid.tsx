import { cn } from "../../../../../../lib/utils";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BentoGrid,
  BentoGridItem,
} from "../../../../../component/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconX,
  IconRefresh,
} from "@tabler/icons-react";
import axios from "axios";

export function BentoGridDemo() {
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string;
    thumbnail: string;
    title: string;
  } | null>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVideoClick = (src: string, thumbnail: string, title: string) => {
    setSelectedVideo({ src, thumbnail, title });

    // If clicking a pre-existing video and recommendations already exist, don't fetch new recommendations
    if (
      recommendations.length > 0 &&
      recommendations.some((rec) => rec.title === title)
    ) {
      return;
    }

    fetchRecommendations(title);
  };

  const fetchRecommendations = async (title: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `http://localhost:8000/rec-sys`,
        {
          student_id: "123",
          video_title: title,
          video_link: "",
          video_description: "",
          video_tags: "",
          interaction_type: "click",
        },
        {
          timeout: 10000,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data?.recommendations) {
        // Process recommendations as before
        const recommendedItems = response.data.recommendations.map(
          (rec: any) => ({
            title: rec.video_title,
            description: rec.video_description || "Recommended for you",
            header: (
              <VideoThumbnail
                src={rec.video_link || "https://placehold.co/400"}
                thumbnail="/Thumbnail/default-thumbnail.webp"
                title={rec.video_title}
                onVideoClick={handleVideoClick}
              />
            ),
            icon: <IconRefresh className="h-4 w-4 text-neutral-500" />,
          })
        );

        setRecommendations((prev) => [...prev, ...recommendedItems]);
      }
    } catch (error: any) {
      console.error("API Error:", error);
      if (error.code === "ECONNREFUSED") {
        setError(
          "Cannot connect to server. Make sure FastAPI is running on port 8000"
        );
      } else {
        setError(
          error.response?.data?.detail || "Failed to get recommendations"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  // Combine items with recommendations, ensuring uniqueness
  const displayItems = [
    ...items,
    ...recommendations.filter(
      (rec) => !items.some((item) => item.title === rec.title)
    ),
  ];

  return (
    <>
      <BentoGrid className="max-w-4xl mx-auto">
        {displayItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <VideoThumbnail
                src={item.header.props.src}
                thumbnail={item.header.props.thumbnail}
                title={item.title}
                onVideoClick={handleVideoClick}
              />
            }
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      {selectedVideo && (
        <VideoModal
          src={selectedVideo.src}
          thumbnail={selectedVideo.thumbnail}
          onClose={handleCloseModal}
        />
      )}

      {/* Recommendations Loading State */}
      {isLoading && (
        <div className="text-center mt-4 text-gray-500">
          Loading recommendations...
        </div>
      )}

      {/* Recommendations Error State */}
      {error && <div className="text-center mt-4 text-red-500">{error}</div>}
    </>
  );
}

const VideoThumbnail = ({
  src,
  thumbnail,
  title,
  onVideoClick,
}: {
  src: string;
  thumbnail: string;
  title: string;
  onVideoClick: (src: string, thumbnail: string, title: string) => void;
}) => (
  <div
    className="relative w-full h-full min-h-[6rem] rounded-xl overflow-hidden group cursor-pointer"
    onClick={() => onVideoClick(src, thumbnail, title)}
  >
    <Image
      src={thumbnail || "https://placehold.co/400"}
      alt={`${title} thumbnail`}
      fill
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <div className="text-white text-center p-4">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">Click to watch</p>
      </div>
    </div>
  </div>
);

const VideoModal = ({
  src,
  thumbnail,
  onClose,
}: {
  src: string;
  thumbnail: string;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    onClick={onClose}
  >
    <div
      className="relative max-w-4xl w-full aspect-video"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
      >
        <IconX size={24} />
      </button>
      <video
        src={src}
        poster={thumbnail}
        controls
        autoPlay
        className="w-full h-full"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

const items = [
  {
    title: "Alcohol",
    description:
      "Explore the world of alcohol in chemistry with molecular structures, reactions, and practical applications.",
    header: (
      <VideoThumbnail
        src="/Videos/ALCOHOL [ Method of Preparation of Alcohol ] Organic Chemistry _ Class 12th and JEE Mains.mp4"
        thumbnail="/Thumbnail/75a5469d-eb27-4ac6-bfe7-52308c4d60cb.webp"
        title="Alcohol"
        onVideoClick={() => {}}
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Biomolecules",
    description:
      "A geometric exploration of elliptical curves and their mathematical properties.",
    header: (
      <VideoThumbnail
        src="/Videos/Ellipse Complete Revision _ JEE Mains + Advanced _ Invisible Mechanics.mp4"
        thumbnail="/Thumbnail/Probability-Banner.webp"
        title="Biomolecules"
        onVideoClick={() => {}}
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Algebra",
    description:
      "Delve into advanced algebraic concepts and problem-solving techniques.",
    header: (
      <VideoThumbnail
        src="/Videos/Single Valued Decomposition ( Numerical ).mp4"
        thumbnail="/Thumbnail/maths-symbols-icon-set-algebra-or-mathematics-subject-doodle-design-education-and-study-concept-back-to-school-background-for-notebook-not-pad-sketchbook-hand-drawn-illustration-vecto.jpg"
        title="Algebra"
        onVideoClick={() => {}}
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Chemical Kinetics",
    description:
      "Dive into chemical kinetics: reaction rates, time graphs, and dynamic processes in chemistry.",
    header: (
      <VideoThumbnail
        src="/Videos/videoplayback.mp4"
        thumbnail="/Thumbnail/chemical-kinetics.webp"
        title="Chemical Kinetics"
        onVideoClick={() => {}}
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Percentage",
    description:
      "Master motion algebra with equations, concepts, and real-world physics applications.",
    header: (
      <VideoThumbnail
        title=" Percentage"
        src="/Videos/probablity.mp4"
        thumbnail="/Thumbnail/download.png"
        onVideoClick={() => {}}
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

export default BentoGridDemo;
