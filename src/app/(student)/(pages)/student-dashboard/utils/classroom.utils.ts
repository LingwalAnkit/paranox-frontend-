export const generateClassroomUrl = (
  roomID: string,
  userFirstName?: string
): string => {
  const baseUrl = process.env.NEXT_PUBLIC_LOCAL;
  return `${baseUrl}/?role=student&roomID=${roomID}&userID=${userFirstName}`;
};
