import { Skeleton, Stack } from "@chakra-ui/react";

const GenreSkeleton = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <Stack>
      {skeletons.map((skeleton) => (
        <Skeleton key={skeleton} paddingY="5px" height="32px" />
      ))}
    </Stack>
  );
};

export default GenreSkeleton;
