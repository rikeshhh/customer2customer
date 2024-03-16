import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

return (
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton count={3} />
    </p>
  </SkeletonTheme>
);
