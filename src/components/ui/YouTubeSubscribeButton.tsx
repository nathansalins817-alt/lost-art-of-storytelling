import { YoutubeIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import type { ComponentProps } from "react";

interface YouTubeSubscribeButtonProps {
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
  label?: string;
}

export function YouTubeSubscribeButton({
  size = "md",
  className,
  label = "Subscribe on YouTube",
}: YouTubeSubscribeButtonProps) {
  return (
    <Button
      href={siteConfig.youtube.subscribeUrl}
      external
      variant="youtube"
      size={size}
      className={className}
      icon={<YoutubeIcon className="size-[18px]" />}
      iconPosition="left"
    >
      {label}
    </Button>
  );
}
